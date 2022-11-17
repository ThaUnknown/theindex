<script lang='ts'>
  import type { Collection, Section } from '$lib/types'
  export let section: Section
  export let collections: Collection[]
  export let limit = 0
</script>
<div class='gallery d-grid py-15'>
  {#each limit ? collections.slice(0, limit) : collections as collection}
    <a href='/{section.urlId}/{collection.urlId}' class='text-decoration-none'>
      <div class='card m-0 bg-dark-light border h-200 overflow-y-auto d-flex flex-column'>
        <div class='d-flex align-items-start justify-content-between w-full pb-5'>
          <div class='font-size-20 font-weight-bold mb-5'>
            {collection.name}
          </div>
          {#if section.nsfw}
            <span class='badge badge-danger'>NSFW</span>
          {/if}
        </div>
        <div>
          {collection.description}
        </div>
        <div class='d-flex align-items-end justify-content-between w-full mt-auto pt-10'>
          <img src='/img/{collection.img}' class='w-30 h-30 rounded' alt='Section icon'>
          <a class='text-blue' href='/{section.urlId}/{collection.urlId}'>View Collection ></a>
        </div>
      </div>
    </a>
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
  .w-30 {
    width: 3rem;
  }
  .h-30 {
    height: 3rem;
  }
</style>
