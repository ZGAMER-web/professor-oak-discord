module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
    
      .setTitle("Welcome Trainer!")
      
      .setColor(0x00AE86)
      .setDescription("An all in one place for Trainers to connect with fellow Trainers from around the West Georgia area.")
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
      .setImage("https://pokemongolive.com/img/posts/giftselect.png")
      .setThumbnail("https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/items/GiftBox.png")
      
      .addField("Gifts Include", "Helpful items, Stardust, 7K eggs", true)
  
      .setTimestamp()
    
      message.channel.send({embed});
    }
  