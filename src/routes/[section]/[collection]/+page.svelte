<script lang='ts'>
  import type { PageData } from './$types'
  import type { Items } from '$lib/types'

  export let data: PageData
  let items: Items
  $: items = data.items
</script>

<div class='gallery d-grid py-15'>
  {#each Object.values(items) as item}
    {#if item}
      <a href='{data.collection.urlId}/{item._id}' class='text-decoration-none'>
        <div class='card m-0 bg-dark-light border h-200 overflow-y-auto d-flex flex-column'>
          <div class='d-flex align-items-start justify-content-between w-full pb-5'>
            <div class='font-size-20 font-weight-bold mb-5'>
              {item.name}
            </div>
            {#if item.nsfw}
              <span class='badge badge-danger'>NSFW</span>
            {/if}
          </div>
          <div>
            {item.description}
          </div>
        </div>
      </a>
    {/if}
  {/each}
</div>

<style>
  .gallery {
    grid-template-columns: repeat(auto-fill, 55rem);
    grid-auto-rows: auto;
    justify-content: center;
    grid-gap: 2rem;
  }

  .card {
    transition: transform .2s ease, background .2s ease;
  }
  .card:hover {
    transform: scale(1.05);
    background: hsl(214deg 10% 18%) !important;
  }
</style>
