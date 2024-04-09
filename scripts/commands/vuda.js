module.exports.config = {
	name: "vuda",
    version: "1.0.1",
    permission: 0,
    credits: "BADOL-KHAN",
    prefix: true,
    description: "ask any thing",
    category: "admin",
    usages: "",
    cooldowns: 5,
    dependencies: {
        "openai": ""
    }
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["😬 ভুদা দেখো ভালো কথা 😘\n🖐️হা ভুদাই কেউ চুম্মু দিবানা ধন্যবাদ 🤦‍♂️"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/Puv0N6T.jpeg",
"https://i.imgur.com/ZZBkgyR.jpeg",
"https://i.imgur.com/uD7jtN3.jpeg",
"https://i.imgur.com/RWqS0ZC.jpeg",
"https://i.imgur.com/5M6TTjh.jpeg",
"https://i.imgur.com/5A57VAc.jpeg",
"https://i.imgur.com/DQHyk3e.jpeg",
"https://i.imgur.com/9CR2X4o.jpeg",
"https://i.imgur.com/k66Z1KO.jpeg",
"https://i.imgur.com/ThFgI0F.jpeg",
"https://i.imgur.com/hmNFb2q.jpeg",
"https://i.imgur.com/pKgVV7M.jpeg",
"https://i.imgur.com/RtL0fSz.jpeg",
"https://i.imgur.com/Zy4PTsB.jpeg",
"https://i.imgur.com/KhFxGn9.jpeg",
"https://i.imgur.com/D9vgM5n.jpeg",
"https://i.imgur.com/5A57VAc.jpeg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
