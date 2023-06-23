import { 
  MessagePayload, 
  getToken as _getToken,
  onMessage as _onMessage 
} from "firebase/messaging";
import { useNuxtApp } from "#imports";

export default function () {
  const config = useRuntimeConfig()
  const { $messaging } = useNuxtApp();

  async function getToken(): Promise<string> {
    return $messaging && _getToken($messaging, {
       vapidKey: config.vapidKey,
    })
  }

  function onMessage(cb: (payload: MessagePayload) => void) {
    $messaging && _onMessage($messaging, cb);
  }

  return { getToken, onMessage };
}
