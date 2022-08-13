require("dotenv").config();

module.exports = {
  userID: "", // user id of the person you want to stalk
  channelID: "", // channel in which the bot will send the messages.. Only the selfbot should be able to send message in the channel.. The bot will crash if any other message is sent in that channel
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
