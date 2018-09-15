exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../commands/pokedex/${pokemon}.js`);
    commandFile.run(client, message, args)
};