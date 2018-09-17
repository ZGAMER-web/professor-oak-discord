module.exports.run = (client, message, args) => {
    const pokemon = require("../../data/pokemon/machamp.json");
    const name = pokemon.name
    const dex = pokemon.dex
    const trainers_needed = pokemon.trainers_needed
    const counter_01 = pokemon.counter_01
    const counter_01_moveset = pokemon.counter_01_moveset
    const counter_02 = pokemon.counter_02
    const counter_02_moveset = pokemon.counter_02_moveset
    const counter_03 = pokemon.counter_03
    const counter_03_moveset = pokemon.counter_03_moveset
    const counter_04 = pokemon.counter_04
    const counter_04_moveset = pokemon.counter_04_moveset
    const counter_05 = pokemon.counter_05
    const counter_05_moveset = pokemon.counter_05_moveset
    const counter_06 = pokemon.counter_06
    const counter_06_moveset = pokemon.counter_06_moveset
    const counter_07 = pokemon.counter_07
    const counter_07_moveset = pokemon.counter_07_moveset

    const oak = require("../../data/oak.json")
    const oak_name = oak.name
    const oak_version = oak.version
    const oak_avi = oak.avi

    message.reply("").then(sentMessage => {
      sentMessage.delete(300000)
    })
    message.delete(300000)
    
    const Discord = require("discord.js");
    const embed = new Discord.RichEmbed()
      
      .setColor(0x00AE86)
      .setFooter(oak_name + " " + oak_version + " | Pokebattler", oak_avi)
  
      .setTitle("#" + dex + " " + name)
      .setThumbnail("https://github.com/MrRecordHolder/professor-oak-discord/blob/master/images/pokemon-icons/pokemon_icon_" + dex +"_00.png?raw=true")
      .setDescription("This simulation was done using level 30 attackers and no dodging. Beating " + name + " should take " + trainers_needed + " Trainers with Pokemon of this strenght. Bringing an extra Trainer or two never hurts!\n(L) = Legacy")
      .addField(counter_01, counter_01_moveset)
      .addField(counter_02, counter_02_moveset)
      .addField(counter_03, counter_03_moveset)
      .addField(counter_04, counter_04_moveset)
      .addField(counter_05, counter_05_moveset)
      .addField(counter_06, counter_06_moveset)
      .addField(counter_07, counter_07_moveset)
  
      .setTimestamp()
    
      message.channel.send({embed}).then(sentMessage => {
        sentMessage.delete(300000)
        message.delete(300000)
      })
    }
