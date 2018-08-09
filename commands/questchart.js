module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**August Field Research, Daily Reportings**")
    
    .setColor(0x00AE86)
    .setDescription("Report Field Research tasks that you've picked up from Pokestops. See the chart below for reference. This channel is cleared daily. Happy exploring, Trainers.**")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://vignette.wikia.nocookie.net/pokemongo/images/8/84/Mp-Icon_Research.png/revision/latest?cb=20180328113134")
    .setImage("https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/charts/field-research-aug.png")
    
    message.channel.send({embed});
    message.delete();
  }