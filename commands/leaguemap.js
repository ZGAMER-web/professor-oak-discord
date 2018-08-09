exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! The **SilphRoad League Map** is a great way for Trainers to connect with other Pokemon GO communities. See the map below to get connected. Also using the command `!oak nestatlas` I can help you discover nests from around the world. https://thesilphroad.com/map#6.02/34.37/-83.771").catch(console.error);
}
