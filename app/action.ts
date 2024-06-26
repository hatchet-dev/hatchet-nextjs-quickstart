'use server'

import { hatchet } from '@/lib/workflow'

export default async function action() {
  'use server'

  await hatchet.event.push('trigger:event', {
    hello: 'world',
  })
}
