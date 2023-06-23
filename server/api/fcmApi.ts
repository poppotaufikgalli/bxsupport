export default defineEventHandler(async (event) => {
    const reqData = await readBody(event)
    const { from, to, tipe, title, body } = reqData
    //return { body }

    const FIREBASE_API_KEY = process.env.FIREBASE_API_KEY
    
    const message = {
      registration_ids: [to],
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

    return from
})