import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'pl80ucet',
    dataset: 'production',
  },
  studioHost: 'wagerbird',
})
