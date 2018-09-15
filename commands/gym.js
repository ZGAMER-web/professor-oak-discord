exports.run = (client, message, args) => {
  message.reply("I found the following directions.")
  .then(msg => {
    msg.delete(10000)
  })
  
  let gym_name = args.join(" ");
    let commandFile = require(`../new-gyms/${gym_name}.js`);
    commandFile.run(client, message, args);
    commandFile.delete(10000)
  }