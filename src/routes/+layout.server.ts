import { getCollections, getSections } from '$lib/server/helpers/api.ts'
import type { Sections, Collections } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async (): { sections: Sections, collections: Collections } => {
  const [collections, sections] = await Promise.all([getCollections(), getSections()])
  return {
    collections,
    sections
  }
}
