exports.run = (client, message, args) => {
    message.channel.send("Server name = ${client.guild.name}").catch(console.error);
}
