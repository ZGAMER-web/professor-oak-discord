exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    description: "Hello Trainer, Similarly to the anime and main series games, there is a special method to evolve Eevee. The trick is to give Eevee a specific nickname *(or rename)* before evolving it. This can be used only once per each evolution so it is highly recommended that you thoroughly plan before doing so. The trick with walking your buddy for Espeon and Umbreon has no limits.",
    fields: [{
        name: "Vaporeon",
        value: "Remane to *Rainer*, then evolve."
      },
      {
        name: "Jolteon",
        value: "Remane to *Sparky*, then evolve."
      },
      {
        name: "Flareon",
        value: "Remane to *Pyro*, then evolve."
      },
      {
        name: "Espeon",
        value: "Remane to *Sakura*, then evolve. You can also set Eevee as your buddy, earn 2 candy by walking 10KM and evolving during the day to receive this Pokemon."
      },
      {
        name: "Umbreon",
        value: "Remane to *Tamao*, then evolve. You can also set Eevee as your buddy, earn 2 candy by walking 10KM and evolving during the night to receive this Pokemon."
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
