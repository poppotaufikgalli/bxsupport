//importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-app.js');
//importScripts('https://www.gstatic.com/firebasejs/8.4.3/firebase-messaging.js');
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js"
);
var firebaseConfig = {
    apiKey: "AIzaSyBbROTCoZaiQo8CMDHJF8x57zEXwpb6w_4",
    authDomain: "bisaxirim2022.firebaseapp.com",
    projectId: "bisaxirim2022",
    storageBucket: "bisaxirim2022.appspot.com",
    messagingSenderId: "578400270318",
    appId: "1:578400270318:web:bded61db1e6e168d6800ff",
    measurementId: "G-SSRPQDXKDE"
}
firebase.initializeApp(firebaseConfig)
firebase.messaging()
const messaging  = firebase.messaging()
messaging.onBackgroundMessage((payload) => {
  console.log(payload)
  // Customize notification here
  const notificationTitle = payload.notification.title;
    const notificationOptions = {
    body: payload.notification.body,
    //icon: "/icon.png",
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});