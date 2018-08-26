exports.run = (client, message, args) => {
    client.user.setUsername(args).then(user => message.reply(`My new nickname is ${user.username}!`)).catch(console.error);
};