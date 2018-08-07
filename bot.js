const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak v.3.1.0");
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  } 
  try {
    let commandFile = require(`./commands-old/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  } 
  try {
    let commandFile = require(`./commands-new/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    message.send("For help, reply back with `!oak help`");
  } 
  
});

client.login(process.env.BOT_TOKEN);
