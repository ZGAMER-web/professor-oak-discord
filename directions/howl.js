exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Howl**. My research shows: https://goo.gl/maps/bL2bAmkLKs92").catch(console.error);
}