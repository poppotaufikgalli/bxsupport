<template>
  <div class="">
    <h3 class="text-xl font-bold ">BisaXirim Support</h3>
    <p class="text-sm">Available Soon</p>
    <pre v-if="msg"><span>Message :</span> {{ msg }}</pre>
  </div>
</template>

<script lang="ts" setup>
//import { getToken } from 'firebase/messaging'
definePageMeta({ auth: false })
const { data, status, getCsrfToken, getProviders } = useSession()

const { getToken, onMessage, sendMessage } = useFcm()
const msg = ref("")

const providers = await getProviders()
const csrfToken = await getCsrfToken()
const fcmToken = await getToken()

onMessage((payload) => msg.value = payload);

</script>

<style scoped>
pre {
  @apply bg-gray-800 text-white p-3 my-3 rounded shadow overflow-x-auto;
}

pre span {
  @apply text-green-400;
}
</style>
