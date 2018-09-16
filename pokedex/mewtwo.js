module.exports.run = (client, message, args) => {
    const pokemon = require("../data/pokemon/alakazam.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const moveset_fast = pokemon.moveset_fast
    const moveset_charge = pokemon.moveset_charge

    const oak = require("../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter(oak_name + " " + oak_version + " | Gamepress", oak_avi)
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
      .setDescription("Legendary")
      .addField("**Fast Moves**", moveset_fast)
      .addField("**Fast Moves**", moveset_charge)
  
      .setTimestamp()
    
      message.channel.send({embed});
    }