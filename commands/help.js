exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Below is a list of commands I have learned through my research. To execute, type any command below exactly how they appear.",
    fields: [{
        name: "!oak help",
        value: "Will display this message *(list of commands)*."
      },
      {
        name: "!oak iv",
        value: "Get information on what Pokemon IV's are and how to check them."
      },
      {
        name: "!oak *pokemon* (replace *pokemon* with pokemon name)",
        value: "Valuable information about a specific Pokemon, use `!oak pokemonlist` for available Pokemon."
      },
      {
        name: "!oak eeveetrick",
        value: "Discover how to evolve an Eevee into each eevolution use name and walking tricks."
      },
      {
        name: "!oak alolan",
        value: "Displays all available Alolan forms of the Kanto region Pokemon."
      },
      {
        name: "!oak raidtimes",
        value: "Returns when raids start spawning and when they despawn."
      },
      {
        name: "!oak nestatlas",
        value: "This map shows traveling and local Trainers worldwide nests."
      },
      {
        name: "!oak leaguemap",
        value: "This map helps trainers connect with communities worldwide."
      },
      {
        name: "!oak googlemap",
        value: "A map created by our community that shows all Gyms, Ex Raid eligable Gyms, Pokestops, in-game parks and water spawn locations."
      },
      {
        name: "!oak *gym* (replace *gym* with gym name, no spaces)",
        value: "General information about a specific gym along with map directions. Use `!oak gymlist` for available gyms."
      },
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Professor Oak"
    }
  }
});
}
