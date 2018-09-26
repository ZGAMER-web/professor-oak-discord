module.exports.run = (client, message, args) => {
  let pokemonData = args[0]
  const pokemon = require(`../data/pokemon/${pokemonData}.json`);
  const name = pokemon.name
  const dex = pokemon.dex
  const trainers_needed = pokemon.trainers_needed
  const raid_boss_cp = pokemon.raid_boss_cp
  const raid_boss_cp_boosted = pokemon.raid_boss_cp_boosted
  
  let gymData = args[1]
  let gymData2 = args[2]
  let gymData3 = args[3]
  const gym = require(`../data/gyms/${gymData}${gymData2}${gymData3}.json`);
  const gym_name = gym.name

  const oak = require("../data/oak.json")
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi
  const deleteTimer = oak.deleteTimer_default

  message.delete(deleteTimer).catch(console.error);

  message.reply("Good luck on your battle! For a 100% IV, you'll need a **" + raid_boss_cp + " CP** or **" + raid_boss_cp_boosted + " weather boosted CP.**").then(sentMessage => {
    sentMessage.delete(deleteTimer).catch(console.error);
  })
  
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    
  .setColor(0x00AE86)
  .setFooter(oak_name + " " + oak_version + " | Pokebattler", oak_avi)

  .setTitle("#" + dex + " " + name)
  .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
  .setDescription("This simulation was done using level 30 attackers and no dodging. Beating " + name + " should take " + trainers_needed + " Trainer(s) with Pokemon of this strenght. Trainers with little to no counters need double the amount shown. Bringing an extra Trainer or two never hurts!\n(L) = Legacy Move")
  .addField("**Gym name**", gym_name)

  .setTimestamp()

  message.channel.send({embed}).then(sentMessage => {
    sentMessage.delete(deleteTimer).catch(console.error);
  })
}

