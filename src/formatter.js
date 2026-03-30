function formatMessage({ title, summary, url }) {
  return (
    `*${title}*\n\n` +
    `${summary}\n\n` +
    `[Read full article](${url})`
  );
}

module.exports = { formatMessage };