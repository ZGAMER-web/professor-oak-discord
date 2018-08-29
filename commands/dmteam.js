exports.run = (client, message, args) => {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    const oak = require("./oak.json");
    const oak_tutorial_team = oak.tutorial_team
    message.mentions.users.first().send(oak_tutorial_team)
}
