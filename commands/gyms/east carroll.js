module.exports.run = (client, message, args) => {
    const gym = require("../../data/gyms/east_carroll.json");
    const gym_name = gym.name
    const gym_picture = gym.picture
    const gym_map = gym.map
    const gym_location = gym.location
    const gym_access = gym.access
    const gym_ex_raid = gym.ex_raid
    const gym_commands = gym.commands
  
    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    const message_delete_time_default = oak.message_delete_time_default

    message.reply("");

    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter(oak_name + " " + oak_version, oak_avi)
  
      .setTitle(gym_name)
      .setThumbnail(gym_picture)
      .setDescription("[CLICK HERE FOR DIRECTIONS](" + gym_map + ")")
      .addField("**Location**", gym_location)
      .addField("**Access**", gym_access)
      .addField("**Ex Raid Eligable**", gym_ex_raid)
      .addField("**Commands**", gym_commands)
  
      .setTimestamp()
    
      message.channel.send({embed}).then(sentMessage => {
        sentMessage.delete(message_delete_time_default)
        message.delete(message_delete_time_default)
      })
    }