import { connect } from "mongoose";

function dbConnection() {
  const DB_URL = process.env.DB_URL;
  connect(
    DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (!error) {
        console.log("connected to the mongoDB");
      } else {
        console.log("connection to mongoDB failed \n" + error);
      }
    }
  );
}

export { dbConnection };
