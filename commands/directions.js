exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! I see you need directions").catch(console.error);
}
