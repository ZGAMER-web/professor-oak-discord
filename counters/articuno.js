module.exports.run = (client, message, args) => {
    const pokemon = require("../data/pokemon/articuno.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const counter_01 = pokemon.counter_01
    const counter_01_moveset = pokemon.counter_01_moveset
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_144_00.png?raw=true")
      .setDescription("Legendary")
      .addField(counter_01, counter_01_moveset)
  
      .setTimestamp()
    
      message.channel.send({embed});
    }
