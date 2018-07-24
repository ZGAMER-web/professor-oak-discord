exports.run = (client, message, args) => {
    message.channel.send("Hello, Trainer! The **SilphRoad Nest Atlas** helps both local and traveling Trainers worldwide discover nests. The map is updated and verified by Trainers in their said community. See the map below. Also, using the command `!oak leaguemap` I can help you discover communites from around the world. https://thesilphroad.com/atlas#13.32/33.58055/-85.07418").catch(console.error);
}
