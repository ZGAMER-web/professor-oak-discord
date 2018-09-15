module.exports.run = (client, message, args) => {
  const gym = require("../data/gyms/eastcarroll.json");
  const name = gym.name
  const picture = gym.picture
  const map = gym.map
  const location = gym.location

  const oak = require("../data/oak,json")
  const oak_name = oak.name
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    
    .setColor(0x00AE86)
    .setFooter(oak_name, "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

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