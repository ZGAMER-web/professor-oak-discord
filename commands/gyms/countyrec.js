exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Recreation Center Park**. My research shows: https://goo.gl/maps/fxWuY5zBkZB2").catch(console.error);
}