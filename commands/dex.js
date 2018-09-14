exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  commandFile.run(client, message, args)
  if ( pokemon === null ){
    message.channel.send("No Pokemon found. Try again...")
  }
};