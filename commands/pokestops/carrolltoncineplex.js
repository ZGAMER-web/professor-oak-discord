module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Carrollton Cineplex") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/ztBCDXRS3DT2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/sDxN3iokeAGxSX62FrgqORSGadqJ0OyXINRPcP6-FiG7uCfv6MOfOaDmCFMffl-LqPBQcwefcQ113n0GBv0p") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy,")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`carrolltoncineplex` `movietheatre`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
