import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
 apiKey: "AIzaSyCSO8xyCclCVX0kpi8Y_2YCNu8djsLpMz0",
  authDomain: "voting-app-c33ef.firebaseapp.com",
  projectId: "voting-app-c33ef",
  storageBucket: "voting-app-c33ef.appspot.com",
  messagingSenderId: "565477554260",
  appId: "1:565477554260:web:9e1b062419ad4f817795c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
