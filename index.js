const dotenv = require('dotenv');
const server = require('./server');

dotenv.config();
const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
