const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const oak = require("./data/oak.json");
const version = oak.version
const oak_introduction = oak.introduction
const server = require("./data/server.json")
const oak_trainer_left = server.trainer_left

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak " + version);
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 
  //CHECK FOR COMMANDS
  
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No command found...");
  }    
  try {
    let commandFile = require(`./gyms/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No Gym found...");
  } 
  try {
    let commandFile = require(`./pokestops/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No Pokestop found...");
  }
  try {
    let commandFile = require(`./roles/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error("No role found...");
  }  
});

// RESPONDER, from data
client.on("message", (message) => {
  if(responderObject[message.content]) {
    message.channel.send(responderObject[message.content]);
  }
});


/// WELCOME NEW TRAINER
client.on('guildMemberAdd', member => {
  member.guild.channels.get('483420033473576961').send(member.user + ", " + oak_introduction + ' Lets set your team using a command. Reply with one of the following team commands **!oak mystic** or **!oak valor** or **!oak instinct**. I will set your team and grant you access to new channels.\n\n*For help, refer to the <#483420019854934016> channel or just ask another Trainer.*'); 
});

/// TRAINER HAS LEFT THE SEVER
client.on('guildMemberRemove', member => {
  member.guild.channels.get('483831639575887873').send('**' + member.user.username + '**, ' + oak_trainer_left);
  //
});

client.login(process.env.BOT_TOKEN);
