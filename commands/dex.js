exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  commandFile.run(client, message, args)
  if(commandFile == null)console.error("This Pokemon has not be added yet.");
};