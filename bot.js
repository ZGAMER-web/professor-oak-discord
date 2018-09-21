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
  client.channels.find("name", "bot-log").send(`**UPDATE: ${version}** I have restarted my database. I have reconized ${client.users.size} total Trainers, ${client.channels.size} total channels in ${client.guilds.size} servers.`);
  client.user.setGame(prefix + " " + version);
});

client.on("guildCreate", guild => {
  guild.createChannel('professor-oak', 'text');
  guild.createChannel('bot-log', 'text');
  /// NEED TO RUN A MESSAGE FOR THE PROFESSOR OAK CHANNEL HERE
  client.channels.get('483831639575887873').send(`**New Server:** ${guild.memberCount} Trainers.\n${guild.name} - (id: ${guild.id}).`);
  client.user.setGame(prefix + " " + version);
});

client.on("guildDelete", guild => {
  client.channels.get('483831639575887873').send(`**Left Server:** I have now serving ${client.users.size} total Trainers in ${client.guilds.size} servers.\n${guild.name} (id: ${guild.id}).`)
  client.user.setGame(prefix + " " + version);
});

/// WELCOME NEW TRAINER
const oak_welcome = oak.welcome
const oak_introduction = oak.introduction
const oak_set_team = oak.set_team
const oak_help = oak.help
const oak_trainer_joined = oak.trainer_joined

client.on('guildMemberAdd', member => {
  member.guild.channels.get('483420033473576961').send(member.user + ", " + oak_welcome + " " + oak_introduction + "\n" + oak_set_team + "\n" + oak_help).then(sentMessage => {
    sentMessage.delete(300000)
  }) 
  member.guild.channels.get('483831639575887873').send(member.user + '**, ' + oak_trainer_joined);
});

/// TRAINER LEFT THE SEVER
const oak_trainer_left = oak.trainer_left

client.on('guildMemberRemove', member => {
  member.guild.channels.get('483831639575887873').send('**' + member.user + '**, ' + oak_trainer_left);
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
    client.channels.get('483831639575887873').send(message.author.toString() + " used a `swearWord`. I've let them know not to use this type of language on this server.")
  }
});

client.login(process.env.BOT_TOKEN);
