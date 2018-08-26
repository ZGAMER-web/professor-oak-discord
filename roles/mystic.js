exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your " + role + team_emoji + "team access.");
};