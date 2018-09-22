exports.run = (client, message, args) => {  
  let gym = args.join(" ");
  let commandFile = require(`../commands/gyms/${gym}.js`);
    commandFile.run(client, message, args);
};