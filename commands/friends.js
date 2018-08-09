module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Friends in Pokemon GO")
    
    .setColor(0x00AE86)
    .setDescription("The Friends feature will allow you to connect with your real-life friends and keep track of their adventures in Pokémon GO. You’ll be able to send them items, earn bonuses—and even trade Pokémon! The four levels of Friendships along with with their bonuses are listed below. It is strongly encouraged to raise Friendship levels with your local players quickly, as these bonuses work on top of the existing Weather and Team based damage / ball bonuses. However, only the highest friend bonus is applied – they do not stack up.")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setImage("https://pokemongolive.com/img/posts/friendslist.png")
  
    .addField("Adding Friends", "To invite a Trainer to become your friend, simply enter their Trainer Code and then send them a request. If they accept, you’ll become friends, and you’ll see them in your Friends List.", true)
    
    .addField("Good Friend", "Trade all Pokemon except Mythicals", true)
    .addField("Great Freind", "Trade all Pokemon except Mythicals, 3x discount on Trading, 3x Attack Bonus, +4 extra Premier Ball with that friend", true)
    .addField("Ultra Freind", "Trade all Pokemon except Mythicals, 2x discount on Trading, 2x Attack Bonus, +2 extra Premier Ball with that friend", true)
    .addField("Best Freind", "Trade all Pokemon except Mythicals, 1x discount on Trading, 1x Attack Bonus, +1 extra Premier Ball with that friend", true)

    .addField("Building Friendship Levels", "You can increase your Friendship Level once per day per friend by: Sending Gifts, Raid/Gym Battles and Trading.", true)

    .setTimestamp()  
    message.channel.send({embed});
  }
