exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer. I see you need information on the gym **East Commons Library**. My research shows: access can be diffucult, must park in visitor parking on Front Campus, handicap parking is available closer to the gym, will require to exit the vehicle. https://goo.gl/maps/LJpCkuejaGR2").catch(console.error);
}