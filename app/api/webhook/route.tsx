import { hatchet, workflow } from '@/lib/workflow'

const secret = process.env.HATCHET_SECRET || 'secret'

const webhooks = hatchet.webhooks(workflow)

export const { GET, POST, PUT } = webhooks.nextJSHandler({ secret })
