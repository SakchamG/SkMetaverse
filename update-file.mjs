import fs from 'fs';

let ts = fs.readFileSync('src/app/api/enquiry/route.ts', 'utf8');
ts = ts.replace(
  /validated.value.location,\s+validated.value.services/,
  'validated.value.location,\n        validated.value.tech,\n        validated.value.services'
);
fs.writeFileSync('src/app/api/enquiry/route.ts', ts);

let front = fs.readFileSync('src/app/start-project/StartProjectClient.tsx', 'utf8');
front = front.replace(
  /\.catch\(\(\) => \{\s+alert\("Could not submit right now\. Please try again or use Call\/WhatsApp\."\);\s+\}\)/,
  `.catch((e: any) => {
          const msg = e && e.message ? e.message : "";
          alert(msg && msg !== "Failed to submit enquiry" ? msg : "Could not submit right now. Please try again or use Call/WhatsApp.");
        })`
);
fs.writeFileSync('src/app/start-project/StartProjectClient.tsx', front);
console.log("Replaced successfully!");
