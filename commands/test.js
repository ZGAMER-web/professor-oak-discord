exports.run = (client, message, args) => {
    const greeting = "Hello Trainer! I see you need information on ";
    
    const loc = "Gym"; // gym or pokestop
    const locname = "**East Carroll**"; // gym or pokestop name
    const access = "easy"; // easy, diffucult, etc..

    const gymresponse = greeting + " the " + location + " called " + locname + ". Based on my research, I've found that access is " + access;

    message.channel.send(gymresponse).catch(console.error);
    message.delete(5000)
} 