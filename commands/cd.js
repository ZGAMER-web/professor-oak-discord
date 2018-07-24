module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("July Community Day")
  
  .setColor(0x00AE86)
  .setDescription("For just a few hours each month, you can encounter a special Pokémon in the wild. During these hours, there's a chance to learn a previously unavailable move for that Pokémon or its evolution, as well as earn some Community Day bonuses. Celebrate what it means to be a part of the Pokémon GO community and make new friends along the way!")
  .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
  .setThumbnail("https://storage.googleapis.com/pokemongolive/communityday/PKMN_Community-Day-logo2.png")
  .setImage("https://lh3.googleusercontent.com/6XFawm6XxDHyWnlMNbX0SUZQ1uMOocD0jUSt-CrzCYBOlPwpEBbTvZuPu1JRKaHxXJMawVH28nl2B7r2FL95Sw=s0-v0-rj")
  
  .addField("Date", "July 8th", true)
  .addField("Start/End Time", "2-5pm", true)
  .addField("Featured Pokemon", "Squirtle", true)
  .addField("Exclusive Move", "Hydro Cannon", true)
  .addField("Bonuses", "3 hour Lures, 1/4 egg hatch distance")

  .addField("Local Meetup", "Meet with other local Trainers and gain new Friends by attending the Carrollton Pokemon GO Meet and Greet at the Art Center (Floral Bench Gym) from 12-2pm. For directions you can use the command `!oak artcenter`.")

  .setTimestamp()

  message.channel.send({embed});
}
