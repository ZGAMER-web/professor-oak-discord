const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const oak = require("./data/oak.json");
const version = oak.version 
const oakChannel = oak.default_channel
const serverLog = oak.server_log


// WAKE UP PROFESSOR OAK!
client.on("ready", () => {
  client.user.setGame(prefix + " " + version);
  console.log(`Ready to help ${client.users.size} Trainers in ${client.guilds.size} servers containing ${client.channels.size} combined channels.`);
});

client.on("guildCreate", guild => {
  guild.createChannel('professor-oak', 'text');
  client.user.setGame(prefix + " " + version);
  console.log(`Ready to help ${client.users.size} Trainers in ${client.guilds.size} servers containing ${client.channels.size} combined channels.`);
});

client.on("guildDelete", guild => {
  client.user.setGame(prefix + " " + version);
  console.log(`Ready to help ${client.users.size} Trainers in ${client.guilds.size} servers containing ${client.channels.size} combined channels.`);
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get(oakChannel).send("Welcome " + member.user + "! Before you start journey, I need to know your team and which areas you would like access to. Then, I'll make the correct channels visible for you. To start, just reply back with one of the following team commands in bold **!oak team mystic** or **!oak team valor** or **!oak team instinct**. Be sure to use **!oak** then a space followed by command and only use lowercase letter.").then(sentMessage => {
    sentMessage.delete(300000)
  });
  member.guild.channels.get(serverLog).send(member.user + " joined the server! Don't forget to welcome them mods.");
});

client.on('guildMemberRemove', member => {
  member.guild.channels.get(serverLog).send(member.user + " has left the server. I wonder what happened mods?");
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let commandFile = require(`./commands/${command}.js`);
  commandFile.run(client, message, args);
  console.error("No commands found...");
  message.reply("Sorry Trainer! I couldn't find any data using that command. Be sure you start each new message using **!oak** followed by a space then a command. Be sure to __only__ use lowercase letters. See some examples above as some commands and arguments may have recently changed.").then(sentMessage =>{
    sentMessage.delete(30000)
    message.delete(30000)
  });
});


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
    client.channels.get(serverLog).send(message.author.toString() + " used a `swearWord`. I've let them know not to use this type of language on this server.")
  }
  const oakHelp = ["!Oak", "! Oak", "! oak"];
  if( oakHelp.some(word => message.content.includes(word)) ) {
    message.reply("Start each new message using **!oak**, then a space, then a command for me to understand you properly.").then(sentMessage =>{
      sentMessage.delete(20000)
    })
    message.delete(20000)
  }
});

client.login(process.env.BOT_TOKEN);
