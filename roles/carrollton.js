exports.run = (client, message, args) => {
    let role = message.guild.roles.find("name", "carrollton");
    
    let member = message.member;

    member.addRole(role).catch(console.error);
    
    member.removeRole(role).catch(console.error);

    const response_area = require("./oak.json");
    const area_prefix = oak.response_area

    message.channel.send(message.author.toString() + area_prefix + ", I've updated your access to the **Carrollton** area.");
};