import Hatchet, { Workflow } from '@hatchet-dev/typescript-sdk'

export const hatchet = Hatchet.init()

export const workflow: Workflow = {
  id: 'nextjs-workflow',
  description: 'A webhook workflow that runs on Next.js!',
  on: {
    event: 'trigger:event',
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

export const workflow2: Workflow = {
  id: 'nextjs-workflow-2',
  description: '2 A webhook workflow that runs on Next.js!',
  on: {
    event: 'trigger:event',
  },
  steps: [
    {
      name: '2step1',
      run: (ctx) => {
        console.log(`executed ${ctx.stepName()}`)
        return { step1: '2step1' }
      },
    },
    {
      name: '2step2',
      parents: ['2step1'],
      run: (ctx) => {
        console.log(`executed ${ctx.stepName()}`)
        console.log('2step1 output:', ctx.stepOutput('2step1'))
        return { step2: '2step2' }
      },
    },
  ],
}
