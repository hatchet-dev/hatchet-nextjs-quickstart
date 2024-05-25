import Hatchet, { Workflow } from '@hatchet-dev/typescript-sdk'

export const hatchet = Hatchet.init()

export const getWorker = async () => {
  return hatchet.worker('example-worker')
}

export const workflow: Workflow = {
  id: 'vercel-workflow',
  description: 'A webhook workflow that runs on Vercel!',
  webhook: 'http://localhost:3000/api/webhook',
  on: {
    event: 'vercel:user:create',
  },
  steps: [
    {
      name: 'step1',
      run: (ctx) => {
        console.log(`executed ${ctx.stepName()}`)
        return { step1: 'step1' }
      },
    },
    {
      name: 'step2',
      parents: ['step1'],
      run: (ctx) => {
        console.log(`executed ${ctx.stepName()}`)
        console.log('step1 output:', ctx.stepOutput('step1'))
        return { step2: 'step2' }
      },
    },
  ],
}
