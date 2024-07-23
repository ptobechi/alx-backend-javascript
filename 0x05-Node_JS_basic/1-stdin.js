// Display the initial message
console.log('Welcome to Holberton School, what is your name?');

// Read user input from stdin
process.stdin.on('data', (data) => {
  // Get the input, remove any trailing new line characters
  const name = data.toString().trim();

  // Display the name
  console.log(`Your name is: ${name}`);

  // Exit the process
  process.exit();
});

// Handle process exit to display the closing message
process.on('exit', () => {
  console.log('This important software is now closing');
});
