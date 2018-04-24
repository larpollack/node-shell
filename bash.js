// Output a prompt
process.stdout.write('prompt > ');


// process.stdin.on('dog', (pwd) => {
//   // const dir = console.log(`Current directory: ${process.cwd()}`); 
 
//    process.stdout.write(process.cwd());
//    process.stdout.write('\nprompt > ');
//  });
//The stdin 'data' event ffires after a user types in a line
process.stdin.on('data', (data) => {
  const cmd = data.toString().trim(); //remove new line
  if (cmd === "pwd") {
    process.stdout.write(process.cwd())
  } else {
    process.stdout.write('You typed: ' + cmd);
  }
  process.stdout.write('\nprompt > ');
});

