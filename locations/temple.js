exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "temple");
    
    let member = message.member;
    
    
    // Add the role!
    member.addRole(role).catch(console.error);
    message.channel.send("Trainer, you now have access to the **" + role + " **area.");
};