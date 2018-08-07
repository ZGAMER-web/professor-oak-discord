exports.run = (client, message, args) => {
    const gym = ["ag center"];
    message.channel.send(gym).catch(console.error);
} 