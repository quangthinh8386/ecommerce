const app = require("./src/app");

const PORT = process.env.PORT || 3334;

const server = app.listen(PORT, () => {
  console.log(`WSV eCommerce start with ${PORT}`);
});

process.on('SIGINT', () => {
  server.close(() => {
    console.log('Server closed');
  });
});