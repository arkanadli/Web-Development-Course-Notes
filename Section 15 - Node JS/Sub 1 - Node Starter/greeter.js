const args = process.argv.slice(2);
console.log(args);
for (let i = 0; i < args.length; i++) {
   console.log('HI !!', args[i]);
}