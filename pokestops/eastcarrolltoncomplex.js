module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("East Carrollton Softball/Baseball Complex") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/fzkWBdZpmjz)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/p0OQQBwT8Uft8W_yutFRQjvnyFfAr9F0a0Quyvw-kAORvOuKxEC6v-CBchVuVQv6kzEBRuKtJpQukp5lqfG8") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "Yes")
    .addField("**Commands**", "`eastcarrolltoncomplex`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
