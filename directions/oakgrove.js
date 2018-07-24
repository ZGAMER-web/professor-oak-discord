exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Oak Grove Baptist Church**. My research shows: https://goo.gl/maps/BKVNoTJsD7r").catch(console.error);
}