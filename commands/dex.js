exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  commandFile.run(client, message, args).catch((e) => { message.channel.send("I didn't find that Pokemon, Trrainer. Please try again or ask a server mod for help."); });
};