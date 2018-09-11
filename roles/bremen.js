exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "bremen");
    
    let member = message.member;

    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send(message.author.toString() + ", I've turned the **Bremen** area on. You can now see the raids, quests and sightings channels for this area. To turn on notifications, go to the channel you want to turn on, click the channel name at the top, then select *notification settings*. To turn this area off, simply type **!oak bremenoff**.");
    client.channels.get('483831639575887873').send('**' + member.user.username + '**' + " turned on the **Bremen** area.");
};
