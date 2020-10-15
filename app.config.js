import 'dotenv/config';

export default {
  expo: {
    name: 'fullstack-hy2020-rate-repository-app',
    slug: 'fullstack-hy2020-rate-repository-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    extra: {
      env: process.env.ENV,
      apolloUri: process.env.APOLLO_URI,
    },
    splash: {
      image: './assets/splash.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ['**/*'],
    ios: {
      supportsTablet: true,
    },
    web: {
      favicon: './assets/favicon.png',
    },
  },
};
