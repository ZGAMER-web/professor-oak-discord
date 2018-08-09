module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Trinity Baptist Church") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/rsuu6EQSNRU2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh3.ggpht.com/QcCM3Q6BnytrxcFXHqFfCeaWQCXi2iLwQ5ZLZ0L8BZsv1mxs3jFoW_rLntLhyaEwvNr-ZFuynnRIY8r40e0") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`trinitybaptistchurch` or `trinitybaptist`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
