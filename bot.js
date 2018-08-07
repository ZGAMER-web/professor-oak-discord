const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");
const responderObject = require('./data/responder.json')

// LOADS & RUNS THE COMMAND FOLDER
client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak v.3.1.0");
   
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch(err) {
    message.channel.send("Sorry Trainer, I couldn't find that. Check your spelling and try again. For help, reply back with `!oak help`.")
  }
  
});

// RESPONDER
client.on("message", (message) => {
  if(responderObject[message.content]) {
    message.channel.send(responderObject[message.content]);
  }
});

// INDIVIDUAL COMMANDS
client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "googlemap")) {
    message.channel.send("Hello, Trainer. Long research has went into the Google Map. It now displays Gyms, Ex Raid eligable Gyms, Pokestops, in-game parks, and water spawns. You can now save the map to your Google account but clicking on the link below, then signing in on the top right. Close the browser, open Google Maps app, click the menu button, your places, then click the *Pokemon Go Carrollton Map*. https://drive.google.com/open?id=1rgYwn9FzHC1G1Ir4SCGbO4I_JeJLkHKb&usp=sharing");
  }
});

client.login(process.env.BOT_TOKEN);
