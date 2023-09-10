import mongoose from 'mongoose'

 let isConnected = false;

mongoose.connect('mongodb+srv://laura:oMLe6lm0sfcxpO15@cluster0.u2mu8pi.mongodb.net/prompts?retryWrites=true&w=majority')

export const h = async () => {
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
  console.log("Connected successfully");
});
}