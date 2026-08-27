const axios = require('axios');

// Fetch a random joke from the API
async function getRandomJoke() {
  try {
    const response = await axios.get('https://official-joke-api.appspot.com/random_joke');
    const joke = response.data;
    
    console.log('\n🎭 Here\'s a random joke for you:\n');
    console.log(`${joke.setup}`);
    console.log(`${joke.punchline}\n`);
    
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error.message);
  }
}

// Fetch multiple jokes
async function getMultipleJokes(count = 3) {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/random/${count}`);
    const jokes = response.data;
    
    console.log(`\n🎭 Here are ${count} random jokes:\n`);
    jokes.forEach((joke, index) => {
      console.log(`Joke ${index + 1}:`);
      console.log(`${joke.setup}`);
      console.log(`${joke.punchline}\n`);
    });
    
    return jokes;
  } catch (error) {
    console.error('Error fetching jokes:', error.message);
  }
}

// Fetch jokes by type
async function getJokesByType(type) {
  try {
    const response = await axios.get(`https://official-joke-api.appspot.com/jokes/${type}/random`);
    const joke = response.data;
    
    console.log(`\n🎭 Here's a random ${type} joke:\n`);
    console.log(`${joke.setup}`);
    console.log(`${joke.punchline}\n`);
    
    return joke;
  } catch (error) {
    console.error('Error fetching joke:', error.message);
  }
}

// Main execution
async function main() {
  const args = process.argv.slice(2);
  
  if (args.length === 0) {
    // Default: get one random joke
    await getRandomJoke();
  } else if (args[0] === 'multiple' && args[1]) {
    // Get multiple jokes
    const count = parseInt(args[1]) || 3;
    await getMultipleJokes(count);
  } else if (args[0] === 'type' && args[1]) {
    // Get joke by type (e.g., 'general', 'knock-knock')
    await getJokesByType(args[1]);
  } else {
    console.log('Usage:');
    console.log('  node index.js                    - Get a random joke');
    console.log('  node index.js multiple [count]   - Get multiple jokes');
    console.log('  node index.js type [type]        - Get joke by type (general, knock-knock)');
  }
}

main();
