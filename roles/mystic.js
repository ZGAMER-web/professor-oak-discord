exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    let team_emoji = client.emojis.find("name", "mystic");

    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    client.channels.get(483420052335362058).send(message.author.toString() + ', Welcome Trainer!');
};