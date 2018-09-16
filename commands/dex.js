exports.run = (client, message, args) => {
  let pokemon = args.join(" ");
  let commandFile = require(`../pokedex/${pokemon}.js`);
    commandFile.run(client, message, args).then(sentMessage => {
      sentMessage.delete(10000)
    })
};