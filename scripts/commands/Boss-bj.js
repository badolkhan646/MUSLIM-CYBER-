const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "bossj",
  version: "1.0.2",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "beginner's guide",
  prefix: true,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("@Raja Babu _____// ;* :/ 3:)")==0 || event.body.indexOf("100007070042228")==0 ||  event.body.indexOf("Raja vai")==0) {
		var msg = {
				body: "😑রা্ঁজা্ঁ বা্ঁবু্ঁ কে এতো ডাকো কেনো🙂\n😒জাননা রা্ঁজা্ঁ বা্ঁবু্ঁ আমার চিপাই থাকে🙄\n\n┏━━ [  𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻 𝐁𝐚𝐝𝐚𝐥-𝐂𝐡𝐨𝐰𝐝𝐡𝐮𝐫𝐲__//😈🤬👿\n┃🌻 𝐁𝐨𝐭-𝐌𝐨𝐝𝐢𝐟𝐲 [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮__//😈🤬👿 ]\n┗━━━━━━━━━━━━➢",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/22.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🆗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

                                       }
