exports.run = (client, message, args) => {
    let gym_name = args.join(" ");
    let commandFile = require(`../new-gyms/${gym_name}.js`);
    commandFile.run(client, message, args);
    message.reply("hello")
    .then(msg => {
      message.delete(10000).catch(O_o=>{}); 
    })
  }