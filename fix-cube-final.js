#!/usr/bin/env node
// ============================================================
//  fix-cube-final.js — Run from C:\Projects\react-portfolio\
//  Applies the full 3D cube portfolio to your local machine
//  Usage: node fix-cube-final.js
// ============================================================
const fs   = require('fs');
const path = require('path');

const base = process.cwd();
const ok   = (msg) => console.log('\x1b[32m✅\x1b[0m', msg);
const warn = (msg) => console.log('\x1b[33m⚠️ \x1b[0m', msg);
const err  = (msg) => console.log('\x1b[31m❌\x1b[0m', msg);

// 1) Create src/assets/ folder
const assetsDir = path.join(base, 'src', 'assets');
if (!fs.existsSync(assetsDir)) { fs.mkdirSync(assetsDir, {recursive:true}); ok('Created src/assets/'); }
else { ok('src/assets/ already exists'); }

// 2) Copy new App.js from GitHub redesign branch (the user pulls from remote)
//    — or user manually replaces with the downloaded file

// 3) Verify required asset files
const checks = [
  ['src/assets/EV_Registration_Dashboard_Interaction_final.gif', 'Copy from your downloads: EV_Registration_Dashboard_Interaction_final.gif → src/assets/'],
  ['src/assets/DashboardVisual.png',                             'Copy from your downloads: DashboardVisual.png → src/assets/'],
  ['public/sprint4_progress.html',                               'Copy from your downloads: sprint4_progress__1_.html → public/ and rename to sprint4_progress.html'],
];

let allGood = true;
checks.forEach(([rel, hint]) => {
  const fp = path.join(base, rel);
  if (fs.existsSync(fp)) ok(`Found: ${rel}`);
  else { warn(`Missing: ${rel}`); warn(`  → ${hint}`); allGood = false; }
});

// 4) Optional: video file
const vid = path.join(base, 'public', 'autograder-demo.mp4');
if (fs.existsSync(vid)) ok('Found: public/autograder-demo.mp4 — video player will work');
else warn('Optional: public/autograder-demo.mp4 not found — video section will be hidden until added');

// 5) Profile picture
const newPic = path.join(base, 'src', 'images', 'Profile picture.png');
const oldPic = path.join(base, 'src', 'images', 'Profilepic.jpg');
if (fs.existsSync(newPic)) {
  ok('Found: src/images/Profile picture.png');
  // Update import in App.js
  const appPath = path.join(base, 'src', 'App.js');
  let src = fs.readFileSync(appPath, 'utf8');
  src = src.replace("import profilePic  from './images/Profilepic.jpg'", "import profilePic  from './images/Profile picture.png'");
  fs.writeFileSync(appPath, src);
  ok('Updated App.js to use new profile picture');
} else if (fs.existsSync(oldPic)) {
  ok('Using existing Profilepic.jpg (drop Profile picture.png in src/images/ to update)');
} else {
  err('No profile picture found in src/images/');
}

console.log('\n' + (allGood ? '\x1b[32m✅ All assets ready! Run: npm start\x1b[0m' : '\x1b[33m⚠️  Copy the missing files above, then run: npm start\x1b[0m'));
