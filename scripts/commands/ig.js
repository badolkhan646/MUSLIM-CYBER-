/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "BADOL-KHAN",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
   var hi = ["•—»✨「𝙈 𝘾 𝙎」✨«—•\n༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n᭄࿐-ইচ্ছে!!!গুলো!!!যদি!!!পবিত্র!!হয়!✿᭄\n\n✿᭄তাহলে!!!স্বপ্ন!!! গুলো..🖤🥀\n\n✿᭄ ࿐- একদিন!!!পূরণ!!!হবেই!!! ✿᭄\n\n✿᭄࿐ইনশাআল্লাহ..🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
" •—»✨「𝙈 𝘾 𝙎」✨«—•\n ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐ \n╭•┄┅════❁🌺❁════┅┄•╮\n\n_____✵♡︎\n\n___কি  হবে  এত  মানুষের প্রিয় হয়ে__🦋🌻\n\n__যদি আল্লাহ   প্রিয় না হতে পারি__🙂🦋\n\n_____✵♡︎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"___•—»✨「𝙈𝙪𝙨𝙡𝙞𝙢 𝘾𝙮𝙗𝙚𝙧」  ✨«—•\n ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 Program༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n┏╮/╱╰️❥☆••\n╱/╰┛🍁࿐চিরস্থায়ী কি \nজানেন͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌༒࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n༄আপনার সুন্দর ব্যবহার!!🍁!!࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌\n\n࿐͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌͌🍁যেটা মৃত্যুর পরও সবার সৃতিতে থাকবে🥰❁ཻ͜͡ღ᭄\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋\n\n-মক্কা তুমি ধন্য.༏༏😽🕋࿐\n\n-তোমার বুকে হয়েছিলো বিশ্ব নবীর জন্ম.༏༏࿐💛🙆\n\n🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n●══❥𝄞⋆⃝🥰 ভাগ্যর ༅༎༅ উপর ༅༎༅ কারো ༅༎༅ হাত নেই !!💚🌺🥀\n\n────😕\n🦋🌺-༅༎༅ সব ༅ ༎༅ কিছু ༅༎༅ পরিবর্তন ლ🌼\n༅༎༅ করার  মালিক  🌻😽💖\n\n🕊༎༅ একমাত্র ༅༎༅ আল্লাহ \n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n>🐰✨𝑻𝒉𝒊𝒔 𝒍𝒊𝒏𝒆 𝒊𝒔 𝒇𝒐𝒓 𝒚𝒐𝒖🖤🌸\nwish 🤗\n\nমৃত্যুর কয়েক সেকেন্ড আগে যেন প্রত্যেকটা\nমুসলমানের মুখে\nউচ্চারিত হয় !\nলা ইলাহা ইল্লাল্লাহু\n মুহাম্মাদুর রাসূলুল্লাহ ( সঃ )\n\nআমিন🤲🤲🥰\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n ༅༎❥~🦋\n\n༅༎❥━-কালি ছাড়া যেমন কলম 🖊️\nমূল্যহীন🗑️\n\nতেমনি নামাজ ছাড়া মুসলিম মূল্যহীন!!❥༅༎\n\n🖤~🦋\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n°\n\n—𝐒𝐮𝐩𝐞𝐫𝐦𝐚𝐧 𝐎𝐟 𝐓𝐡𝐞 𝐖𝐨𝐫𝐥𝐝—\n—হযরত মুহাম্মদ (সা:)💚🌼\n\n°\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",

"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🦋࿐\n\nহীরার চেয়েও দামি\nহযরত মুহাম্মদ (সাঃ) এর মুখের বাণী🫰🖤\n\n🦋࿐\nসুবহানাল্লাহ-🖤🥀\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★",
"•—»✨「𝙈 𝘾 𝙎」  ✨«—•\n  ༆-✿𝘽𝘼𝘿𝙊𝙇-𝘽𝙊𝙏-𝟬𝟬𝟳 ༊࿐\n╭•┄┅════❁🌺❁════┅┄•╮\n\n🥀\n- প্রতিশোধ নয়.!🙂💌\n- হ্মমা করাই ইসলামের আদর্শ.!❤️🥰\n\n- হযরত মোহাম্মদ (সাঃ)😍🤎\n\n╰•┄┅════❁🌺❁════┅┄•╯\n\n★𝘾𝙧𝙚𝙖𝙩𝙤𝙧★𝙈𝙧-𝘽𝘼𝘿𝙊𝙇-𝘾𝙃𝙊𝙒𝘿𝙃𝙐𝙍𝙔-𝙅𝙧★" 
 ];
;
  var know = hi[Math.floor(Math.random() * hi.length)];
  var link = [
  "https://drive.google.com/uc?id=1z4hOb2XpxsWSHeFyVMFBbK_EIFN6re19",
"https://drive.google.com/uc?id=1zrHVzg--oIIe4s4bX5gsSj4y-sLSGHn8",
"https://drive.google.com/uc?id=1-pXAnKTjkXdM-MzGa9I73QSBEDYNlFjU",
"https://drive.google.com/uc?id=1-2mgKIuWAA_Yxyl9_nOnVnpvDl5hG89Y",
"https://drive.google.com/uc?id=1zKHXDmVxY7--mbMsGzMasXkQo8za7QEL",
"https://drive.google.com/uc?id=1zTzvKw3NoqSRYiIToOv-1GwxRobBl02M",
"https://drive.google.com/uc?id=1yy8EUxN0YxmlCrFA1ZKLV0PB3D5AGXUV",
"https://drive.google.com/uc?id=1zC-TsLeW4pD2lji1IzDKe1_V0Yv7m6XT",
"https://drive.google.com/uc?id=1-5_n2FAYIVCK_-WksN1_3FYp6y4LESn5",
"https://drive.google.com/uc?id=1-1RMN5exfjT8ewNm-LWGlhSS8C5X6May",
"https://drive.google.com/uc?id=10a957MoQY0r4l8B_wAzCOIR0rLqi8DAo",
"https://drive.google.com/uc?id=1-6YNB3yPmYW9mLyxpVWCaNX71ql5eT-o",
];
	 var callback = () => api.sendMessage({body:`「 ${know} 」`,attachment: fs.createReadStream(__dirname + "/cache55.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache55.jpg"));	
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache55.jpg")).on("close",() => callback());
   };
