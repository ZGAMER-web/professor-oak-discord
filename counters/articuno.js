module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    
    const pokemon_data = require("../data/pokemon/articuno.json");
    const pokemon_name = pokemon_data.name
      
      .setColor(0x00AE86)
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  
      .setTitle("#144 ${pokemon_name}")
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_144_00.png?raw=true")
      .setDescription("Legendary")
      .addField("**Tyranitar**", "Smack Down / Stone Edge")
  
      .setTimestamp()
    
      message.channel.send({embed});
    }
