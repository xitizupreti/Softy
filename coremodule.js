const path = require("path");

const pathname = path.resolve(__filename);
const filename = path.join(__filename);
const dirname = path.dirname(__filename);
const basename = path.basename(filename);
const extname = path.extname(basename);

console.log(pathname);
console.log(filename);
console.log(dirname);
console.log(basename);
console.log(extname);
