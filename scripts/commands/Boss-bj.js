const fs = require("fs");
module.exports = {
  config:{
	name: "bossbj",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "BADOL-KHAN", 
	description: "Fun",
	category: "no prefix",
	usages: "bossbj",
        cooldowns: 5, 
},

handleEvent: function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
	if (body.indexOf("Raja babu")==0 || body.indexOf("@Raja Babu _____// ;* :/ 3:)")==0 || body.indexOf("100007070042228")==0 || body.indexOf("Raja vai")==0) {
		var msg = {
				body: "😑রা্ঁজা্ঁ-বা্ঁবু্ঁ-কে-এতো-ডাকো-কেনো🙂\n😒জাননা-রা্ঁজা্ঁ-বা্ঁবু্ঁ-আমার-চিপাই-থাকে🙄",
				attachment: fs.createReadStream(__dirname + `/BADOL-KHAN/22.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🤙", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {

  }
	}
