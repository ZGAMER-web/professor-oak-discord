exports.run = (client, message, args) => {  
    let location = args.join(" ");
    let commandFile = require(`../commands/areas/${location}.js`);
      commandFile.run(client, message, args);
  };