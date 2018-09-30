module.exports.run = (client, message, args) => {
  let raidEgg = args[0];
  
  let gymData = args[1];
  let raidTimer = args[2];
  const gym = require(`../data/gyms/${gymData}.json`);
  const gym_name = gym.name
  const gym_map = gym.map
  const gym_ex_raid = gym.ex_raid
  const gym_access = gym.access

  

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

  .setTitle("**T" + raidEgg + " Raid!**" + "\n@" + gym_name)
  .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/assets/ic_raid_egg_" + raidEgg + ".png?raw=true")
  .setDescription("Hatch Time: " + raidTimer + "\n" + "Ex Raid Eligable: " + gym_ex_raid + "\nGym Access: " + gym_access + "\n[GET DIRECTIONS](" + gym_map + ")")

  .setTimestamp()

  client.channels.get("494881248708263946").send({embed}).then(sentMessage => {
    sentMessage.delete(3600000).catch(console.error);
  });
}

