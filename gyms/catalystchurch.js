exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Catalyst Church**. My research shows: It's located in a parking lot, no need to exit the vehicle. https://goo.gl/maps/jeqKzX7r5BM2").catch(console.error);
}