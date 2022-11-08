<script lang='ts'>
  import type { PageData } from './$types'
  import type { Collections, Collection } from '$lib/types'
  import CollectionGallery from '$lib/components/CollectionGallery.svelte'

  export let data: PageData
  let collections: Collections
  $: collections = data.section.collections as any
  function getCollections (collections: Collections): Collection[] {
    return Object.values(collections)
  }
</script>

<CollectionGallery section={data.section} collections={getCollections(collections)}/>
