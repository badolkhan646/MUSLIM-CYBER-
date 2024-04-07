module.exports.config = {
	name: "pompom",
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
   var hi = ["😬 পমপম দেখো ভালো 😘\n🖐️হাত মারাটা ভালোনা ধন্যবাদ 🤦‍♂️"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://i.imgur.com/frizc8X.jpeg",
"https://i.imgur.com/frizc8X.jpeg",
"https://i.imgur.com/Gr2VqSY.jpeg",
"https://i.imgur.com/2brxSWx.jpeg",
"https://i.imgur.com/R0zkPs9.jpeg",
"https://i.imgur.com/uVnrUCZ.jpeg",
"https://i.imgur.com/4II2mWR.jpeg",
"https://i.imgur.com/p7nXG8H.jpeg",
"https://i.imgur.com/UxUmOjT.jpeg",
"https://i.imgur.com/vmvJjhU.jpeg",
"https://i.imgur.com/d9AgdrX.jpeg",
"https://i.imgur.com/fIU4TVX.jpeg",
"https://i.imgur.com/r7X9UnR.jpeg",
"https://i.imgur.com/l7dv4vA.jpeg",
"https://i.imgur.com/BeW82jj.jpeg",
"https://i.imgur.com/BeW82jj.jpeg",
"https://i.imgur.com/l7dv4vA.jpeg",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
