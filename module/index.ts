import { defineNuxtModule, addServerHandler, createResolver } from '@nuxt/kit';

export default defineNuxtModule({
  defaults: {},
  setup(_options, _nuxt) {
    const { resolve } = createResolver(import.meta.url);

    addServerHandler({
      route: '/api/hello',
      handler: resolve('./api/hello.get.ts'),
    });
  },
});
