module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()

  const location = "East Carroll"
  
    .setTitle(location)
    
    .setColor(0x00AE86)
    .setDescription("For just a few hours each month, you can encounter a special Pokémon in the wild. During these hours, there's a chance to learn a previously unavailable move for that Pokémon or its evolution, as well as earn some Community Day bonuses. Celebrate what it means to be a part of the Pokémon GO community and make new friends along the way!")
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://storage.googleapis.com/pokemongolive/communityday/PKMN_Community-Day-logo2.png")
    .setImage("https://lh3.googleusercontent.com/0JcW5HtqxiDTCk1YBiVEsfHKZi3DYhEtjCnABgPP8qVjoY1MggCVlxSnBc0_iifOvD4ME39b2II2Mp3fOp8E=s0-v0-rj")
    
    .addField("Date", "August 11th & 12th", true)
    .addField("Start/End Time", "2-5pm", true)
    .addField("Featured Pokemon", "Eevee", true)
    .addField("Exclusive Move", "?", true)
    .addField("Bonuses", "3 hour Lures, 3x Catch Stardust")
  
    .addField("Local Meetup", "Meet with other local Trainers and gain new Friends by attending the Carrollton Pokemon GO Meet and Greet at the Art Center (Floral Bench Gym) from 12-1:30pm.")
    .addField("Helpful Commands", "`!oak artcenter` or `!oak eeveetrick`")
  
    .setTimestamp()
  
    message.channel.send({embed});
  }