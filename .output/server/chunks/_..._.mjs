import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { getAuth } from 'firebase/auth';
import { N as NuxtAuthHandler } from './nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'node:http';
import 'node:https';
import 'destr';
import 'h3';
import 'ofetch';
import 'unenv/runtime/fetch/index';
import 'hookable';
import './nitro/config.mjs';
import 'scule';
import 'ohash';
import 'ufo';
import 'unstorage';
import 'defu';
import 'radix3';
import 'next-auth/core';
import 'requrl';
import 'node:fs';
import 'node:url';
import 'pathe';

const _____ = NuxtAuthHandler({
  // secret needed to run nuxt-auth in production mode (used to encrypt data)
  //secret: process.env.NUXT_SECRET,
  secret: "fb978eb05d5701e9be21ac2e5c4cd7d5",
  providers: [
    // @ts-ignore Import is exported on .default during SSR, so we need to call it this way. May be fixed via Vite at some point
    CredentialsProvider.default({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
      // The credentials is used to generate a suitable form on the sign in page.
      // You can specify whatever fields you are expecting to be submitted.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        username: { label: "Username", type: "text", placeholder: "(hint: jsmith)" },
        password: { label: "Password", type: "password", placeholder: "(hint: hunter2)" }
      },
      authorize(credentials) {
        const auth = getAuth();
        const email = credentials.username;
        const password = credentials.password;
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
          const user = userCredential.user;
          return user;
        }).catch((error) => {
          error.code;
          error.message;
          console.error(error);
          return null;
        });
      }
    }),
    GoogleProvider.default({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ]
});

export { _____ as default };
//# sourceMappingURL=_..._.mjs.map
