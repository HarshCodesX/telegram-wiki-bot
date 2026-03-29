// src/wikipedia.js

const axios = require("axios");

async function getRandomArticle() {
  const res = await axios.get(
  "https://en.wikipedia.org/api/rest_v1/page/random/summary",
  {
    headers: {
      'User-Agent': 'WikiTelegramBot/1.0 (harshguptahb055@gmail.com)'
    }
  }
);

  const { title, extract, content_urls, thumbnail } = res.data;

  return {
    title,
    summary: extract,
    url: content_urls.desktop.page,
    image: thumbnail?.source || null,
  };
}

module.exports = { getRandomArticle };