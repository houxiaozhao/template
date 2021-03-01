export default {
  uri: process.env.MONGO_URL,
  options: {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true,
  },
};
