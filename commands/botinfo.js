exports.run = (client, message, args) => {
    message.channel.send("Server name = ${client.guilds.name}\nTrainers = ${client.users.size}").catch(console.error);
}
