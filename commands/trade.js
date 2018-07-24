module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Trading in Pokemon GO")
    
    .setColor(0x00AE86)
    .setDescription("If you’re near a friend and have a Trainer Level of 10 or higher, you can trade Pokémon you’ve caught with that friend. Completing a trade earns a bonus Candy for the Pokémon you’ve traded away, and that bonus can increase if the Pokémon you traded were caught in locations far apart from each other! All trades are powered by Stardust, and some trades require more Stardust than others. As you build your Friendship Level with the friend you are trading with, you’ll find that you can complete the trade with much less Stardust.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
    .setImage("https://pokemongolive.com/img/posts/normaltrade.png")
      
    .addField("Trading With Friends", "You can trade with a Friend only when near eachother.")
    .addField("Trade With Stardust", "The amount of Stardust needed to trade varies. Trades for certain Pokemon are called *Special Trades* and require more Stardust. You can reduce the amount of Stardust required for *Special Trades* by increasing your Friendship levels.")
    .addField("Special Trade", "Legendary Pokemon, Shiny Pokemon and Pokemon not currently in your Pokedex all require a Special Trade. You can only make one special Trade per day.")
    .addField("Candy Bonues", "You need to be within 100 meters of a Friend to start a trade. You can earn a bonus depending on where the Pokemon in the trade were caught. The further apart their caught locations, *up to 100km*, the more candy you will earn.")
    .addField("CP & HP", "When you trade a Pokemon to a Friend, You can see the range of CP and HP that it could have. This range adjust's based on your Friendship level. After you complete the trade, the stats of both Pokemon will change randomly to reflect the new range.")
    

    .setTimestamp()  
    message.channel.send({embed});
  }
