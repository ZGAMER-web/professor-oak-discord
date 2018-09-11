const oak = require("./data/oak.json");
const oak_introduction = oak.introduction

exports.run = (client, message, args) => {
    message.channel.send(oak_introduction).catch(console.error);
}