require("dotenv").config();

module.exports = {
  userID: "852848188942581764", // user id of the person you want to stalk
  channelID: "1002246544822653021", // channel in which the bot will send the messages
  serverID: "771238821550620703", // a common server between the self bot and the user
  token: "" || process.env.token, // selfbot's token

  emojis: {
    online: "<:online:1000681002630389800>", // \🟢
    idle: "<:Idle:1000681701409824778>", // \🌙
    dnd: "<:dnd:1000681840119664690>", // \⛔
    offline: "<:offline:1000681774881460234>", // \💿
  },

  presence: {
    emoji: "",
    customStatus: "frog",
    status: "dnd", // online | invisible | dnd | idle
  },
};
