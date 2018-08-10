module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Carrollton Parks Trail Entrance") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/XRdR8mKk7dC2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh3.googleusercontent.com/ZzaJ-vHFjmlConRXuCGpYaY3n90yS1H_10iYN_PGcdqUgVgbxhRiTVFYnS7yaogjXziG6IiCx2AUwYfqpCQ") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Medium, Must walk")
    .addField("**Nested**", "Yes")
    .addField("**Commands**", "`carrolltonparkstrailentrance`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
