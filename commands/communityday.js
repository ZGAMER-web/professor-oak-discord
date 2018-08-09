module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("August Field Research")
  
  .setColor(0x00AE86)
  .setDescription("Report Field Research tasks that you've picked up from Pokestops. See the chart below for reference.")
  .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  .setThumbnail("https://storage.googleapis.com/pokemongolive/communityday/PKMN_Community-Day-logo2.png")
  .setImage("https://lh3.googleusercontent.com/0JcW5HtqxiDTCk1YBiVEsfHKZi3DYhEtjCnABgPP8qVjoY1MggCVlxSnBc0_iifOvD4ME39b2II2Mp3fOp8E=s0-v0-rj")
  
  message.channel.send({embed});
  message.delete();
}