import { connect } from "mongoose";
import { CONFIG } from "../config/config.js";
function dbConnection() {
  connect(
    CONFIG.DB_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (error) => {
      if (!error) {
        console.log("connected to the mongoDB");
      } else {
        console.log("connection to mongoDB failed \n" + error);
        setTimeout(dbConnection, 5000); // connect after 5 seconds again if db connnection has failed
      }
    }
  );
}

export { dbConnection };
