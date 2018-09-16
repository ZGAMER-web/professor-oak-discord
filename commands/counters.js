exports.run = (client, message, args) => {
  let args = message.content.shift().toLowerCase();  
  let pokemon = args.join(" ");
    let commandFile = require(`../counters/${pokemon}.js`);
    commandFile.run(client, message, args);
  }