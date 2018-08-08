module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("East Carroll")
    
    .setColor(0x00AE86)
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://maps.google.com/maps?ll=33.599598,-85.044185&q=33.599598,-85.044185%20(East%20Carroll%20Park))")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setThumbnail("https://lh3.ggpht.com/TezUfbTmNcOZheSzLcq2Cfen7TSHCHAQKMS0nO0OYRh1X4Zzljer9QuPOouW5TAKPiPnI65WsCWcPQR5JreN")
    
    .addField("Location", "Carrollton, GA", true)
    .addField("Access", "Easy, Free Parking", true)
    .addField("Ex Raid Eligable", "Yes", true)

    .setTimestamp()
  
    message.channel.send({embed});
  }