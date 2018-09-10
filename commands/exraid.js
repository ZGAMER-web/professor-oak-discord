module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("EX Raid Info")
    
    .setColor(0x00AE86)
    .setDescription("Exclusive Raid Pass to join a special Raid Battle. You can use this pass only at the specified limited-time event.")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/items/Item_1403.png")
    
    .setTimestamp()
    .addField("How To Receive An Ex-Raid Pass",
      "According to my research, EX Raid passes are distributed by an in game alert at 2pm once per week to random Trainers that have completed raid(s) at gyms located at in-game parks or at sponsored locations such as Starbucks & Sprint. For the best chances, be sure your gym badge is ranked to gold and complete multiple raids. I have found all Ex-Raid locations for West GA.")
   
    .addBlankField(false)
    .addField("**Bremen**", "N/A", true)
    .addField("**Carrollton**", "Starbucks, East Carroll", true)
    .addField("**Franklin**", "N/A", true)
    .addField("**Temple**", "N/A", true)
    .addField("**Villa Rica**", "N/A", true)
  
    message.channel.send({embed});
  }