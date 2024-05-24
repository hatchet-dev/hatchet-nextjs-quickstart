import { NextRequest, NextResponse } from 'next/server'
import { registerWorker, workflow } from '@/lib/workflow'

export async function GET(req: NextRequest) {
  const w = await registerWorker()

  await w.registerWorkflow(workflow)
  // success! the workflow is registered and your webhook endpoint should now receive events

  return new NextResponse('ok', { status: 200 })
}
