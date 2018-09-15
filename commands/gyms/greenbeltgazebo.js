exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Green Belt Gazebo**. My research shows: https://goo.gl/maps/56LTXnQpfiN2").catch(console.error);
}