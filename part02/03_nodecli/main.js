import * as util from "node:util";

const {
    positionals
} = util.parseArgs({
    allowPositionals: true
});

const filePath = positionals[0];
console.log(filePath);
