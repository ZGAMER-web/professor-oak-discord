module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Professor Oak Commands")
    
    .setColor(0x00AE86)
    .setDescription("I am a custom Discord Bot that will help you along your journey. To interact with me, you must start each __new__ message with **!oak** then a space, followed by a command (found below). **Be sure to use these command in the <#483420033473576961> channel.**")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/items/GiftBox.png")
    
    .addField("**Set Team**", "`!oak mystic` or `!oak valor` or `!oak instinct`", false)
    .addField("Set Location", "`!oak bremen` or `!oak carrollton` or `!oak franklin` or `oak temple` or `!oak villarica`", false)

    .setTimestamp()
  
    message.channel.send({embed});
  }
