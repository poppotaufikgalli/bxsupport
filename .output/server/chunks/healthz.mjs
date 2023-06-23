import { defineEventHandler } from 'h3';

const healthz = defineEventHandler((event) => {
  return {
    service: "online"
  };
});

export { healthz as default };
//# sourceMappingURL=healthz.mjs.map
