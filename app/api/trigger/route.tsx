import { NextRequest } from 'next/server'
import { hatchet } from '@/lib/workflow'

export const revalidate = 0;

export async function GET(req: NextRequest) {
  await hatchet.event.push('trigger:event', {
    hello: 'world',
  })

  return new Response('ok', { status: 200 })
}
