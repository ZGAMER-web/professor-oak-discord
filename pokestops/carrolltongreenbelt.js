module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Carrollton Greenbelt") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/e8vngzdX8UP2)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/dLbojmwXukyYw5oTQ0REMMq2lYyvFSYtpA9cBQ2I4YVTVv3wt9DZuDzgMarUpSR6U0mTxbN89md4hnRgyp4") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA")
    .addField("**Access**", "Easy")
    .addField("**Nested**", "Yes")
    .addField("**Commands**", "`carrolltongreenbelt`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
