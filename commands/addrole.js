client.on('message', (message) => {
    let role = message.guild.roles.find("name", "Team Mystic");

    let member = message.members;

    // Add the role!
    member.addRole(role).catch(console.error);

    // Remove a role!
    member.removeRole(role).catch(console.error);
});