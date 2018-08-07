exports.run = (client, message, args) => {
    
    const GYM_GREETING = "Hello Trainer! According to my research,"
    const gym = "**East Carroll**"; // gym name
    const location = "Carrollton"; // city
    const exraid = "it is"; // it is or it isn't
    const access = "easy"; // easy, diffucult, etc..
    const notes = ""; // optional notes about the gym
    const map = "https://goo.gl/maps/YuNoQopXHqJ2"; // google map link

    const gymresponse = GYM_GREETING + " " + gym + " is a Gym located in " + location + ", access is " + access + " and " + exraid + " Ex Raid eligable. " + notes + " " + map;

    message.channel.send(gymresponse).catch(console.error);
    message.delete()
} 
