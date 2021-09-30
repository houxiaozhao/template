export default {
  uri: process.env.MONGO_URL,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
};
