module.exports.config = {
	name: "vuda",
	version: "1.0.0",
	permission: 0,
	credits: "BADOL-KHAN",
	prefix: false,
	description: "hot pic.",
	category: "without prefix",
	cooldowns: 5
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["😬 ভুদা দেখো ভালো কথা 😘\n💋 ভুদাই কেউ চুম্মু দিবানা ধন্যবাদ 🤦‍♂️"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1tKP6laavGRjyBYyDFQGSpTUr4-svSGC5",
"https://drive.google.com/uc?id=1tjfIHIwA7ianswuss8PfxQKScR0ratDd",
"https://drive.google.com/uc?id=1uBoxCjK7-XrynnAduudb6i7GvWmTQoz6",
"https://drive.google.com/uc?id=1tG3GF027J0OY4J4Tjtq1zdxTxhIXdSTJ",
"https://drive.google.com/uc?id=1tZay0Twl1kLpZZeRjVHKSoyTf3auYDdX",
"https://drive.google.com/uc?id=1tgp1MrrYYqO-zeEtswLublpMqKvQtnQP",
"https://drive.google.com/uc?id=1tj3UI2cChEeqiH-n0x-HddaEeLkHV7-M",
"https://drive.google.com/uc?id=1uNxjxEWAxSzEkC6dIHBzskeStfkprpzr",
"https://drive.google.com/uc?id=1u5tPElg0iefQMvpcYIw7-nTGATGYtrFR",
"https://drive.google.com/uc?id=1t7Fy83f58BeWi6KsVuK4R7n58SvL3-66",
"https://drive.google.com/uc?id=1td4KyN82q_buxith2NupOFmB-vNzwFOV",
"https://drive.google.com/uc?id=1uBlXwQ55jvBwMOFNfD-deR4Dkwt9LMA6",
"https://drive.google.com/uc?id=1tPsaJxvL_svMooY1ryJDAOqyLudesrRG",
"https://drive.google.com/uc?id=1tHTqHPf1MS_BSgQYgipwmCwbxhkb6Ycy",
"https://drive.google.com/uc?id=1t7J8TFmi9TJLToakkgfx50MptvUZqiOa",
"https://drive.google.com/uc?id=1t7J8TFmi9TJLToakkgfx50MptvUZqiOa",
"https://drive.google.com/uc?id=1tLdBu_j7v_PaW57jdifR4yN_jTF0AnMU",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
