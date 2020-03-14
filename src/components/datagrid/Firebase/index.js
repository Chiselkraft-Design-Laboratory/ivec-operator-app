import firebaseapp from "firebase/app";
import "firebase/database";

var firebaseConfig = {
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  authDomain: process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  apiKey: process.env.REACT_APP_FIREBASE_APIKEY,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDERID
};

class Firebase {
  constructor() {
    firebaseapp.initializeApp(firebaseConfig);
    this.db = firebaseapp.database();
  }

  // get device data
  device = dvid => this.db.ref(`devices/${dvid}`);
  devices = () => this.db.ref("devices");

  // <<<  more data will follow  >>>
}

export default Firebase;
