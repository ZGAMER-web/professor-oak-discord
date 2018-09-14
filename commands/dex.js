exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);


  if (commandFile == null) {
    message.channel.send("No Pokemon was found. Check your spelling...")
}


  commandFile.run(client, message, args)
};