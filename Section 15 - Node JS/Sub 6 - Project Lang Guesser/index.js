// import ALl Dependencies
const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

// sampling from given text in git params
const sample = process.argv[2]; // slice from 2 because argv have default value in [0 and 1] 
if (sample.length > 10) {
   try {
      const langCode = franc(sample);
      console.log(langCode);
      let langGuess = langs.where("3", langCode);
      console.log(langGuess);
      console.log(langGuess.name.green);
   } catch {
      console.log('Sorry.  We could not match any language from the sample given'.red);
   }

} else {
   console.log('Could not match a language.  Please try with a larger text sample'.red);
}
