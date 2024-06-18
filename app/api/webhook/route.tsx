import { hatchet, workflow } from '@/lib/workflow'

const secret = process.env.HATCHET_WEBHOOK_SECRET || 'secret'

const webhooks = hatchet.webhooks(workflow)

export const revalidate = 0;

export const { GET, POST, PUT } = webhooks.nextJSHandler({ secret })
