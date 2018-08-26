exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "franklin");
    
    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send(message.author.toString() + ", I've updated your access to the **Franklin** area.");
};