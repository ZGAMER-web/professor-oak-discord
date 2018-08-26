exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "mystic");
    
    let member = message.member;
    
    
    // Add the role!
    member.addRole(role).catch(console.error);
    

    // Remove a role!
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your team to " + role);
};