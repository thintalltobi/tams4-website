// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    // Allow self-closing on void elements
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always', // Allow self-closing on void elements
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
  },
})