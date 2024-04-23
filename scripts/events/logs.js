module.exports.config = {
	name: "logs",
	eventType: ["log:unsubscribe","log:subscribe","log:thread-name"],
	version: "1.0.0",
	credits: "BADOL-KHAN",
	description: "record bot activity notifications",
    envConfig: {
        enable: true
    }
};

module.exports.run = async function({ api, event, Threads }) {
    const logger = require("../../Nayan/catalogs/Nayanc.js");
    if (!global.configModule[this.config.name].enable) return;
    var formReport =  "‼️Bot notification‼️" +
                        "\n\nthread id : " + event.threadID +
                        "\naction : {task}" +
                        "\nuser id : " + event.author +
                        "\ndate : " + Date.now() +" ",
        task = "";
    switch (event.logMessageType) {
        case "log:thread-name": {
            const oldName = (await Threads.getData(event.threadID)).name || "name does not exist",
                    newName = event.logMessageData.name || "name does not exist";
            task = "🙂𝐁𝐨𝐬𝐬_ আপনার পারমিশন ছাড়া গ্রুপের নাম পরিবর্তন করে☹️ : '" + oldName + "' to '" + newName + "'";
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

    return api.sendMessage(formReport, global.config.ADMINBOT[0], (error, info) => {
        if (error) return logger("", "");
    });
  return api.sendMessage(formReport, global.config.ADMINBOT[0]);
}
