const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const excludeDirs = ['.git', 'node_modules', '.next', 'public'];
const includeExts = ['.ts', '.tsx', '.js', '.jsx', '.json', '.md', '.mjs', '.txt'];

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            const basename = path.basename(file);
            if (!excludeDirs.includes(basename)) {
                results = results.concat(walk(file));
            }
        } else {
            const ext = path.extname(file);
            if (includeExts.includes(ext)) {
                results.push(file);
            }
        }
    });
    return results;
}

const files = walk(rootDir);

let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let original = content;

    // Replace American -> American
    content = content.replace(/\bIndian\b/g, 'American');
    content = content.replace(/\bindian\b/g, 'american');
    
    // Replace USA -> USA
    content = content.replace(/\bIndia\b/g, 'USA');
    content = content.replace(/\bindia\b/g, 'usa');

    if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        modifiedCount++;
        console.log(`Modified: ${file}`);
    }
});

console.log(`Finished. Modified ${modifiedCount} files.`);
