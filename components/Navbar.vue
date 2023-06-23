<script setup lang="ts">
const { status, data, signOut, signIn } = useSession()
</script>

<template>
  <nav class="border-gray-200 px-2 sm:px-4 py-1 bg-gray-900">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
      <a href="https://bisaxirim.com" target="_blank" class="flex items-center">
        <img src="https://bisaxirim.com/assets/icon/logo-bisaxirim2-01.png" class="h-9" />
        <span class="self-center text-xl font-semibold whitespace-nowrap text-white mx-2">Support</span>
      </a>
      <div class="w-full md:w-auto" id="navbar-default">
        <ul class="flex flex-col md:p-4 mt-4 py-2 bg-gray-50 rounded-lg border md:flex-row md:space-x-4 md:mt-0 md:text-sm md:font-medium md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
          <!--<li>
            <nuxt-link
                href="/"
                class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
                href="/protected/globally"
                class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Globally Protected
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
                href="/protected/locally"
                class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              Locally Unprotected
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
                href="/api-routes"
                class="block py-2 pr-4 pl-3 mx-2 rounded md:border-0 md:p-0 text-gray-400 md:hover:text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
            >
              API Routes
            </nuxt-link>
          </li>-->
          <li class="flex items-center">
            <h1 v-if="status === 'authenticated'" class="text-white">
              Hi {{ data?.user?.name }}
            </h1>
          </li>
          <li>
            <button v-if="status === 'authenticated'" class="flex items-center justify-center space-x-2 bg-red-500 text-white rounded-lg p-2" @click="signOut({ callbackUrl: '/' })">
              <span>Logout</span>
            </button>
            <button v-else class="flex items-center justify-center space-x-2 bg-green-500 text-white rounded-lg p-2" @click="signIn()">
              <i class="fa fa-right-to-bracket pt-0.5" />
              <span>Login</span>
          </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
