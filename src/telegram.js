// src/telegram.js

const axios = require("axios");

const BASE_URL = `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}`;

async function sendMessage(text) {
  const res = await axios.post(`${BASE_URL}/sendMessage`, {
    chat_id: process.env.TELEGRAM_CHAT_ID,
    text,
    parse_mode: "Markdown",        // enables *bold*, _italic_, [links](url)
    disable_web_page_preview: false // lets Telegram show a link preview card
  });

  return res.data;
}

module.exports = { sendMessage };