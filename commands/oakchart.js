module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**Professor Oak Commands**")
    
    .setColor(0x00AE86)
    .setDescription("I can help with Gym & Pokestop directions along with other game features I've studied. For me to recognize your talking to me, start each new message with **!oak**. This channel is cleared frequently to keep it squeaky clean. See the chart below for reference, for help just ask in general chat. Happy exploring, Trainers!")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://vignette.wikia.nocookie.net/pokemon/images/8/84/Professor_Oak_XY.png/revision/latest?cb=20131221014829")
    .setImage("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/charts/professor-oak-bot-chart.png?raw=true")
    
    message.channel.send({embed});
    message.delete();
  }
