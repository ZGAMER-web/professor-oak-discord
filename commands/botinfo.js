exports.run = (client, message, args) => {
    message.channel.send("New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!").catch(console.error);
}
