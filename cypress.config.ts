import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: 'http://localhost:3000',
    specPattern: 'src/cypress/integration/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: false,
  },
})
