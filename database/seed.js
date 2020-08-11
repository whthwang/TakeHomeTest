const { Posts } = require('./model');
const data = require('./data.json');

Posts.insertMany(data)
.then(() => console.log('successfully seeded'))
.catch((error) => console.log(`failed to seed ${error}`));