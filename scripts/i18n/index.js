const split = require("./spliti18n");
const sync = require("./synci18n");
const compare = require("./compare");

const args = process.argv.splice(2);
try {
  switch (args[0]) {
    case "sp":
    case "split": {
      split();
      break;
    }
    case "sy":
    case "sync": {
      if (args.length != 3) throw new Error("invalid args.");
      sync(args[1], args[2]);
      break;
    }
    case "cp":
    case "compare": {
      if (args.length != 3) throw new Error("invalid args.");
      compare(args[1], args[2]);
      break;
    }
    default:
      throw new Error("Unknown/Empty method.");
  }
} catch (e) {
  console.error(e.toString());
  console.log(`
PatchyVideo FrontEnd i18n -- help
- (sp)split: split i18n from vue files.
- (sy)sync [from] [to]: sync one language to another.
  - Example: sy CHS CHT
- (cp)compare [r] [n]: compare language keys.
  - Example: cp CHS CHT
`);
}