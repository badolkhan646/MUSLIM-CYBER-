const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "gameni",
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

module.exports.run = async function ({ api, event, args }) {
  const axios = require("axios");
  let uid = event.senderID,
    url;
  if (event.type == "message_reply") {
    if (event.messageReply.attachments[0]?.type == "photo") {
      url = encodeURIComponent(event.messageReply.attachments[0].url);
      api.sendTypingIndicator(event.threadID);
      try {
        const response = (await axios.get(`https://deku-rest-api.replit.app/gemini?prompt=describe%20this%20photo&url=${url}&uid=${uid}`)).data;
        return api.sendMessage(response.gemini, event.threadID);
      } catch (error) {
        console.error(error);
        return api.sendMessage('❌ | An error occurred. You can try typing your query again or resending it. There might be an issue with the server that\'s causing the problem, and it might resolve on retrying.', event.threadID);
      }
    } else {
      return api.sendMessage('Please reply to an image.', event.threadID);
    }
  } else {
    return api.sendMessage(`Please enter a picture URL or reply to an image with "gemini answer this".`, event.threadID);
  }
};
