module.exports.config = {
    name: "status",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
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

module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  const god = ["100065050393649"];
const security = `/home/runner/${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/.runner/${process.env.REPL_OWNER}${process.env.REPL_SLUG}`;
if (!fs.existsSync(security)) {
  api.sendMessage("𝐓𝐇𝐈𝐒 𝐁𝐎𝐓 𝐔𝐍𝐃𝐄𝐑 𝐏𝐑𝐎𝐓𝐄𝐂𝐓𝐄𝐃 𝐁𝐘 𝐌𝐃 𝐉𝐔𝐁𝐀𝐄𝐃 𝐀𝐇𝐌𝐄𝐃 𝐉𝐎𝐘\n\n𝐂𝐎𝐍𝐂𝐀𝐓 𝐌𝐘 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 𝐀𝐂𝐂𝐎𝐔𝐍𝐓 𝐅𝐎𝐑 𝐀𝐏𝐏𝐑𝐎𝐕𝐀𝐋\nhttps://www.facebook.com/mdjubaet.ahmed.9?mibextid=ZbWKwL\n𝐖𝐇𝐀𝐓𝐒 𝐀𝐏𝐏: 01709045888", event.threadID, event.messageID);
  api.sendMessage("𝐍𝐎 𝐀𝐏𝐏𝐑𝐎𝐕𝐀𝐋 𝐃𝐄𝐓𝐄𝐂𝐓𝐄𝐃 !!!!", god);
  return;
}
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
  var rankup = data.rankup;
  var resend = data.resend;
  var log = data.log;
  var tagadmin = data.tagadmin;
  var guard = data.guard;
  var antiout = data.antiout;
  //prefix == null ? rankup = `!` : rankup = `${prefix}`;
  log == null ? log = `true` : log = `${log}`;
  rankup == null ? rankup = `false` : rankup = `${rankup}`;
  resend == null ? resend = `false` : resend = `${resend}`;
  tagadmin == null ? tagadmin = `true` : tagadmin = `${tagadmin}`;
  guard == null ? guard = `true` : guard = `${guard}`;
  antiout == null ? antiout = `true` : antiout = `${antiout}`;
return api.sendMessage(`ᅠᅠ☣️Table ☣️ \n\n\n🍄────•🦋• ────🍄\n❯ 🍉 Log: ${log}\n❯ 🍇 Rankup: ${rankup}\n❯ 🍓 Resend: ${resend}\n❯ 🥕 Tag admin: ${tagadmin}\n❯ 🍑 Antirobbery ${guard}\n❯ 🍒 Antiout: ${antiout}\n🍄────•🦋• ────🍄`, threadID, messageID);
}
