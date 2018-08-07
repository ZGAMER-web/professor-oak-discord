exports.run = (client, message, args) => {
    
    const greeting = "Hello Trainer! Based on my Gym research,"; // default message to start the reply
    const gym = "**East Carroll**"; // gym name
    const exraid = "is"; // is or is not ex raid eligable
    const access = "easy"; // easy, diffucult, etc..
    const map = "https://goo.gl/maps/YuNoQopXHqJ2"; // google map link

    const gymresponse = greeting + " " + gym + " " + exraid + " Ex Raid eligable" + " and access is " + access + "." + " Here is directions in case you need them" + map;

    message.channel.send(gymresponse).catch(console.error);
    message.delete(5000)
} 