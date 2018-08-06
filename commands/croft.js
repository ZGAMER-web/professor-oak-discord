exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **The Croft Street Bridge**. My research shows: https://goo.gl/maps/yEd7RPtNmZE2").catch(console.error);
}