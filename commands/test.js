exports.run = (client, message, args) => {
    const gym = ["ag center"];
    message.channel.send(gym)("is located").catch(console.error);
    message.delete(3000)
} 