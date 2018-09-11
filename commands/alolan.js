exports.run = (client, message, args) => {
  message.channel.send({embed: {
  color: 3447003,
  author: {
    name: client.user.username,
    icon_url: client.user.avatarURL
  },
  title: "Kanto Region, Alolan Forms",
  description: "Hello Trainer! I see that you are interested in knowing more about the Alolan form Pokemon orignally discovered from the Kanto region. Based on my research, I have discovered 18 Pokemon along with their types. **NEW UPDATE!** Alolan Pokemon can be hatched from 7KM eggs that can be obtained from receiving a special Gift from in-game Friends. You can use `!oak gifts` for more information.",
  fields: [{
      name: "Rattata, Raticate",
      value: "Dark, Normal"
    },
    {
      name: "Raichu",
      value: "Electric, Psychic"
    },
    {
      name: "Sandshre, Sandslash",
      value: "Ice, Steel"
    },
    {
      name: "Vulpix, Ninetails",
      value: "Ice, Fairy"
    },
    {
      name: "Diglett, Dugtrio",
      value: "Ground, Steel"
    },
    {
      name: "Meowth, Persian",
      value: "Dark"
    },
    {
      name: "Geodude, Graveler, Golem",
      value: "Rock, Electric"
    },
    {
      name: "Grimer, Muk",
      value: "Poison, Dark"
    },
    {
      name: "Exeggutor",
      value: "Grass, Dragon"
    },
    {
      name: "Marowak",
      value: "Fire, Ghost"
    },
           
  ],
  timestamp: new Date(),
  footer: {
    icon_url: client.user.avatarURL,
    text: "© Professor Oak"
  }
}
});.then(sentMessage => {
  sentMessage.delete(10000);

message.delete(5000).catch(O_o=>{}); 
}
