const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const fs = require("fs");
const responderObject = require('./data/responder.json');

// LOADS & RUNS THE COMMAND FOLDER
client.on('message', async message => {
  const prefixes = ['!', '\\?', '\\/', `<@!?${client.user.id}> `];
  const prefixRegex = new RegExp(`^(${prefixes.join('|')})`);
  const prefix = message.content.match(prefixRegex);
  client.user.setGame("!oak v.3.1.2");
   
  const args = message.content.slice(prefixes.length).trim().split(/ +/g);
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
