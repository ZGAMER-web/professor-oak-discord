module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("East Carrollton Recreation Center") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/rrXjCQMnYek)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/VLs53smtbKpd0mqdp31Wl6DG5WUtp1IC6jR-1wM4zMlzmxVvQEERpruSZ9gQxxOmsjmh7wF-3c0OrLd55ghn") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "Yes")
    .addField("**Commands**", "`eastcarrolltonrecationcenter` or `eastcarrollrec`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
