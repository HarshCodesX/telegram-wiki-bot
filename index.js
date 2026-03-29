// index.js

require("dotenv").config(); // load .env variables first

const cron = require("node-cron");
const { getRandomArticle } = require("./src/wikipedia");
const { formatMessage } = require("./src/formatter");
const { sendMessage } = require("./src/telegram");

// Core function: fetch → format → send
async function postRandomArticle() {
  try {
    console.log("⏳ Fetching random Wikipedia article...");

    const article = await getRandomArticle();
    const message = formatMessage(article);
    await sendMessage(message);

    console.log(`✅ Posted: "${article.title}"`);
  } catch (err) {
    console.error("❌ Error posting article:", err.message);
  }
}

// Run once immediately when the script starts
postRandomArticle();

// Schedule to run every 6 hours: "0 */6 * * *"
// Cron format:  minute hour day month weekday
cron.schedule("0 */6 * * *", () => {
  console.log("🕐 Scheduled run triggered...");
  postRandomArticle();
});

console.log("🚀 Bot is running. Posting every 6 hours.");