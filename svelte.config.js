import preprocess from 'svelte-preprocess'

const config = {
  disableDependencyReinclusion: ['@roxi/routify'],
  preprocess: [
    preprocess({
      postcss: true
    })
  ]
}

export default config
