module.exports = {
    env: {
        browser: true,
        es2021: true,  // ES6 이상의 버전을 허용
        node: true,    // Node.js 환경을 명시적으로 추가
      },
      parserOptions: {
        ecmaVersion: 12, // ES12 이상 사용 가능
        sourceType: 'module', // import/export 사용 허용
      },
      extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended'
      ],
      plugins: [
        'vue'
      ],
      rules: {
        // 다른 규칙들을 여기에 추가할 수 있습니다.
      }
};  