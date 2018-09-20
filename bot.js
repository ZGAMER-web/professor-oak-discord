const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const oak = require("./data/oak.json");
const version = oak.version 
const master_bot_log = oak.master_bot_log

// WAKE UP PROFESSOR OAK!
client.on("ready", () => {
  console.log(`I have restarted my database. I have reconized ${client.users.size} total Trainers, ${client.channels.size} total channels in ${client.guilds.size} servers.`)
  client.channels.get(master_bot_log).send(`I have restarted my database. I have reconized ${client.users.size} total Trainers, ${client.channels.size} total channels in ${client.guilds.size} servers.`);
  client.channels.find("name", "bot-log").send(`I have restarted & updated some data files to ${version}. I am online and ready to server ${client.users.size} total Trainers!`);
  client.user.setGame(prefix + " " + version);
});

// NEW SERVER!
client.on("guildCreate", guild => {
  guild.createChannel('professor-oak', 'text');
  guild.createChannel('bot-log', 'text');
  client.channels.get(master_bot_log).send(`**New Server:** ${guild.memberCount} Trainers.\n${guild.name} - (id: ${guild.id}).`);
  client.user.setGame(prefix + " " + version);
});

// LEFT SERVER!
client.on("guildDelete", guild => {
  client.channels.get(master_bot_log).send(`**Left Server:** I have now serving ${client.users.size} total Trainers in ${client.guilds.size} servers.\n${guild.name} (id: ${guild.id}).`)
  client.user.setGame(prefix + " " + version);
});

// NEW TRAINER!
client.on("guildMemberAdd", (member) => {
  member.guild.channels.get("professor-oak").send(`Welcome to **${guild.name}** ${member.user}!`);
});







// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
   
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
  const swearWords = ["shit", "Shit", "fuck", "Fuck", "dick", "Dick", "pussy", "Pussy", "bitch", "Bitch", "cunt", "Cunt"];
  if( swearWords.some(word => message.content.includes(word)) ) {
    message.reply("Please refrain from using that type of language on this server Trainer. I'm gonna delete that last message... I've informed the server mods of this action.").then(sentMessage =>{
      sentMessage.delete(20000)
    })
    message.delete(3000)
    client.channels.find('bot-log').send(message.author.toString() + " used a `swearWord`. I've let them know not to use this type of language on this server.")
  }
});

client.login(process.env.BOT_TOKEN);
