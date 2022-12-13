import { getItems, getColumns, getCollection } from '$lib/server/helpers/api.ts'
import type { Collection, Columns, Items } from '$lib/types'
import type { LayoutServerLoad } from './$types'

export const load: LayoutServerLoad = async ({ params, parent }): { collection: Collection, items: Items, columns: Columns } => {
  const collection: Collection = (await getCollection(params.section))[params.collection]
  const [items, columns] = await Promise.all([getItems(collection.items), getColumns()])
  // const rx = /og:image["']\s?content=["']([^"']+)/
  // const promises = []
  // for (const item of Object.values(items) as Item[]) {
  //   if (item) {
  //     promises.push((async () => {
  //       let res
  //       try {
  //         res = await fetch(item.urls[0], { signal: AbortSignal.timeout(5000) })
  //         if (!res.ok) return
  //         const text = await res.text()
  //         let image = text.match(rx)?.[1]
  //         if (image?.startsWith('/')) image = item.urls[0] + image
  //         item.image = image
  //         item.ping = true
  //       } catch (e) {
  //         item.ping = false
  //       }
  //     })())
  //   }
  // }
  // await Promise.all(promises)
  return {
    title: collection.name,
    collection,
    columns,
    items
  }
}
