import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDERID,
    appId: process.env.FIREBASE_APPID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
}



firebase.initializeApp(config);

const database = firebase.database();

export {firebase, database as default};

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses);
    
// })

// // database.ref('expenses').push({
// //     description: 'Gum',
// //     note: '',
// //     amount: 195,
// //     createdAt: 0
// // })

// // database.ref('expenses').push({
// //     description: 'Masala',
// //     note: '',
// //     amount: 200,
// //     createdAt: 0
// // })

// // database.ref().on('value', (snapshot) => {
// //     const val = snapshot.val();
// //     console.log(`${val.name} is ${val.job.title} at ${val.job.company}`);
    
// // })

// // firebase.database().ref().set({
// //     name: 'Mohd Misbahuddin',
// //     age:26,
// //     job:{
// //         title: 'Web developement engineer',
// //         company: 'Amazon'
// //     },
// //     level: 5,
// //     location: {
// //         city: 'Hyderabad',
// //         country: 'India'
// //     }
// // }).then(() => {
// //     console.log('Data saved succesfully'); 
// // }).catch((e) => {
// //     console.log('Error is: ', e);
// // })


// // firebase.database().ref().update({
// //     'job/title': 'Web developement Manager',
// //     level: 6,
// //     'location/city': 'Banglore'
// // })


// // <!-- The core Firebase JS SDK is always required and must be listed first -->
// // <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-app.js"></script>

// // <!-- TODO: Add SDKs for Firebase products that you want to use
// //      https://firebase.google.com/docs/web/setup#available-libraries -->
// // <script src="https://www.gstatic.com/firebasejs/7.14.2/firebase-analytics.js"></script>

// // <script>
// //   // Your web app's Firebase configuration
// //   var firebaseConfig = {
// //     apiKey: "AIzaSyB-vgL0xHPql-k4o783VRv_3A1rOPHI7Hk",
// //     authDomain: "expensify-4b53d.firebaseapp.com",
// //     databaseURL: "https://expensify-4b53d.firebaseio.com",
// //     projectId: "expensify-4b53d",
// //     storageBucket: "expensify-4b53d.appspot.com",
// //     messagingSenderId: "1042453633505",
// //     appId: "1:1042453633505:web:b96b0c7a76561c3e7fdaa0",
// //     measurementId: "G-PRFSNBJ93D"
// //   };
// //   // Initialize Firebase
// //   firebase.initializeApp(firebaseConfig);
// //   firebase.analytics();
// // </script>