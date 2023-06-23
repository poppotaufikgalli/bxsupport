import CredentialsProvider from 'next-auth/providers/credentials'
import GoogleProvider from "next-auth/providers/google";
import { NuxtAuthHandler } from "#auth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default NuxtAuthHandler({
    // secret needed to run nuxt-auth in production mode (used to encrypt data)
    //secret: process.env.NUXT_SECRET,
    secret: "fb978eb05d5701e9be21ac2e5c4cd7d5",
    providers: [
        // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
        CredentialsProvider.default({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            credentials: {
                username: { label: 'Username', type: 'text', placeholder: '(hint: jsmith)' },
                password: { label: 'Password', type: 'password', placeholder: '(hint: hunter2)' }
            },
            authorize(credentials: any) {
                // You need to provide your own logic here that takes the credentials
                // submitted and returns either a object representing a user or value
                // that is false/null if the credentials are invalid.
                // NOTE: THE BELOW LOGIC IS NOT SAFE OR PROPER FOR AUTHENTICATION!
                const auth = getAuth();
                const email = credentials.username
                const password = credentials.password
                console.log(email, password)

                signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    return user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error(error)
                    return null
                });

                /*const user = { 
                    id: '1', 
                    name: 'J Smith', 
                    username: 'jsmith', 
                    password: 'hunter2', 
                    image: 'https://avatars.githubusercontent.com/u/25911230?v=4' 
                }

                if (credentials ? .username === user.username && credentials ? .password === user.password) {
                    // Any object returned will be saved in `user` property of the JWT
                    return user
                } else {
                    // eslint-disable-next-line no-console
                    console.error('Warning: Malicious login attempt registered, bad credentials provided')

                    // If you return null then an error will be displayed advising the user to check their details.
                    return null

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }*/
            }
        }),
        GoogleProvider.default({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
    ]
})