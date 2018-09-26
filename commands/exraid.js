module.exports.run = (client, message, args) => {
  const oak = require(`../data/oak.json`);
  const deleteTimer = oak.deleteTimer_default
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi

  message.delete(90000).catch(console.error);

  message.reply("").then(sentMessage => {
    sentMessage.delete(deleteTimer).catch(console.error);
  })

  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
  .setTitle("EX Raid Info")
  
  .setColor(0x00AE86)
  .setDescription("Exclusive Raid Pass to join a special Raid Battle. You can use this pass only at the specified limited-time event.")
  .setFooter(oak_name + " " + oak_version, oak_avi)
  .setThumbnail("https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/items/Item_1403.png")
  
  .setTimestamp()
  .addField("How To Receive An Ex-Raid Pass",
    "EX Raid passes are distributed by an in game alert at 2pm once per week to random Trainers that have completed raid(s) at gyms located at in-game parks or at sponsored locations such as Starbucks & Sprint. For the best chances, be sure your gym badge is ranked to gold and complete multiple raids. Based on my research, I have discovered the below Gyms to be EX Raid eligable.")
  
  .addField("**Bremen**", "N/A", true)
  .addField("**Carrollton**", "Starbucks, East Carroll", true)
  .addField("**Franklin**", "N/A", true)
  .addField("**Temple**", "Temple Recreation Center", true)
  .addField("**Villa Rica**", "Gold Dust Park Pavilion", true)

  message.channel.send({embed}).then(sentMessage => {
    sentMessage.delete(deleteTimer).catch(console.error);
  })
}
