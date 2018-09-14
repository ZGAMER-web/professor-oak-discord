exports.run = (client, message, args) => {
  let shiny = args[0];
  let pokemon = args[1];
  let commandFile = require(`../pokedex/${shiny}${pokemon}.js`);
  commandFile.run(client, message, args);
}