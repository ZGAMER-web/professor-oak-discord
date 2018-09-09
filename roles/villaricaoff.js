exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "villa rica");
    
    let member = message.member;
    
    member.removeRole(role).catch(console.error);

    message.channel.send(message.author.toString() + ", I've turned the **Villa Rica** area off. You will no longer see or receive notifications for raids, quests or sightings channels in this area. To turn this area back on, simple type **!oak villarica**.");
};