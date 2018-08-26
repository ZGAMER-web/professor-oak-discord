exports.run = (client, message, args) => {
        let role = message.guild.roles.find("name", "carrollton" "temple");

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.member;
    
    // or the person who made the command: let member = message.member;
    
    // Add the role!
    member.addRole(role).catch(console.error);
    message.channel.send("You've been added to " + role + " ,Trainer!");
};