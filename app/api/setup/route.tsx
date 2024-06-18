import { NextRequest, NextResponse } from 'next/server'
import { getWorker, workflow } from '@/lib/workflow'

export const runtime = 'edge';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const w = await getWorker()

  await w.registerWorkflow(workflow)
  // success! the workflow is registered and your webhook endpoint should now receive events

  return new NextResponse('ok', { status: 200 })
}
