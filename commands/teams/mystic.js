exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");
    let team = require("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/data/teams.json")
    let join_team_description = team.join_team_description

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    message.reply(team_emoji);
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**You've joined Team Mystic**")
    
    .setColor(0x00AE86)
    .setDescription(join_team_description)
    .setFooter("© Professor Oak", "https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/oak1.jpg?raw=true")
    .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_mystic.png?raw=true")
    
    .addField("Bremen", "`!oak location bremen`")
    .addField("Carrollton", "`!oak location carrollton`")
    .addField("Franklin", "`!oak location franklin`")
    .addField("Temple", "`!oak location temple`")
    .addField("Villa Rica", "`!oak location villa rica`")

    .setTimestamp()
  
    message.channel.send({embed});
};