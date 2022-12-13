<script lang='ts'>
  import type { PageData } from './$types'
  import type { Item } from '$lib/types'

  export let data: PageData
  let items: Item[]
  $: items = Object.values(data.items)
  let sponsors: Item[]
  $: sponsors = items.filter(item => item?.sponsor)

  function hide (this: HTMLImageElement) {
    this.style.display = 'none'
  }

  function filter ({ target }) {
    console.log(target)
    const { value } = target
    items = Object.values(data.items).filter((i) => i?.name.includes(value))
  }
</script>

<input type='search' class='form-control' placeholder='Search' on:change={filter}>

{#each sponsors as sponsor}
  <div class='featured h-400 d-flex d-md-grid position-relative sponsor p-20'>
    <div class='image z-0 pointer h-400'>
      {#if sponsor.image}
        <a href={sponsor._id}>
          <img src={sponsor.image} alt='opengraph' class='shadow-lg rounded img-cover w-full h-full' on:error={hide}>
        </a>
      {/if}
    </div>
    <div class='about z-10 position-absolute p-md-0 p-20 d-flex flex-column justify-content-center h-full'>
      <div class='text-primary font-weight-bold'>Sponsor</div>
      <div class='font-size-24 font-weight-bold text-white'>{sponsor.name}</div>
      <div class='w-full my-20 p-20 bg-dark rounded shadow-lg'>
        {sponsor.description}
      </div>
      <div class='text-monospace'>
        {#each Object.entries(sponsor.data) as [key, value]}
          {#if typeof value === 'boolean'}
            {#if value}
              <div class='px-10 py-5 d-inline-block'>{data.columns[key].name}</div>
            {/if}
          {:else}
            <div class='px-10 py-5 d-inline-block'>
              {data.columns[key].name}{#if value?.length}: {Array.isArray(value) ? value.join(', ') : value}{/if}
            </div>
          {/if}
        {/each}
      </div>
      <div>
        <a href={sponsor._id}>
          <button class='btn btn-primary border mt-10' type='button'>About</button>
        </a>
      </div>
    </div>
  </div>
{/each}

<div class='gallery d-grid py-15'>
  {#each items as item}
    {#if item && !item.sponsor}
      <a href={item._id} class='text-decoration-none'>
        <div class='card m-0 bg-dark-light border h-200 position-relative overflow-hidden'>
          {#if item.image}
            <div class='position-absolute top-0 left-0 z-0 w-full h-full img-wrapper'>
              <img alt='opengraph' src={item.image} class='img-cover w-full h-full' on:error={hide}>
            </div>
          {/if}
          <div class='overflow-y-auto d-flex flex-column z-10 position-absolute'>
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
        </div>
      </a>
    {/if}
  {/each}
</div>

<style>
  .sponsor {
    gap: 10px;
    grid-template-columns: repeat(12, 1fr);
    margin-bottom: 5rem;
  }
  .sponsor:nth-of-type(2n+1) .image {
    grid-column: 1 / 8;
  }
  .sponsor .image {
    grid-area: 1 / 6 / -1 / -1;
  }
  .sponsor:nth-of-type(2n+1) .about {
    grid-column: 7 / -1;
    text-align: right;
  }
  .sponsor .about {
    grid-area: 1 / 1 / -1 / 7;
  }
  .img-wrapper, .image {
    filter: grayscale(100%) brightness(60%) blur(4px);
    transition: filter .2s ease;
  }
  .image:hover {
    filter: none
  }
  .card:hover .img-wrapper {
    filter: brightness(60%) blur(4px);
  }
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
