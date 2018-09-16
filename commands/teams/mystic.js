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
    .setFooter("© Professor Oak", "https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/oak1.jpg?raw=true")
    .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_mystic.png?raw=true")
    
    .addField("Bremen", "`!oak area bremen`")
    .addField("Carrollton", "`!oak area carrollton`")
    .addField("Franklin", "`!oak area franklin`")
    .addField("Temple", "`!oak area temple`")
    .addField("Villa Rica", "`!oak area villa rica`")

    .setTimestamp()
  
    message.channel.send({embed});

    message.reply("");
};