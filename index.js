require("dotenv").config(); // loads .env file
const fs = require("fs");

// 1. From environment variable
const appMode = process.env.APP_MODE || "not set";

// 2. From ConfigMap as file
let configFile = "Not available";
try {
  configFile = fs.readFileSync("/etc/config/settings.json", "utf8");
} catch (err) {
  configFile = "Could not read settings.json";
}

// 3. From Secret as file
let secretFile = "Not available";
try {
  secretFile = fs.readFileSync("/etc/secret/token", "utf8");
} catch (err) {
  secretFile = "Could not read secret token file";
}

// 4. From Secret as environment variable
const secretKey = process.env.SECRET_KEY || "not set";

// Log everything
console.log("--- App Config ---");
console.log("APP_MODE:", appMode);
console.log("Config File (/etc/config/settings.json):", configFile);
console.log("Secret File (/etc/secret/token):", secretFile);
console.log("SECRET_KEY:", secretKey);

// Keep app running
setInterval(() => {}, 1000);
