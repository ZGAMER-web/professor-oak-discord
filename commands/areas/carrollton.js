exports.run = (client, message, args) => {
  let role = message.guild.roles.find("name", "carrollton");
  let area_location = "**Carrollton**";

  const oak = require("../../data/oak.json")
  const oak_name = oak.name
  const oak_version = oak.version
  const oak_avi = oak.avi
  
  let member = message.member;

  member.addRole(role).catch(console.error);
  
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**You've turned on the** " + area_location)
    
    .setColor(0x00AE86)
    .setDescription("join_team_description")
    .setFooter(oak_name + " " + oak_version, oak_avi)
    .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_valor.png?raw=true")
    
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