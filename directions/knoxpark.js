exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Knox Park**. My research shows: https://goo.gl/maps/LMpanybA8yw").catch(console.error);
}