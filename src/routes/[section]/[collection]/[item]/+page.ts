import type { Item } from '$lib/types'
import type { PageLoad } from './$types'

export const load: PageLoad = async ({ params, parent }): { item: Item } => {
  const _parent = await parent()
  const item = _parent.items[params.item]
  return {
    title: item.name,
    item
  }
}
