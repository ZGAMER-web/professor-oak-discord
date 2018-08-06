const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const prefix = config.prefix
const fs = require("fs");

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  client.user.setGame("!oak v.3.0.0");
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch(err) {
    message.channel.send("Sorry Trainer, I couldn't find that. Check your spelling and try again. For help, reply back with `!oak help`.")
  }
  if(command === "purge") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
}
});

client.login(process.env.BOT_TOKEN);
