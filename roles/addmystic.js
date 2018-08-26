exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    message.channel.send("${user}, I've set your team to " + team_emoji + ". You now have access to " + client.channels.get("451397641025355776"));
};