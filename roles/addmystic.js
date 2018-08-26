exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    message.channel.send(message.author.toString() + ", You have joined team `" + role + "` " + team_emoji + " . You now have access to your team chat " + client.channels.get("451397641025355776") + "channel, which is gerat for taking gyms and collecting ball bonus during raids.");
};