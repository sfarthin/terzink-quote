require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
  deps: ["spec"],
  callback: window.__karma__.start
});