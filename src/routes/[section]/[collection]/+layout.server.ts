import { getItems, getColumns, getCollection } from '$lib/server/helpers/api.ts'
import type { Collection, Columns, Items } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params, parent }): { collection: Collection, items: Items, columns: Columns } => {
  const collection: Collection = (await getCollection(params.section))[params.collection]
  const [items, columns] = await Promise.all([getItems(collection.items), getColumns()])
  return {
    collection,
    columns,
    items
  }
}
