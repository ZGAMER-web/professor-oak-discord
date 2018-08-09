module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("King's Chapel Presbyterian Church") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/f4KR3QaL4W82)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh5.ggpht.com/LQnzeyjTiQl0PVSA6TUeM0IMgQNsJK4q8moQJkPXlt9jfU_Mz7GdNe7_VKa2S0vOEkRF_GDTd77jor36LqI") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`kingschapelpresbyterianchurch` or `kingschapel`") // COMMAND NAME INSIDE ''

    .setTimestamp()
  
    message.channel.send({embed});
  }
