exports.run = (client, message, args) => {
    let gym_name = args[0];
    let commandFile = require(`../commands/gyms/${gym_name}.js`);
    commandFile.run(client, message, args);
  }