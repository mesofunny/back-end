/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable func-names */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('jokes')
    .truncate()
    .then(() =>
      knex('jokes').insert([
        {
          title: 'Dreams',
          joke:
            "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
          private: 'no',
        },
        {
          title: 'Side',
          joke:
            "Did you hear about the guy whose whole left side was cut off? He's all right now.",
          private: 'no',
        },
        {
          title: 'Guts',
          joke: 'Why didn’t the skeleton cross the road? Because he had no guts.',
          private: 'no',
        },
        {
          title: 'Cashew',
          joke: 'What did one nut say as he chased another nut?  I\'m a cashew!',
          private: 'no',
        },
        {
          title: 'Mall',
          joke: 'Chances are if you\' ve seen one shopping center, you\'ve seen a mall.',
          private: 'no',
        },
        {
          title: 'Mixer',
          joke: 'I knew I shouldn\'t steal a mixer from work, but it was a whisk I was willing to take.',
          private: 'no',
        },
        {
          title: 'Fans',
          joke: 'How come the stadium got hot after the game? Because all of the fans left.',
          private: 'no',
        },
        {
          title: 'Knights',
          joke: 'Why was it called the dark ages? Because of all the knights. ',
          private: 'no',
        },
        {
          title: 'Tomato Blush',
          joke: 'Why did the tomato blush? Because it saw the salad dressing. ',
          private: 'no',
        },
        {
          title: 'Wandering nun',
          joke: 'Did you hear the joke about the wandering nun? She was a roman catholic. ',
          private: 'no',
        },
        {
          title: 'Spelling bee',
          joke: 'What creature is smarter than a talking parrot? A spelling bee. ',
          private: 'no',
        },
        {
          title: 'Playing ground',
          joke: 'Why did the kid cross the playground? To get to the other slide.',
          private: 'no',
        },
        {
          title: 'Birds fly',
          joke: 'Why do birds fly south for the winter? Because it\'s too far to walk.',
          private: 'no',
        },
        {
          title: 'Elevator',
          joke: 'My first time using an elevator was an uplifting experience. The second time let me down.',
          private: 'no',
        },
        {
          title: 'Change name',
          joke: 'To be Frank, I\'d have to change my name.',
          private: 'no',
        },
        {
          title: 'Moon-rock',
          joke: 'Why does a Moon-rock taste better than an Earth-rock? Because it\'s a little meteor.',
          private: 'no',
        },
      ]));
};
