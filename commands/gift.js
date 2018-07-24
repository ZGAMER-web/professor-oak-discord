module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Gifts in Pokemon GO")
    
    .setColor(0x00AE86)
    .setDescription("When you spin a Photo Disc at a PokéStop or Gym, you have a chance of receiving a special Gift. Although you can’t open the Gifts you receive from PokéStops, you can send them to a friend on your Friend List.They will also receive a postcard showing where you picked up your Gift. Sending Gifts raises your Friendship Level with that Trainer. See help commands below for more information.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
    .setImage("https://pokemongolive.com/img/posts/giftselect.png")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/items/GiftBox.png?raw=true")
    
    .addField("Gifts Include", "Helpful items, 7KM eggs containing Alolan form of a Pokémon", true)
    .addField("Helpful Commands", "`!oak friends`", true)

    .setTimestamp()
  
    message.channel.send({embed});
  }
