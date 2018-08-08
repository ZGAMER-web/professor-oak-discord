module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
  .setColor(0x4A90E2)
  .setTitle("East Carroll")
  .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/q8qup3vJkrt)
  .setThumbnail("https://lh3.ggpht.com/TezUfbTmNcOZheSzLcq2Cfen7TSHCHAQKMS0nO0OYRh1X4Zzljer9QuPOouW5TAKPiPnI65WsCWcPQR5JreN")
    
    .addField("Location", "Carrollton, GA")
    .addBlankField(true)
    .addField("Access", "Easy, Free Parking")
    .addBlankField(true)
    .addField("Ex Raid Eligable","Yes")

    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setTimestamp()
  
    message.channel.send({embed});
  }