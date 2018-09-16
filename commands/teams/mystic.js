exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**You've joined Team Mystic**")
    
    .setColor(0x00AE86)
    .setDescription("You now have access to your team chat and a few various other channels. Now you need to set your location. To do this, reply back with one of the commands listed below.")
    .setFooter("© Professor Oak", "https://github.com/benjaminatl/discord-professor-oak/blob/master/images/oak1.jpeg?raw=true")
    .setThumbnail("https://github.com/benjaminatl/discord-professor-oak/blob/master/images/logos/team_mystic.png?raw=true")
    
    .addField("Bremen", "`!oak area bremen`", true)
    .addField("Carrollton", "`!oak area carrollton`", true)
    .addField("Franklin", "`!oak area franklin`", true)
    .addField("Temple", "`!oak area temple`", true)
    .addField("Villa Rica", "`!oak area villa rica`", true)

    .setTimestamp()
  
    message.channel.send({embed});
};