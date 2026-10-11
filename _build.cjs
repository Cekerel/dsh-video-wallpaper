const fs = require('fs');
const dir = __dirname;
let tmpl = fs.readFileSync(dir + '/client.js.tmpl', 'utf8');
if (tmpl.charCodeAt(0) === 0xFEFF) tmpl = tmpl.slice(1);
// Default embedded video: Pixabay padrinan's vinyl turntable loop, trimmed
// from the ~30MB source to control bundle size (allowed by the Pixabay
// Content License; see NOTICE.md).
const videoPath = process.argv[2] || 'C:/Users/Ther/Videos/VID_20201127_160256.mp4';
const b64 = fs.readFileSync(videoPath).toString('base64');
const out = tmpl.replace('__VIDEO_URL__', 'data:video/mp4;base64,' + b64);
fs.writeFileSync(dir + '/client.js', out);
console.log('client.js bytes:', out.length, '(video:', videoPath + ')');
