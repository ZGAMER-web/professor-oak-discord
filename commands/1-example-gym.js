exports.run = (client, message, args) => {
    
    // DEFAULT GYM GREETING, DO NOT CHANGE!
    const GYM_GREETING = "Hello Trainer! According to my research,"
    
    
    // ------- EDIT THE BELOW FIELDS ONLY
    const GYM_NAME = "****";
    
    // City State
    const GYM_LOCATION = "Carrollton Georgia"; 
    
    // "it is" or "it is not"
    const EX_RAID = "it is not";
    
    // "easy" "easy with free parking" "diffucult" "diffucult with paid parking"
    const GYM_ACCESS = "easy with free parking"; 
    
    // optional notes about the gym
    const GYM_NOTES = ""; 
    
    // google map link
    const MAP_LINK = "https://goo.gl/maps/YuNoQopXHqJ2"; 
    // ------- EDIT THE ABOVE FIELDS ONLY
    
    
    // FULL RESPONSE, DO NOT CHANGE!
    const GYM_RESPONSE = GYM_GREETING + " " + GYM_NAME + " is a Gym located in " + GYM_LOCATION + ", access is " + GYM_ACCESS + " and " + EX_RAID + " Ex Raid eligable. " + GYM_NOTES + " " + MAP_LINK;

    message.channel.send(GYM_RESPONSE).catch(console.error);
    message.delete()
} 
