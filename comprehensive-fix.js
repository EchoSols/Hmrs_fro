const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing setter functions by restoring them
    content = content.replace(
      /const \[([^,]+)\] = useState/g,
      "const [$1, set$1] = useState"
    );
    
    // Fix specific missing imports
    if (content.includes('CheckCircle') && !content.includes("import { CheckCircle }")) {
      const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
      if (importMatch) {
        const imports = importMatch[1].split(',').map(imp => imp.trim());
        if (!imports.includes('CheckCircle')) {
          imports.push('CheckCircle');
          const newImport = `import { ${imports.join(', ')} } from 'lucide-react'`;
          content = content.replace(importMatch[0], newImport);
          modified = true;
        }
      }
    }
    
    // Fix other common missing imports
    const missingImports = ['Clock', 'Users', 'BookOpen', 'Filter'];
    missingImports.forEach(importName => {
      if (content.includes(importName) && !content.includes(`import { ${importName} }`)) {
        const importMatch = content.match(/import\s*{([^}]+)}\s*from\s*['"]lucide-react['"]/);
        if (importMatch) {
          const imports = importMatch[1].split(',').map(imp => imp.trim());
          if (!imports.includes(importName)) {
            imports.push(importName);
            const newImport = `import { ${imports.join(', ')} } from 'lucide-react'`;
            content = content.replace(importMatch[0], newImport);
            modified = true;
          }
        }
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixFile(filePath);
    }
  });
}

// Start processing from src directory
const srcDir = path.join(__dirname, 'src');
if (fs.existsSync(srcDir)) {
  console.log('Comprehensively fixing TypeScript errors...');
  processDirectory(srcDir);
  console.log('Comprehensive error fixing completed!');
} else {
  console.log('src directory not found');
}
