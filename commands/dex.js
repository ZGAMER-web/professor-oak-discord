exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokemon/${pokemon}.js`);
  commandFile.run(client, message, args);
}