import type { Section } from '$lib/types'
import type { LayoutLoad } from './$types'

export const load: LayoutLoad = async ({ parent, params }): { section: Section } => {
  const _parent = await parent()
  const section = _parent.sections[params.section]
  section.collections = _parent.collections[params.section]
  return {
    section
  }
}
