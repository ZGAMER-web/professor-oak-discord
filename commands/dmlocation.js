exports.run = (client, message, args) => {
    const reminder = require("../data/reminder.json");
    const location_reminder = reminder.location
          message.delete().catch(O_o=>{}); 
          message.mentions.users.first().send(location_reminder)
}
