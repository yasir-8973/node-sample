const brain = require('brain.js');

const trainingData = [
  'Jane saw Doug.',
  'Doug saw Jane. 22',
  'Spot saw Doug and Jane looking at each other.',
  'It was love at first sight, and Spot had a frontrow seat. It was a very special moment for all.',
];

const lstm = new brain.recurrent.LSTM();
const result = lstm.train(trainingData, {
  iterations: 1500,
  log: (details) => console.log(details),
  errorThresh: 0.011,
});
console.log('Training result: ', result);

const run1 = lstm.run('22');
const run2 = lstm.run('2');
const run3 = lstm.run('Spot');
const run4 = lstm.run('It');

console.log(run1);
console.log(run2);
console.log(run3);
console.log(run4);