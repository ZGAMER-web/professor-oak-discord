exports.run = (client, message, args) => {
    const oak = require("../oak.json");
    const oak_tutorial_team = oak.tutorial_team
          message.delete().catch(O_o=>{}); 
          message.mentions.users.first().send(oak_tutorial_team)
}
