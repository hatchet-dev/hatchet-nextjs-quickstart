import { hatchet, workflow, workflow2 } from '@/lib/workflow'

export const dynamic = 'force-dynamic';
export const maxDuration = 60

const secret = process.env.HATCHET_WEBHOOK_SECRET || 'secret'

const webhooks = hatchet.webhooks([workflow, workflow2])

export const { GET, POST } = webhooks.nextJSHandler({ secret })
