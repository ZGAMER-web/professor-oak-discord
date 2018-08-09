exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Spirit Wolf**. My research shows: https://goo.gl/maps/gxNneXiN8p62").catch(console.error);
}