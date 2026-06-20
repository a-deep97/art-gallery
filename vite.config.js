import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves the repo from a sub-path (https://user.github.io/repo-name/),
// so we use a relative base. This works whether the repo is a project page
// or a user/org page (username.github.io).
export default defineConfig({
  plugins: [react()],
  base: './',
})
