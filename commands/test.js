exports.run = (client, message, args) => {
    const greeting = "Hello Trainer!",
    const gym = "ag center",

    const gymresponse = greeting + " I see you need directions to " + gym;

    message.channel.send(gymresponse).catch(console.error);
    message.delete(3000)
} 