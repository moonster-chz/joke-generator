# Joke Generator 🎭

A simple and fun random joke generator that fetches jokes from an external API.

## Features

- 🎲 Get a random joke with one command
- 🎪 Fetch multiple jokes at once
- 🏷️ Get jokes by category (general, knock-knock, etc.)
- 📡 Uses the Official Joke API

## Installation

```bash
npm install
```

## Usage

### Get a single random joke
```bash
npm start
# or
node index.js
```

### Get multiple random jokes
```bash
node index.js multiple 5
# or
npm run multiple
```

### Get jokes by type
```bash
node index.js type general
# or
npm run general

node index.js type knock-knock
# or
npm run knockknock
```

## API Used

This project uses the [Official Joke API](https://official-joke-api.appspot.com/), which provides:
- Random jokes
- Jokes by category (general, knock-knock)
- No authentication required
- Free to use

## Available Joke Types

- `general` - General jokes
- `knock-knock` - Knock-knock jokes
- `programming` - Programming jokes (if available)

## Example Output

```
🎭 Here's a random joke for you:

Why don't scientists trust atoms?
Because they make up everything!
```

## Requirements

- Node.js (v12 or higher)
- npm or yarn

## License

MIT
