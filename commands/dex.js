exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  commandFile.run(client, message, args)
  if (err) return message.channel.send("Sorry, Trainer. You may need to check your spelling or this Pokemon has not be added yet.");
};