import { getCollection, getItems } from '$lib/helpers/api.ts'
import type { Collection } from '$lib/types.d.ts'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params }) => {
  const section = await getCollection(params.section)
  const collection: Collection = Object.values(section).find(entry => entry.urlId === params.collection)
  const items = await getItems(collection.items)
  return {
    data: collection,
    items,
    section: params.section,
    collection: params.collection
  }
}
