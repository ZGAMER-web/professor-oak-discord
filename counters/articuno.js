module.exports.run = (client, message, args) => {
    const pokemon = require("../data/pokemon/articuno.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const trainers_needed = pokemon.trainers_needed
    const counter_01 = pokemon.counter_01
    const counter_01_moveset = pokemon.counter_01_moveset
    const counter_02 = pokemon.counter_02
    const counter_02_moveset = pokemon.counter_02_moveset
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter("© Professor Oak", "https://raw.githubusercontent.com/MrRecordHolder/professor-oak-discord/master/images/oak1.jpg")
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_144_00.png?raw=true")
      .setDescription("This simulation was done using level 30 attackers and no dodging. Beating " + name + " should take " + trainers_needed + " Trainers with Pokemon of this strenght. Bringing an extra Trainer or two never hurts!")
      .addField(counter_01, counter_01_moveset)
      .addField(counter_02, counter_02_moveset)
  
      .setTimestamp()
    
      message.channel.send({embed});
    }
