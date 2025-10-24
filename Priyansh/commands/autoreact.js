module.exports.config = {
  name: "autoreact",
  version: "1.1.1",
  hasPermission: 0,
  credits: "𝗔𝘁𝘁𝗮𝘂𝗹𝗹𝗮𝗵 𝗞𝗵𝘂𝗵𝗮𝗿𝗼",
  description: "Bot React",
  commandCategory: "No Prefix",
  usages: '[]',
  cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("Soul") || react.includes("soul")) {
    var msg = {
        body: ""
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
          };

    if(react.includes("atta") || react.includes("Atta") || react.includes("sindhi") ||  react.includes("Sindhi") || react.includes("Asma Ali") || react.includes("asma ali") || react.includes("jani") || react.includes("janu") || react.includes("bhai") || react.includes("bro") || react.includes("bruh") || react.includes("attaullah") || react.includes("love") || react.includes("Hashim") || react.includes("Anmol") || react.includes("😊") || react.includes("ilove") || react.includes("I love you") || react.includes("i Love") || react.includes("ok jan") || react.includes("ok janu") || react.includes("Ilab") || react.includes("labyu") || react.includes("Labyu") || react.includes("kiss") || react.includes("Kiss") || react.includes("yie") || react.includes("Krass") || react.includes("krass") || react.includes("kras") || react.includes("Krass") || react.includes("crush") || react.includes("crush") || react.includes("janu") || react.includes("oh ho") || react.includes("fuck") || react.includes("Fuck") || react.includes("Kinikilig") || react.includes("Kilig") || react.includes("😗") || react.includes("😙") || react.includes("😘") || react.includes("😚") || react.includes("ugh") || react.includes("Ugh") || react.includes("sige pa") || react.includes("Sige pa") || react.includes("priyansh") || react.includes("Priyansh") || react.includes("sex") || react.includes("Sex") || react.includes("☺") || react.includes("porn") || react.includes("Porn") || react.includes("kantotan") || react.includes("Kantotan") || react.includes("Iyotan") || react.includes("Iyutan") || react.includes("iyotan") || react.includes("iyutan") || react.includes("pasend") || react.includes("Pasend") || react.includes("Iyut") || react.includes("Iyot") || react.includes("iyot") || react.includes("iyut") || react.includes("eut") || react.includes("Eut") || react.includes("eut") || react.includes("😍") || react.includes("shet") || react.includes("Shet") || react.includes("send") || react.includes("Send") || react.includes("baby") || react.includes("Baby") || react.includes("babe") || react.includes("Babe") || react.includes("babi") || react.includes("Baby") || react.includes("bby") || react.includes("Bby") || react.includes("kantot") || react.includes("Kantot") || react.includes("manyak") || react.includes("libog") || react.includes("Libog") || react.includes("horn") || react.includes("Horn") || react.includes("abno") || react.includes("Abno") || react.includes("malibog") || react.includes("labs") || react.includes("Labs") || react.includes("pekpek") || react.includes("Pekpek") || react.includes("@Jordan Xhk") || react.includes("Pepe") || react.includes("🤭") || react.includes("🥰") || react.includes("puke") || react.includes("Puke") || react.includes("bilat") || react.includes("Bilat") || react.includes("puday") || react.includes("Puday") || react.includes("finger") || react.includes("Finger") || react.includes("fifinger") || react.includes("pipinger") || react.includes("Pipinger") || react.includes("pinger") || react.includes("Pinger") || react.includes("mwah") || react.includes("Mwah") || react.includes("mwuah") || react.includes("Mwuah") || react.includes("angel") || react.includes("Angel") || react.includes("jordan") || react.includes("Marry") || react.includes("😇") || react.includes("🤡")) {
      var lab = {
        body: ""
      }
      api.sendMessage(lab, threadID, messageID);
    api.setMessageReaction("❤️", event.messageID, (err) => {}, true)
          };
    if(react.includes("Asma Ali miss you") || react.includes("tera bap Atta hon") || react.includes("atta se gadari 😐") || react.includes("kmeeny") || react.includes("durr") || react.includes("fever") || react.includes("Pain") || react.includes("shut up") || react.includes("miss you jani") || react.includes("kaha ho") || react.includes("kidhar ho yar ") || react.includes("bewafa") || react.includes("batmeez") || react.includes("please") || react.includes("pleej") || react.includes("so sad") || react.includes("Sad") || react.includes("miss you") || react.includes("bhag Jao") || react.includes(" 😥") || react.includes("😰") || react.includes("😨") || react.includes("😢") || react.includes(":(") || react.includes("😔") || react.includes("😞") || react.includes("depress") || react.includes("stress") || react.includes("Stress") || react.includes("Depress") || react.includes("depression") || react.includes("Depression") || react.includes("kalungkutan") || react.includes("Kalungkutan") || react.includes("😭")) {
      var sad = {
        body: ""
      }
      api.sendMessage(sad, threadID, messageID);
    api.setMessageReaction("😢", event.messageID, (err) => {}, true)
          };
  if(react.includes("Pakistan") || react.includes("Pakistan") || react.includes("Sindhi") || react.includes("Atta")) {
      var flag = {
        body: ""
      }
      api.sendMessage(flag, threadID, messageID);
    api.setMessageReaction("🇵🇰", event.messageID, (err) => {}, true)
          };
  if(react.includes("eve") || react.includes("Eve") || react.includes("good morning") || react.includes("Morning") || react.includes("afternoon") || react.includes("Afternoon") || react.includes("evening") || react.includes("eat") || react.includes("Eat") || react.includes("night") || react.includes("nyt") || react.includes("Night") || react.includes("Nyt")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("❤", event.messageID, (err) => {}, true)
            };
  if(react.includes("wow") || react.includes("robot")) {
      var heart = {
        body: ""
      }
      api.sendMessage(heart, threadID, messageID);
    api.setMessageReaction("😮", event.messageID, (err) => {}, true)
            }
        }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

     }
