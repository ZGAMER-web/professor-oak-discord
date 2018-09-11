exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    message.channel.send(message.author.toString() + ", You've joined **Team Mystic**" + team_emoji + ". You now have access to your team chat, which is great for taking gyms and earning extra ball bonuses during raids.\n**Next Step** is to set your location so you can see the raid, quest and sightings channels for your area plus some other useful channels. To do this, reply with the location command found below. You can select multiple locations, however you will need to send each command in a new messagge.\nBremen = `!oak bremen`\nCarrollton = `!oak carrollton`\nFranklin = `!oak franklin`\nTemple = `!oak temple`\nVilla Rica = `!oak villarica`");
    client.channels.get('48383169575887873').send("Joined Team Mystic.");
};
