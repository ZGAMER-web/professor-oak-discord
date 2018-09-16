module.exports.run = (client, message, args) => {
    const pokemon = require("../data/pokemon/mewtwo.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const moveset_fast = pokemon.moveset_fast
    const moveset_charge = pokemon.moveset_charge
    const moveset_fast_legacy = pokemon.moveset_fast_legacy
    const moveset_charge_legacy = pokemon.moveset_charge_legacy
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
      .setFooter(oak_name + " " + oak_version + " | Gamepress", oak_avi)
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
      .setDescription("Legendary")
      .addField("**Buddy Distance**", buddy_distance)
      .addField("**Raid Boss Max CP**", raid_boss_cp)
      .addField("**Raid Boss Boosted Max CP**", raid_boss_cp_boosted)
      .addField("**Fast Moves**", moveset_fast)
      .addField("**Fast Moves**", moveset_charge)
      .addField("**Legacy Fast Moves**", moveset_fast_legacy)
      .addField("**Legacy Charge Moves**", moveset_charge_legacy)
      
  
      .setTimestamp()
    
      message.channel.send({embed});
    }