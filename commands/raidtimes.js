exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! According to my research... Raids start spawning around 6am and despawn around 7:30pm. Trainers in Carrollton seem to have active raiders between 7am-8am, 12pm-2pm and 5pm until despawn.").catch(console.error);
}
