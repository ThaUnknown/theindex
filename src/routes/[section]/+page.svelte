<script lang='ts'>
  import type { PageData } from './$types'
  import type { Sections } from '$lib/types'

  export let data: PageData
  let sections: Sections
  $: sections = data.data
</script>

<ul>
  {#each Object.values(sections) as item}
    <li><a href='{data.section}/{item.urlId}'>{item.name}</a></li>
  {/each}
</ul>
