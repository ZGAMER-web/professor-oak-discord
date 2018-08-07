exports.run = (client, message, args) => {
    
    const GYM_GREETING = require('/data/greeting.json');
    
    // ------- EDIT THE BELOW FIELDS ONLY
    const GYM_NAME = "**East Carroll**";
    const GYM_LOCATION = "Carrollton Georgia"; // "City State"
    const EX_RAID = "it is"; // "it is" or "it is not"
    const GYM_ACCESS = "easy with free parking"; // "easy" "easy with free parking" "diffucult" "diffucult with paid parking"
    const GYM_NOTES = ""; // optional notes about the gym
    const MAP_LINK = "https://goo.gl/maps/YuNoQopXHqJ2"; // google map link
    // ------- EDIT THE ABOVE FIELDS ONLY
    
    
    // FULL RESPONSE, DO NOT CHANGE!
    const GYM_RESPONSE = GYM_GREETING + " " + GYM_NAME + " is a Gym located in " + GYM_LOCATION + ", access is " + GYM_ACCESS + " and " + EX_RAID + " Ex Raid eligable. " + GYM_NOTES + " " + MAP_LINK;

    message.channel.send(GYM_RESPONSE).catch(console.error);
    message.delete()
} 
