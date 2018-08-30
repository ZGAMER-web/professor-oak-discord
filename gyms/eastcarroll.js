module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
    const location = require("../data/location.json");
    const carrollton = location.location_carrollton
  
    .setTitle("East Carroll")
    
    .setColor(0x00AE86)
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/q8qup3vJkrt)")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setThumbnail("https://lh3.ggpht.com/TezUfbTmNcOZheSzLcq2Cfen7TSHCHAQKMS0nO0OYRh1X4Zzljer9QuPOouW5TAKPiPnI65WsCWcPQR5JreN")
    
    .addField("**Location**", carrollton)
    .addField("**Access**", "Easy, Free Parking")
    .addField("**Ex Raid Eligable**", "Yes")
    .addField("**Commands**", "`eastcarroll` or `skatepark`")

    .setTimestamp()
  
    message.channel.send({embed});
  }
