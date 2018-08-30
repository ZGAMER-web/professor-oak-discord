exports.run = (client, message, args) => {
    const oak = require("../data/reminder.json");
    const team_reminder = oak.reminder_team
          message.delete().catch(O_o=>{}); 
          message.mentions.users.first().send(team_reminder)
}
