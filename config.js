const { JWT_SECRET = 'dev-key' } = process.env;
const { MONGO_URL = 'mongodb://localhost:27017/bitfilmsdb' } = process.env;

module.exports = {
  JWT_SECRET,
  MONGO_URL,
};
