exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    description: "Hello Trainer, I see you need a little help. To get directions, use `!oak` followed by the name of a Gym *(one word, no spaces)*. You can use the full name, short name or nickname. The word *uwg* and *church* can be removed from any Gym name. I have listed a few examples below.",
    fields: [{
        name: "!oak floralbench",
        value: "Directions to the Gym, Floral Bench"
      },
      {
        name: "!oak welcomehill",
        value: "Directions to the Gym, Welcome Hill Baptist Church."
      },
      { 
      name: "!oak observatory",
      value: "Directions to the Gym, The Observatory At The University Of West Georgia."
      },
      {
        name: "!oak support",
        value: "I will let the Ace Trainer's know you need further help or that there is a issue."
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
