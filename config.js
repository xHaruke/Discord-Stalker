require("dotenv").config();

module.exports = {
  userID: "", // user id of the person you want to stalk
  channelID: "", // channel in which the bot will send the messages..
  serverID: "", // a common server between the self bot and the user
  token: "" || process.env.token, // selfbot's token

  emojis: {
    online: "\🟢",
    idle: "\🌙",
    dnd: "\⛔",
    offline: "\💿",
  },

  presence: {
    emoji: "🐸",
    customStatus: "frog",
    status: "dnd", // online | invisible | dnd | idle
  },
};
