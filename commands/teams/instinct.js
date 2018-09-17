exports.run = (client, message, args) => {
  let role = message.guild.roles.find("name", "instinct");
  const team = require("../../data/roles.json")
  const join_team_description = team.join_team_description

  const oak = require("../../data/oak.json")
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi

  let member = message.member;
  
  member.addRole(role).catch(console.error);
  message.reply("").then(sentMessage => {
    sentMessage.delete(300000)
  })
  message.delete(300000)
  
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()

  .setTitle("**You've joined Team Instinct**")
  
  .setColor(0x00AE86)
  .setDescription(join_team_description)
  .setFooter(oak_name + " " + oak_version, oak_avi)
  .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_instinct.png?raw=true")
  
  .addField("Bremen", "`!oak location bremen`")
  .addField("Carrollton", "`!oak location carrollton`")
  .addField("Franklin", "`!oak location franklin`")
  .addField("Temple", "`!oak location temple`")
  .addField("Villa Rica", "`!oak location villa rica`")

  .setTimestamp()

  message.channel.send({embed}).then(sentMessage => {
    sentMessage.delete(300000)
  })
};