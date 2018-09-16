exports.run = (client, message, args) => {
    let pokemon = args.shift().toLowerCase().join(" ");
    let commandFile = require(`../counters/${pokemon}.js`);
    commandFile.run(client, message, args);
  }