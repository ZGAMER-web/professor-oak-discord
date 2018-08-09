module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**Professor Oak Commands**")
    
    .setColor(0x00AE86)
    .setDescription("Get directions or game information using bot commands. Must use **!oak** for me to recognize your talking to me. This channel is cleared frequently to keep it squeaky clean. Happy exploring, Trainers!")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://vignette.wikia.nocookie.net/pokemongo/images/8/84/Mp-Icon_Research.png/revision/latest?cb=20180328113134")
    .setImage("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/charts/professor-oak-bot-chart.png?raw=true")
    
    message.channel.send({embed});
    message.delete();
  }
