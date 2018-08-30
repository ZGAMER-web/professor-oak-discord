exports.run = (client, message, args) => {
    const reminder = require("../data/reminder.json");
    const team_reminder = reminder.reminder_team
          message.delete().catch(O_o=>{}); 
          message.mentions.users.first().send(team_reminder)
}
