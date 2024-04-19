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
   var hi = ["😬 পমপম দেখেন ভালো কথা 😘\n🖐️হাত মেরে নুনুকে বমিবমি করবেন না ধন্যবাদ 🤦‍♂️"];
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
"https://drive.google.com/uc?id=1vSzdo3KfurhSemOuZAZdRB9NtxNGM-9J",
"https://drive.google.com/uc?id=1uvbVgagg9YOMTyW0Uw-Tk6qUx7teuFxb",
"https://drive.google.com/uc?id=1vHa-RpL8ZEziei2_GvAhjcSPdSgPkgoz",
"https://drive.google.com/uc?id=1uubhSCCzKRvq2ZgGVLDwvz01UHmQLK9G",
"https://drive.google.com/uc?id=1v0K_GuQfUTAvlcdEGJXcm_bSQ-eozmPv",
"https://drive.google.com/uc?id=1vUqWEIFS9UYZoyD46IL1DN4_nmMA-rOk",
"https://drive.google.com/uc?id=1vZ9SrycMxGGaDgg2z2i5twNbCs5aidqn",
"https://drive.google.com/uc?id=1vYPkxsR5vHC34g1e7Q3Li2Z9vWeHHtvp",
"https://drive.google.com/uc?id=1vBy4FlK759A_SoldXqovos9D1y88ZZFv",
"https://drive.google.com/uc?id=1ux37NoP7UzBKYBNh3XLCusDQE73VGdXh",
"https://drive.google.com/uc?id=1uzHPq0vT3vhYlzxTARx_chaHsGh9nEzp",
"https://drive.google.com/uc?id=1v7RqS-hso8s2247NLsVTFxMgkAH-GKrj",
"https://drive.google.com/uc?id=1uj0ffc64H3bW-4Jp_VCeoI3qgFLRLmrl",
"https://drive.google.com/uc?id=1uo2-8diGD4iTm4WJ8WXww0vKknMrQtmD",
"https://drive.google.com/uc?id=1vT1x1XXrl8xNFOOtXwJpKOsF-VFeVQCs",
"https://drive.google.com/uc?id=1v5BjRD27kYT8xWcCfPPYutyd7azhLGTJ",
"https://drive.google.com/uc?id=1vT1x1XXrl8xNFOOtXwJpKOsF-VFeVQCs",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   }; 
