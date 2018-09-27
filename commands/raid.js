module.exports.run = (client, message, args) => {
  let pokemonData = args[0];
  const pokemon = require(`../data/pokemon/${pokemonData}.json`);
  const name = pokemon.name
  const dex = pokemon.dex
  const raid_boss_cp = pokemon.raid_boss_cp
  const raid_boss_cp_boosted = pokemon.raid_boss_cp_boosted
  
  let gymData = args[1];
  const gym = require(`../data/gyms/${gymData}.json`);
  const gym_name = gym.name
  const gym_map = gym.map

  let raidTimer = args[2]

  const oak = require("../data/oak.json")
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi
  const deleteTimer = oak.deleteTimer_default

  message.delete(deleteTimer).catch(console.error);
  
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    
  .setColor(0x00AE86)
  .setFooter(oak_name + " " + oak_version, oak_avi)

  .setTitle("**" + name + " Raid!**\n**@" + gym_name + "**")
  .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
  .setDescription("[CLICK HERE FOR DIRECTIONS](" + gym_map + ")")
  .addField("**Time Left**", raidTimer + " minutes")
  .addField("Max CP", raid_boss_cp + " or " + raid_boss_cp_boosted)

  .setTimestamp()

  client.channels.get("494640269455786003").send({embed});
}

