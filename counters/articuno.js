module.exports.run = (client, message, args) => {
    const pokemon_data = require("../data/pokemon/articuno.json");
    const pokemon_name = pokemon_data.name
    const pokemon_dex = pokemon_data.dex
    const pokemon_counter_01 = pokemon_data.counter_01
    const pokemon_counter_01_moveset = pokemon_data.counter_01_moveset
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  
      .setTitle("**" + pokemon_dex + " " + pokemon_name + "**")
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_144_00.png?raw=true")
      .setDescription("Recommended Trainers with counters at this level is 3, but you may need extra help.")
      .addField('${pokemon_counter_01}', '${pokemon_counter_01_moveset}', false)
  
      .setTimestamp()
    
      message.channel.send({embed});
    }
