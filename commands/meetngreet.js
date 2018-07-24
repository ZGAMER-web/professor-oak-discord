module.exports.run = (client, message, args) => {
  const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("Meet & Greet")
  
  .setColor(0x00AE86)
  .setDescription("Meet up with local and traveling Trainers in Carrollton to make new Friends and trades.")
  .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/professor-oak-go.png?raw=true")
  .setImage("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/meetgreet_june23.png?raw=true")
  
  .addField("Location", "Veterans Memorial Park (Vets)")
  .addField("Date", "Saturday, June 23rd", true)
  .addField("First Meet Time", "10am-11am", true)
  .addField("Second Meet Time", "3pm-4pm", true)
  .addField("Event Features", "Add Trainers as Friends, Trade Pokemon, enjoy 6 lured Pokestops, team Gym battles, learn about game features and enjoy a great local community event!", true)

  .setTimestamp()

  message.channel.send({embed});
}
