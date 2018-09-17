exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "carrollton");
    let area_location = "**Carrollton**";

    const area = require("../../data/role.json")
    const area_location_description = area.area_location_description

    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    message.reply("").then(message => {
        message.delete(20000)
    })
    message.delete(20000)
    
  const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("**You've turned on the " + area_location + " area**")
    
    .setColor(0x00AE86)
    .setDescription(area_location_description)
    .setFooter(oak_name + " " + oak_version, oak_avi)
    .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/logos/team_instinct.png?raw=true")
    
    .addField("Bremen", "`!oak area bremen`")
    .addField("Carrollton", "`!oak area carrollton`")
    .addField("Franklin", "`!oak area franklin`")
    .addField("Temple", "`!oak area temple`")
    .addField("Villa Rica", "`!oak area villa rica`")

    .setTimestamp()
  
    message.channel.send({embed}).then(message => {
      message.delete(20000)
    })
  }