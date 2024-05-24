import { NextRequest } from 'next/server'
import { registerWorker } from '@/lib/workflow'

const secret = process.env.HATCHET_SECRET || 'secret'

const worker = registerWorker()

export async function POST(req: NextRequest) {
  const w = await worker
  return w.handleVercelRequest(req, secret)
}
