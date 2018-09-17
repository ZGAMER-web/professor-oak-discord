exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    const team = require("../../data/roles.json")
    const join_team_description = team.join_team_description
    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi
    const message_delete_time_default = oak.message_delete_time_default

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    client.channels.get('483831639575887873').send('**' + member.user.username + '**' + " joined team " + team_emoji);
    message.reply("").then(sentMessage => {
      sentMessage.delete(message_delete_time_default)
    })
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**You've joined Team Mystic**")
    
    .setColor(0x00AE86)
    .setDescription(join_team_description)
    .setFooter(oak_name + " " + oak_version, oak_avi)
    .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_mystic.png?raw=true")
    
    .addField("Bremen", "`!oak area bremen`")
    .addField("Carrollton", "`!oak area carrollton`")
    .addField("Franklin", "`!oak area franklin`")
    .addField("Temple", "`!oak area temple`")
    .addField("Villa Rica", "`!oak area villa rica`")

    .setTimestamp()
  
    message.channel.send({embed}).then(sentMessage => {
      sentMessage.delete(message_delete_time_default)
    })
  }