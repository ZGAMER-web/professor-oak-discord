exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");
    let team_chat = client.guilds.find("name", "team-mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your team to " + team_emoji + ". You now have access to " + team_chat);
};