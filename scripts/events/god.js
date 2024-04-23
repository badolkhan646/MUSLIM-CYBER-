module.exports.config = {
	name: "god",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "Mcs Team",
	description: "Record bot activity notifications!",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../utils/log");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "=== Bot Notification ===" +
                        "\n\n» Thread mang ID: " + event.threadID +
                        "\n» Action: {task}" +
                        "\n» Action created by userID: " + event.author +
                        "\n» " + Date.now() +" «",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "Name does not exist",
                    newName = event.logMessageData.name || "Name does not exist";
            task = "🙂𝐁𝐨𝐬𝐬_ আপনার পারমিশন ছাড়া গ্রুপের নাম পরিবর্তন করে☹️'" + oldName + "' to '" + newName + "'";
            await Threads.setData(event.threadID, {name: newName});
            break;
        }
        case "log:subscribe": {
            if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) task = "😦𝐁𝐨𝐬𝐬_ আপনার পারমিশন ছাড়া একটি নতুন গ্রুপে বট যোগ করেছেন😟";
            break;
        }
        case "log:unsubscribe": {
            if (event.logMessageData.leftParticipantFbId== api.getCurrentUserID()) task = "😳𝐁𝐨𝐬𝐬_ আপনার পারমিশন ছাড়া বটটিকে গ্রুপ থেকে বের করে দিয়েছে🥺"
            break;
        }
        default: 
            break;
    }

    if (task.length == 0) return;

    formReport = formReport
    .replace(/\{task}/g, task);
  var god = "100007070042228";

    return api.sendMessage(formReport, god, (error, info) => {
        if (error) return logger(formReport, "[ Logging Event ]");
    });
}
