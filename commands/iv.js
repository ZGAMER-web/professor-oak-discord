exports.run = (client, message, args) => {
    message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "What is Pokemon IV?",
    description: "Hello Trainer! I see that you are interested in knowing more about Pokemon IV's... IV stands for Individual Values. IVs are a mechanism to introduce diversity in a group of same species Pokemon. IV influences various other Pokemon stats, like the amount of Health Points, attack power, etc",
    fields: [{
        name: "Check IV on IOS Device",
        value: "Download *__Poke Genie__* from the app store"
      },
      {
        name: "Check IV on Android Device",
        value: "Download *__Calcy IV__* from the Google Play store."
      },
      {
        name: "More Information",
        value: "For a full explanation on IVs, I have found [this article](https://pokemongohub.net/post/featured/pokemon-go-iv-guide-explained/amp/) for you to read."
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
