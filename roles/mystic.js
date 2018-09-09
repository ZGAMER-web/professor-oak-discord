exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);

    const oak = require("./data/oak.json");
    const oak_locations = oak.area_locations
    
    message.channel.send(message.author.toString() + ", You've joined **Team Mystic**" + team_emoji + ". You now have access to your team chat, which is great for taking gyms and earning extra ball bonuses during raids.\n**Next Step** is to set your location so you can see the raid, quest and sightings channels for your area plus some other useful channels. To do this, reply with the location command found below. You can select multiple locations, however you will need to send each command in a new messagge.\n" + oak_locations);
    client.channels.get("483831639575887873").send('**' + member.user.username + '**, ' + "has joined team mystic.");
};