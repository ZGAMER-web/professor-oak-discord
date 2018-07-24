exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Hays Mill Park**. My research shows: https://goo.gl/maps/tZmjyP37c2m").catch(console.error);
}