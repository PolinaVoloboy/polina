import app from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: "AIzaSyBLTF3cP_VEasTgT2EyoG7T40mQhfvy6eM",
  authDomain: "fir-authentication-3ab4e.firebaseapp.com",
  databaseURL: "https://fir-authentication-3ab4e.firebaseio.com",
  projectId: "fir-authentication-3ab4e",
  storageBucket: '',
  messagingSenderId: "84642599885",
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  // *** Auth API ***
 
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
 
  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);

  user = uid => this.db.ref(`users/${uid}`);
 
  users = () => this.db.ref('users');
}
export default Firebase;