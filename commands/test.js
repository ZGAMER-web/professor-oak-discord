exports.run = (client, message, args) => {
    const greeting = "Hello Trainer! Based on my research ";
    
    const gym = "**Gym Name**"; // gym name here
    const exraid = "is"; // response should be "is" or "is not"
    const parking = "free parking";

    const gymresponse = greeting + gym + exraid + " Ex-Raid eligable.";

    message.channel.send(gymresponse).catch(console.error);
    message.delete(3000)
} 