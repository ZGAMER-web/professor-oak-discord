exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "group 3");
    
    let member = message.member;

    member.addRole(role).catch(console.error);
    
    message.channel.send(message.author.toString() + ", I've added you to the **Moltres Day Group 3**. You can now chat with other Trainers with-in your raid group. Have fun Trainer and good luck!");
};