exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);

  commandFile.run(client, message, args).catch("No Pokemon found. Try again, be sure to check your spelling.")
};