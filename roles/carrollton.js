exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "carrollton");
    let mystic_emoji = client.emojis.find("name", "mystic");
    
    let member = message.member;
    
    // Add the role!
    member.addRole(role).catch(console.error);
    

    // Remove a role!
    member.removeRole(role).catch(console.error);

    message.channel.send("Trainer, I've updated your access to the **" + role + " **area. " + mystic_emoji);
};