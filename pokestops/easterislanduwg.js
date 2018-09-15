module.exports.run = (client, message, args) => {
    const Discord = require("discord.js");
  const embed = new Discord.RichEmbed()
  
    .setTitle("Easter Island UWG") // POKESTOP NAME
    
    .setColor(0x00AE86)

    
    .setDescription("[CLICK HERE FOR DIRECTIONS](https://goo.gl/maps/g4y4XG2aTj52)") // GOOGLE MAP LINK INSIDE ()
    .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
    .setThumbnail("https://lh6.ggpht.com/GsTZGly_LkYmQVpwxigggkmelxUzWyWWZ9pvkqkYWAM8K1h5xr72WDw2ymOpi3Wwk5WcJnzNt1xx29cI6aqX") // INGRESS PORTAL IMAGE
    
    .addField("**Location**", "Carrollton, GA - UWG")
    .addField("**Access**", "Medium, May have to walk")
    .addField("**Nested**", "No")
    .addField("**Commands**", "`easterislanduwg` or `easterisland`") // COMMAND NAME INSIDE ``

    .setTimestamp()
  
    message.channel.send({embed});
  }
