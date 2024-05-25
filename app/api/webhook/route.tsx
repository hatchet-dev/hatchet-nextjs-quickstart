import { NextRequest } from 'next/server'
import { hatchet, workflow } from '@/lib/workflow'

const secret = process.env.HATCHET_SECRET || 'secret'

const webhooks = hatchet.webhooks(workflow)

export async function POST(req: NextRequest) {
  return webhooks.handleVercelRequest(req, secret)
}
