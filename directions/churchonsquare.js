exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Carrollton Presbyterian Church**. My research shows: Free parking, access can be difficult durning peak hours, one way turns are nearby, you may need to exit the vehicle. https://goo.gl/maps/HBvWXQd8pTv").catch(console.error);
}