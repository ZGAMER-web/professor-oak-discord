exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  try {
    commandFile.run(client, message, args)
  } catch (err) {
    message.channel.send("No Pokemon found. Check your spelling and try again...");
  }
};