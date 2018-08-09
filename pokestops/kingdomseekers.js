module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Kingdom Seekers Church") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/goJ8gQy1sbU2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh3.ggpht.com/WYexy0ktmzmPPc2lNhQ5GF2vdZUvflgv2jU5o7tZG3AosudWtVr-gBAU-WktoyyRzh4U7DfY5lppb4-L1Gg") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`kingdomseekerschurch` or `kingdomseekers`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
