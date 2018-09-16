module.exports.run = (client, message, args) => {
    const pokemon = require("../data/pokemon/mewtwo.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const buddy_distance = pokemon.buddy_distance
    const raid_boss_cp = pokemon.raid_boss_cp
    const raid_boss_cp_boosted = pokemon.raid_boss_cp_boosted

    const oak = require("../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter(oak_name + " " + oak_version, oak_avi)
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
      .setDescription("Legendary")
      .addField("Buddy Distance", buddy_distance)
      .addField("Raid Boss Max CP", raid_boss_cp + " or " + raid_boss_cp_boosted )      
      
  
      .setTimestamp()
    
      message.channel.send({embed});
    }