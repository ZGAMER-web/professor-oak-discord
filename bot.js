const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json');
const oak = require("./data/oak.json");
const version = oak.version

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame(prefix + " " + version);
   
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
  const swearWords = ["shit", "fuck"];
if( swearWords.some(word => message.content.includes(word)) ) {
  message.reply("Maybe you shoudn't use words like that in this channel, save it for <#469511290054770708>. I'm gonna delete that...").then(sentMessage =>{
    sentMessage.delete(20000)
  })
  setTimeout(function(){ 
    message.delete()
 }, 5000);
}
});


/// WELCOME NEW TRAINER
const oak_welcome = oak.welcome
const oak_introduction = oak.introduction
const oak_set_team = oak.set_team
const oak_help = oak.help
const oak_trainer_joined = oak.trainer_joined

client.on('guildMemberAdd', member => {
  member.guild.channels.get('483420033473576961').send(member.user + ", " + oak_welcome + " " + oak_introduction + " " + oak_set_team + "\n" + oak_help).then(sentMessage => {
    sentMessage.delete(300000)
  }) 
  member.guild.channels.get('483831639575887873').send('**' + member.user.username + '**, ' + oak_trainer_joined);
});

/// TRAINER HAS LEFT THE SEVER
const oak_trainer_left = oak.trainer_left

client.on('guildMemberRemove', member => {
  member.guild.channels.get('483831639575887873').send('**' + member.user.username + '**, ' + oak_trainer_left);
});

client.login(process.env.BOT_TOKEN);
