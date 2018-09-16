exports.run = (client, message, args) => {  
    let team = args.join(" ");
    let commandFile = require(`../commands/teams/${team}.js`);
      commandFile.run(client, message, args);
  };