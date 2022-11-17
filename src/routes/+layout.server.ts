import { getCollections, getSections } from '$lib/server/helpers/api.ts'
import type { Sections, Collections } from '$lib/types'
import type { LayoutServerLoad } from './$types'
import { lookup } from 'geoip-lite'

export const load: LayoutServerLoad = async ({ request, getClientAddress }): { sections: Sections, collections: Collections, title?: string, ipInfo: any } => {
  const [collections, sections] = await Promise.all([getCollections(), getSections()])
  const address = getClientAddress()
  const ipInfo = lookup(address)
  if (ipInfo) ipInfo.address = address
  return {
    title: null,
    ipInfo,
    collections,
    sections
  }
}
