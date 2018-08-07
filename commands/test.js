exports.run = (client, message, args) => {
    const greeting = "Hello Trainer!",
    const gym = "ag center";
    message.channel.send((greeting) + " I see you need directions to " + (gym)).catch(console.error);
    message.delete(3000)
} 