exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    message.channel.send(message.author.toString() + ", You've joined **Team Mystic**" + team_emoji + ". You now have access to your team chat, which is great for taking gyms and earning extra ball bonuses during raids. **Next Step** is to set your location so you can see the raid, quest and sightings channels for your area. I've unlocked the <#483420052335362058> channel for you to do so. For help view the <#483420019854934016> channel.");
};