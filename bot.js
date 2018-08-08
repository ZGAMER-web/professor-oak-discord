const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const BOT_VERSION = require('.data/bot.json');

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak " + BOT_VERSION);
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
  //CHECK FOR COMMANDS
  
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  } 
  try {
    let commandFile = require(`./pokestops/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
  
});

// RESPONDER
client.on("message", (message) => {
  if(responderObject[message.content]) {
    message.channel.send(responderObject[message.content]);
  }
});

client.login(process.env.BOT_TOKEN);
