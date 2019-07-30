/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('messages')
    .truncate()
    .then(() =>
      knex('messages').insert([
        {
          sender: 1,
          message:
            "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
          receiver: 2
        },
        {
          sender: 2,
          message:
            "Did you hear about the guy whose whole left side was cut off? He's all right now.",
          receiver: 1
        },
        {
          sender: 3,
          message:
            'Why didn’t the skeleton cross the road? Because he had no guts.',
          receiver: 2
        },
        {
          sender: 1,
          oke: "What did one nut say as he chased another nut?  I'm a cashew!",
          receiver: 3
        },
        {
          sender: 1,
          message:
            "Chances are if you' ve seen one shopping center, you've seen a mall.",
          receiver: 3
        },
        {
          sender: 3,
          message:
            "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
          receiver: 1
        },
        {
          sender: 2,
          message:
            'How come the stadium got hot after the game? Because all of the fans left.',
          receiver: 3
        },
        {
          sender: 1,
          oke: 'Why was it called the dark ages? Because of all the knights. ',
          receiver: 2
        },
        {
          sender: 1,
          oke: 'Why did the tomato blush? Because it saw the salad dressing. ',
          receiver: 3
        },
        {
          sender: 2,
          message:
            'Did you hear the message about the wandering nun? She was a roman catholic. ',
          receiver: 1
        },
        {
          sender: 1,
          message:
            'What creature is smarter than a talking parrot? A spelling bee. ',
          receiver: 2
        },
        {
          sender: 1,
          message:
            'Why did the kid cross the playground? To get to the other slide.',
          receiver: 2
        },
        {
          sender: 1,
          message:
            "Why do birds fly south for the winter? Because it's too far to walk.",
          receiver: 2
        },
        {
          sender: 1,
          message:
            'My first time using an elevator was an uplifting experience. The second time let me down.',
          receiver: 2
        },
        {
          sender: 1,
          oke: "To be Frank, I'd have to change my name.",
          receiver: 2
        },
        {
          sender: 1,
          message:
            "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
          receiver: 2
        }
      ])
    );
};
