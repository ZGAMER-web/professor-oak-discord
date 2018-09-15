exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "franklin");
    let area_location = "**Franklin**";
    let location_command = "**franklin**"
    
    let member = message.member;
    
    member.removeRole(role).catch(console.error);

    message.channel.send(message.author.toString() + ", I've turned the " + area_location + " area off. You will no longer see or receive notifications for raids, quests or sightings channels in this area. To turn this area back on, simple type **!oak** " + location_command);
    client.channels.get('483831639575887873').send('**' + member.user.username + '**' + " turned on the " + area_location + " area.");
};
