module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("In Memory Of Craig Davidson")
    
    .setColor(0x00AE86)
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/eN2MEbAgpRs)")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")

    .setThumbnail("https://lh6.ggpht.com/yvb3WC1TEcJD8MqhHh_BWP3JJi5jCF-Ryd8iTOxO5PcXhcdkVSULS3MFq-Hm-hxtLDT_Bmn65EY13VydnWA")
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`inmemoryofcraigdavidson` or `craigdavidson`")

    .setTimestamp()
  
    message.channel.send({embed});
  }
