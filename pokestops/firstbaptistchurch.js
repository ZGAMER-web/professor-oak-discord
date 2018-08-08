module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("First Baptist Church")
    
    .setColor(0x00AE86)
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/eN2MEbAgpRs)")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setThumbnail("https://lh3.googleusercontent.com/EVG9OwVHqpGzkItB-6n0NHhPHkBHO11InosVm7HSZILeIKMcAQlh1VKlAm0YOyFDnd1wviuTW1dwKA3wslRpyg")
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`firstbaptistchurch`")

    .setTimestamp()
  
    message.channel.send({embed});
  }
