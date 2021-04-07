import firebase from 'firebase/app'
import 'firebase/firestore'

//Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAu4c8iFwaotuokfCwThphG57f-Vdk3yGo",
  authDomain: "dbproj-faculdade.firebaseapp.com",
  projectId: "dbproj-faculdade",
  storageBucket: "dbproj-faculdade.appspot.com",
  messagingSenderId: "560104362960",
  appId: "1:560104362960:web:24a0dca14df4ff80bedfd5"
};
//Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp.firestore()