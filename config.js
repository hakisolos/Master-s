//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingdavid23565@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/STAR-KING0/Queen_Alya";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeW5Tw4yltQOYIO5E2D";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/b065f0f673cae5452c358.jpg";
global.devs = "2348100835767";
global.sudo = process.env.SUDO || "2348100835767";
global.owner = process.env.OWNER_NUMBER || "2348100835767";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Y0pLkKX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://arthur-scanner.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0xPbnhPNGxxZ3hKYStmTldhK3YzdmNVMElRUWI0Ky9mYldnYitObU0ycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUlhUnVUQzZ4M2xlamlTTzJWaUVPNC9aUTV0NWJiOW4yNFNZcVp5ak13ST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4T0ZoWC9IZjNPdkw3VkkyTVplMFZsSGxLb2k5ZTVTMnRmRmthRFJhaldrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpUEZwYnI2WTRlNkFxTlhvV3BlSDhHOVRIVnRURTFzaGlhb1lBWDZzZjNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9IQXFWRDZUd0FPenFza3NPRnF0ODh4Q3lpa1VNKytVbUhLdjR6czVNSDA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVPUXFpc0ozWGUzeVhZWTdPcGh6MFRYOFN2dlF3aUJ0MnZUdTFWY21vVVE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUJ6L0k1U3I1aFBIcEhZaHZyUEJxSFdlemtXYlhna1F6cjR4R0VrOFpuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL3R2QXNxZmhId2JEVHJQRURUbUtzaEdNZ3ZocGJlSnc2M2VSMkFneFpXbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNPbWpMQ0NtYUlhZmd0NkFvOG9SNDJTVzY0RVMwUmh1OFc5V2QwblFtRnJIVEw4MC9FL0s1SmJlWm9tZ2YzRnh4WERIbDdQL08va0EzLzFYd0F3OEFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTMyLCJhZHZTZWNyZXRLZXkiOiI2dUloWDNYc2tWM2lka3FPSTY0cUorY29ZNlBqVGF0UGpTYWFkMjdVR2U4PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDkwMTc0NDI2MjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDEyMEM1RkYzOTFCQkRFODA3QTREMzk4NTMwNjdENDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNTM3MzEwOH0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTAxNzQ0MjYyN0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERjkyOEY0NkU1QjJDMjA1NEY1RTEyMUNCNDc3QTNCOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1MzczMTA5fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJCRjluSmxsUVJPcTV3N2pYZTltc25RIiwicGhvbmVJZCI6IjAzMDY5MTI1LWU1NjItNDA4ZS1hNGRkLWYyMGYyNTUwYTNjNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4OEFHWU1TTm5TME9YS0ZIMm1rTWRmUHJFREk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWlRZ0o1SGxzNG9pcGpUOGJjRTZ6QlZTczg4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlFQS002TFEyIiwibWUiOnsiaWQiOiIyMzQ5MDE3NDQyNjI3OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFzdGVyIFMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0x5ajZQZ0dFS1MxM0xZR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkFCclV6TzdkQXhIdHp3OHg1VkNQUGQ5TWtpZE5xK0pIVzhmcmdtVzZSUkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6Ik5Eb1BXMDh4dWZudmFvOGRQenZHSmJZMnRWRWtGODlBaHFBMzRiQlgzL28rTFFRZGtqOUR6MFlqRHRDM3NzU3hYVWZiTG1aQ093c3FJU1QzQVVHTUR3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI2ZTE2QWlLZHZKbjNSV0hHK1QxNEtmbWNjWksrbUxkdW5pc05QQjczQkFmNSs2WFN6RjZvWlorZkJ0NXBoeXU2MmtYSkxVdEdNckkwNUo3V2NGamdCQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDkwMTc0NDI2Mjc6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJRQWExTXp1M1FNUjdjOFBNZVZRanozZlRKSW5UYXZpUjF2SDY0Smx1a1VTIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI1MzczMTA1LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQVA0QyJ9"
module.exports = {
  githubToken: process.env.GITHUB_TOKEN || "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",
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ALYA™`",
  author: process.env.PACK_AUTHER || "QUEEN_ALYA",
  packname: process.env.PACK_NAME || "A L Y A",
  botname: process.env.BOT_NAME || "QUEEN_ALYA",
  ownername: process.env.OWNER_NAME || "STAR KING",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-qxpQpJ-Mq1E6PIJ0q10PMNpQ2dZHJLIpNuLxv_SXdgT3BlbkFJuJuesP4lz39WGcqglcdoYDxTRUrkvHZGeNX_-klnsA",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "A L Y A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
