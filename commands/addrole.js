exports.run = (client, message, args) => {
        let role = message.guild.roles.find("name", "carrollton" or "temple");

    let member = message.member;
    
    
    // Add the role!
    member.addRole(role).catch(console.error);
    message.channel.send("You've been added, Trainer!");
};