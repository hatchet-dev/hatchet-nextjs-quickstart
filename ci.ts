import { registerWorker, workflow } from './lib/workflow'

async function main() {
  const w = await registerWorker()

  await w.registerWorkflow(workflow)
  // success! the workflow is registered and your webhook endpoint should now receive events
}

main()
  .then(r => console.log(r))
  .catch(e => {
    console.log(e)
    process.exit(1)
  })
