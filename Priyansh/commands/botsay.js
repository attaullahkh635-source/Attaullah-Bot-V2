module.exports.config = {
	name: "bot-say",
	version: "1.1.1",
	hasPermssion: 0,
	credits: "𝗔𝘁𝘁𝗮𝘂𝗹𝗹𝗮𝗵 𝗞𝗵𝘂𝗵𝗮𝗿𝗼",
	description: "Bot Saying",
	commandCategory: "ai",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("Please enter a message", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
