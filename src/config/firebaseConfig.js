import firebase from 'firebase/app';
import 'firebase/storage';


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAQUPzsKhs6KtN1kd5HU_5HKJv2VFyyTt0",
    authDomain: "mytshirtapp-7afcf.firebaseapp.com",
    databaseURL: "https://mytshirtapp-7afcf.firebaseio.com",
    projectId: "mytshirtapp-7afcf",
    storageBucket: "mytshirtapp-7afcf.appspot.com",
    messagingSenderId: "322266476304",
    appId: "1:322266476304:web:245b368f87c4cd1d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();

  export{
      storage,firebase as default
  } 