exports.run = (client, message, args) => {
    message.delete(5000)
    
    const greeting = "Hello Trainer! Based on my Gym research,"; // default message to start the reply
    const gym = "**East Carroll**"; // gym name
    const location = "Carrollton"; // city
    const exraid = "it is"; // it is or it isn't
    const access = "easy"; // easy, diffucult, etc..
    const map = "https://goo.gl/maps/YuNoQopXHqJ2"; // google map link

    const gymresponse = greeting + " " + gym + " is located in " + location + ", access is " + access + " and " + exraid + " Ex Raid eligable. " + map;

    message.channel.send(gymresponse).catch(console.error);
    
} 