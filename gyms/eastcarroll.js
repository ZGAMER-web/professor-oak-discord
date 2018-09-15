module.exports.run = (client, message, args) => {
  const gym = require("../data/gyms/eastcarroll.json");
  const name = gym.name
  const picture = gym.picture
  const map = gym.map
  const location = gym.location

  const oak = require("../data/oak.json")
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    
    .setColor(0x00AE86)
    .setFooter(oak_name + " " + oak_version, oak_avi)

    .setTitle(name)
    .setThumbnail(picture)
    .setDescription("[CLICK HERE FOR DIRECTIONS](" + map + ")")
    .addField("**Location**", location)
    .addField("**Access**", "Easy, Free Parking")
    .addField("**Ex Raid Eligable**", "Yes")
    .addField("**Commands**", "`eastcarroll` or `skatepark`")

    .setTimestamp()
  
    message.channel.send({embed});
  }