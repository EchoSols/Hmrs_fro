const fs = require('fs');
const path = require('path');

function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Fix missing setter functions by restoring them properly
    content = content.replace(
      /const \[([^,]+)\] = useState/g,
      "const [$1, set$1] = useState"
    );
    
    // Fix specific missing imports that are commonly used
    const commonImports = ['Play', 'CheckCircle', 'XCircle', 'AlertCircle'];
    commonImports.forEach(importName => {
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
    
    // Fix duplicate variable declarations
    content = content.replace(
      /const \[([^,]+)\].*useState.*\n.*const \[([^,]+)\].*useState/g,
      "const [$1, set$1] = useState"
    );
    
    // Fix specific issues in WebinarManagementPage
    if (filePath.includes('WebinarManagementPage.tsx')) {
      content = content.replace(
        /const \[showDetailsModal, setsearchTerm\] = useState\(''\)/g,
        "const [showDetailsModal, setShowDetailsModal] = useState(false)"
      );
      content = content.replace(
        /const \[statusFilter\] = useState<string>\('all'\)/g,
        "const [statusFilter, setStatusFilter] = useState<string>('all')"
      );
      content = content.replace(
        /const \[typeFilter\] = useState<string>\('all'\)/g,
        "const [typeFilter, setTypeFilter] = useState<string>('all')"
      );
      content = content.replace(
        /const \[selectedWebinar\] = useState<Webinar \| null>\(null\)/g,
        "const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null)"
      );
    }
    
    // Fix specific issues in TrainingCalendarPage
    if (filePath.includes('TrainingCalendarPage.tsx')) {
      content = content.replace(
        /const \[viewMode\] = useState/g,
        "const [viewMode, setViewMode] = useState"
      );
      content = content.replace(
        /const \[currentDate\] = useState/g,
        "const [currentDate, setCurrentDate] = useState"
      );
      content = content.replace(
        /const \[searchTerm\] = useState/g,
        "const [searchTerm, setSearchTerm] = useState"
      );
      content = content.replace(
        /const \[typeFilter\] = useState/g,
        "const [typeFilter, setTypeFilter] = useState"
      );
      content = content.replace(
        /const \[statusFilter\] = useState/g,
        "const [statusFilter, setStatusFilter] = useState"
      );
      content = content.replace(
        /const \[selectedSession\] = useState/g,
        "const [selectedSession, setSelectedSession] = useState"
      );
      content = content.replace(
        /const \[showDetailModal\] = useState/g,
        "const [showDetailModal, setShowDetailModal] = useState"
      );
    }
    
    // Fix specific issues in UploadMaterialsPage
    if (filePath.includes('UploadMaterialsPage.tsx')) {
      content = content.replace(
        /const \[dragActive\] = useState/g,
        "const [dragActive, setDragActive] = useState"
      );
      content = content.replace(
        /const \[selectedFiles\] = useState/g,
        "const [selectedFiles, setSelectedFiles] = useState"
      );
      content = content.replace(
        /const \[uploads\] = useState/g,
        "const [uploads, setUploads] = useState"
      );
      content = content.replace(
        /const \[showUploadForm\] = useState/g,
        "const [showUploadForm, setShowUploadForm] = useState"
      );
    }
    
    // Fix specific issues in VerificationSystemPage
    if (filePath.includes('VerificationSystemPage.tsx')) {
      content = content.replace(
        /const \[selectedRequest\] = useState/g,
        "const [selectedRequest, setSelectedRequest] = useState"
      );
      content = content.replace(
        /const \[showVerificationModal\] = useState/g,
        "const [showVerificationModal, setShowVerificationModal] = useState"
      );
      content = content.replace(
        /const \[verificationRequests\] = useState/g,
        "const [verificationRequests, setVerificationRequests] = useState"
      );
      content = content.replace(
        /const \[searchTerm\] = useState/g,
        "const [searchTerm, setSearchTerm] = useState"
      );
      content = content.replace(
        /const \[statusFilter\] = useState/g,
        "const [statusFilter, setStatusFilter] = useState"
      );
      content = content.replace(
        /const \[priorityFilter\] = useState/g,
        "const [priorityFilter, setPriorityFilter] = useState"
      );
    }
    
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
  console.log('Final comprehensive fix for TypeScript errors...');
  processDirectory(srcDir);
  console.log('Final error fixing completed!');
} else {
  console.log('src directory not found');
}
