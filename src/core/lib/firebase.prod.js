import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { FirebaseConfig } from "../config/firebase.config";
// configuration
const config = FirebaseConfig;

const firebase = Firebase.initializeApp(config);

export { firebase };
