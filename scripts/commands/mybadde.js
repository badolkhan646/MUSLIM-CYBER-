const axios = require('axios');
const jimp = require("jimp");
const fs = require("fs");
module.exports.config = {
  name: "mybadde",
  version: "1.0.2",
  permission: 0,
  credits: "BADOL-KHAN",
  description: "beginner's guide",
  prefix: false,
  category: "guide",
  usages: "[Shows Commands]",
  cooldowns: 5,
  envConfig: {
    autoUnsend: true,
    delayUnsend: 60
  }
};

module.exports.run = async function ({ event, api }) {
	const t = Date.parse("January 06, 2024 00:00:00") - Date.parse(new Date());
	const seconds = Math.floor((t / 1000) % 60);
	const minutes = Math.floor((t / 1000 / 60) % 60);
	const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	const days = Math.floor(t / (1000 * 60 * 60 * 24));

	const message = `╭•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╮\n\n★রাজা-বাবুর জন্মদিন প্রর্যন্ত বাকি সময় হলো★\n\n»${days} ★দিন★ \n\n${hours} ★ঘন্টা★ \n\n${minutes} ★মিনিট★ \n\n${seconds} ★সেকেন্ড★\n\n╰•┄┅════❁𝙈𝘾𝙎•𝟬𝟬𝟳❁════┅┄•╯`;

	const links = [
		"https://i.imgur.com/71AKz4Z.jpeg",
		"https://i.imgur.com/7NFM2qH.jpeg"
	];
	const randomLink = links[Math.floor(Math.random() * links.length)];

	const response = await axios.get(randomLink, { responseType: 'stream' });
	const attachment = response.data;

	return api.sendMessage({ body: message, attachment: attachment }, event.threadID, event.messageID);
}
