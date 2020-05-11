const presets = [
  [
    "@babel/env",
    {
      targets: { // указать цели, для полифилов
        android: "67",
        edge: "15",
        ie: "11",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage", // эта настройка babel-polyfill, если стоит значение usage, то будут подставлятся полифилы для версий браузеров которые указали ниже.
      corejs: "3.4.1" // явно проставить версию corejs
    }
  ],
];

module.exports = { presets };