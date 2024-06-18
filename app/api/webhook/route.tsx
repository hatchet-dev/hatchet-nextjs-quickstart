import { hatchet, workflow } from '@/lib/workflow'

export const dynamic = 'force-dynamic';
export const maxDuration = 60

const secret = process.env.HATCHET_WEBHOOK_SECRET || 'secret'

const webhooks = hatchet.webhooks(workflow)

export const { GET, POST, PUT } = webhooks.nextJSHandler({ secret })
