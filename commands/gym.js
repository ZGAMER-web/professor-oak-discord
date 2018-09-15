exports.run = (client, message, args) => {
    let gym_name = args.join(" ");
    let commandFile = require(`../gyms/${gym_name}.js`);
    commandFile.run(client, message, args);
  }