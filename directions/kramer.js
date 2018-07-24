exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **Kramer Park**. My research shows: Parking lot is located AT the gym, access is easy, no need to exit the vehicle. https://goo.gl/maps/SCTkhrWGfkk").catch(console.error);
}