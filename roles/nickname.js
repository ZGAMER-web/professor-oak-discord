exports.run = (client, message, args) => {

      //Simplifies command making
  let command = message.content.toLowerCase().split(" ")[0];
  command = command.slice(config.prefix.length);

  //Simplifies arguments in a command
  let args = message.content.split(" ").slice(1);
  
    client.user.setUsername(args).then(user => message.reply(`My new nickname is ${user.username}!`)).catch(console.error);
};