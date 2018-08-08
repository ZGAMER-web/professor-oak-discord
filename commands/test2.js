module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()

  const GYM_NAME = "East Carroll"
  
    .setTitle({GYM_NAME})
    
    .setColor(0x00AE86)
    .setDescription("Hello Trainer! Based on my research, I have found the following.")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh3.ggpht.com/TezUfbTmNcOZheSzLcq2Cfen7TSHCHAQKMS0nO0OYRh1X4Zzljer9QuPOouW5TAKPiPnI65WsCWcPQR5JreN")
    .setImage("https://lh3.ggpht.com/TezUfbTmNcOZheSzLcq2Cfen7TSHCHAQKMS0nO0OYRh1X4Zzljer9QuPOouW5TAKPiPnI65WsCWcPQR5JreN")
    
    .addField("Location", "Carrollton, GA", true)
    .addField("Ex Raid Eligable", "Yes", true)

    .setTimestamp()
  
    message.channel.send({embed});
  }