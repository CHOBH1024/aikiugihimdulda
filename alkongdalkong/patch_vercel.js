const os = require('os');
const originalHostname = os.hostname;
os.hostname = () => 'localhost'; // Override the hostname to ASCII

const originalType = os.type;
os.type = () => 'Windows_NT';

const originalRelease = os.release;
os.release = () => '10.0.0';

process.env.VERCEL_TELEMETRY_DISABLED = '1';

// Run Vercel CLI
require('C:\\Users\\CBH\\AppData\\Roaming\\npm\\node_modules\\vercel\\dist\\index.js');
