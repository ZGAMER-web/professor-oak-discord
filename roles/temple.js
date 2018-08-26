exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "temple");
    
    let member = message.member;
    
    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your access to the **" + role + " **area.");
};