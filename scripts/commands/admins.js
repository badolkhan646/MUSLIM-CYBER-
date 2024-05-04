module.exports.config = {
    name: "admin",
    version: "1.0.0",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------\n┏━━ [  𝐁𝐨𝐭-𝐎𝐰𝐧𝐞𝐫 ]━━➣\n┃🌻𝐍𝐚𝐦𝐞 :  [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮 ]\n┃🌻𝐅𝐚𝐜𝐜𝐛𝐨𝐨𝐤 :  [ 𝐑𝐚𝐣𝐚-𝐁𝐚𝐛𝐮___👿🤬😈 ]\n┃🌻𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧 : [ 𝐈𝐬𝐥𝐚𝐦 ]\n┃🌻𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐊𝐡𝐮𝐥𝐧𝐚 ]\n┃🌻𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬 : [ 𝐏𝐚𝐢𝐤𝐠𝐚𝐜𝐡𝐚 ]\n┃🌻𝐆𝐞𝐧𝐝𝐞𝐫 : [ 𝐌𝐚𝐥𝐞 ]\n┃🌻𝐀𝐠𝐞 : [ 𝟏𝟖+ ]\n┃🌻𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : [ 𝐒𝐢𝐧𝐠𝐥𝐞 ]\n┃🌻𝐖𝐨𝐫𝐤 : [ 𝐉𝐨𝐛 ]\n┃🌻𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩 : [ wa.me/+8801782721761 ]\n┃🌻𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐔𝐬𝐞𝐫 : [ RAJA.BABU.TERA.REAL.ABBU.OK.07 ]\n┃🌻𝐌𝐞𝐬𝐬𝐞𝐧𝐠𝐚𝐫𝐞 : [ m.me/100007070042228 ]\n┗━━━━━━━━━━━━➢`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://graph.facebook.com/100007070042228/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
