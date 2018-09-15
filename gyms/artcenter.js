exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Floral Bench**. My research shows: access is easy, free parking, may reqire to get out of vehicle. https://goo.gl/maps/tPPg58kR7co").catch(console.error);
}