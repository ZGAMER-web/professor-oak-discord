exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "group leader");
    
    let member = message.member;

    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    message.channel.send(message.author.toString() + ", I've made you a **Moltres Day Group Leader**. You now have access to the **Moltres Day** category. Your group number will be issued to you by our Ace Trainers very soon in the <#486664676642652160> channel. Remember Trainer, you have control of your groups route. You can use a route planned by our Ace Trainers or you can create your own route. For help, use the <#486664676642652160> channel.");
};