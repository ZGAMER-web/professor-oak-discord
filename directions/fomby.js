exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Fomby**. My research shows: This is a one way road, enter at the entrance closest to the red light, you may need to exit the vehicle depending on about of Trainers attending. https://goo.gl/maps/7NDi9J3FGHP2").catch(console.error);
}