<script lang='ts'>
  import type { PageData } from './$types'
  import type { Items } from '$lib/types'

  export let data: PageData
  let items: Items
  $: items = data.items
</script>

<ul>
  {#each Object.values(items) as item}
    {#if item}
      <li><a href='{data.collection}/{item._id}'>{item.name}</a></li>
    {/if}
  {/each}
</ul>
