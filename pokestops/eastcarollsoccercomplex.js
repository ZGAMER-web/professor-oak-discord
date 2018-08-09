module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("East Carroll Soccer Complex") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/xt3W4dNyW3G2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/nWOMJ-o7hT80cF3gk3OJf5s6SU7vj7UJWk28YgaJUeAI6lU1lZkR3ZCfQVQNDd8O5RFHUT-Ry2Ptm0F6mIY") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "Yes")
    .addField("**Commands**", "`eastcarrollsoccercomplex`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
