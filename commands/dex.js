exports.run = (client, message, args) => {
  let pokemon = args[0];
  let commandFile = require(`../pokedex/${pokemon}.js`);
  commandFile.run(client, message, args)
  .catch((err) => {
    message.channel.send('No results found!');
 });
}