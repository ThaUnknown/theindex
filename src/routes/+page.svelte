<script lang='ts'>
  import type { PageData } from './$types'
  export let data: PageData
</script>

{#each Object.values(data.sections) as section}
  <div class='d-flex flex-row justify-content-between w-full align-items-end'>
    <h1 class='font-weight-bold mb-0'>{section.name}</h1><p class='mb-0'><a class='text-muted' href={section.urlId}>Show All ></a></p>
  </div>
  <hr>
  <ul>
    {#each Object.values(data.collections[section.urlId]) as collection}
      <li><a href='{section.urlId}/{collection.urlId}'>{collection.name}</a></li>
    {/each}
  </ul>
{/each}
