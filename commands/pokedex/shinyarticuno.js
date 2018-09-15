module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  
      .setTitle("#144 Shiny Articuno")
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_144_00_shiny.png?raw=true")
      .setDescription("Legendary")
      .addField("**Attack**", "Carrollton, GA")
  
      .setTimestamp()
    
      message.channel.send({embed});
    }