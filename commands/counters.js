exports.run = (client, message, args) => {
    let pokemon = args.join(" ").shift().toLowerCase();
    let commandFile = require(`../counters/${pokemon}.js`);
    commandFile.run(client, message, args);
  }