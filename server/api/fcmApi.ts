import { initializeApp } from 'firebase/app'
import { getAuth } from "firebase/auth"
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore"; 
//import { useNuxtApp } from "#imports";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  //console.log(config.public)

  const firebaseConfig = config.public.firebaseConfig;
  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const firestore = getFirestore(app)

  const reqData = await readBody(event)
  const { from, from_id, to, to_id, tipe, title, body } = reqData

  try {
    const docRef = await addDoc(collection(firestore, tipe), {
      messageText : body,
      sentAt: serverTimestamp(),
      sentBy: from_id,
      tipe: tipe,
      sendTo: to_id,
      //sentTo: 'D'+costumer_id,
      orderId: title,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }

  //return { body }

  const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
  
  const message = {
    registration_ids: [to.trim()],
    notification: {
      title: tipe == 'chat' ? title : tipe,
      body: body,
      vibrate: 1,
      sound: 1,
      show_in_foreground: true,
      priority: "high",
      content_available: true
    },
    data: {
      tipe: tipe,
      ref_token: from,
      from_id: from_id,
      text: body,
    },
  };

  let headers = new Headers({
    "Content-Type": "application/json",
    Authorization: "key=" + FIREBASE_API_KEY
  });

  let response = await fetch("https://fcm.googleapis.com/fcm/send", {
    method: "POST",
    headers,
    body: JSON.stringify(message)
  });
  response = await response.json();

  return response
})