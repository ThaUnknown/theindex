<script lang='ts'>
  import type { PageData } from './$types'
  import type { Section, Collection } from '$lib/types'
  import CollectionGallery from '$lib/components/CollectionGallery.svelte'
  export let data: PageData
  const sections: Section[] = Object.values(data.sections)
  function getCollections (section: Section): Collection[] {
    return Object.values(data.collections[section.urlId])
  }
</script>
{#if data.ipInfo}
  <div class='w-full border-bottom border-left border-right bg-very-dark rounded-bottom p-5 mb-5 text-center'>
    Your IP <span class='code'>{data.ipInfo.address}</span> from <span class='code'>{data.ipInfo.city || data.ipInfo.timezone.split('/')[1]}</span> is exposed.<span class='px-10'/>
    <a href='/vpns'>Learn more ></a>
  </div>
{/if}
{#each sections as section}
  <div class='d-flex flex-row justify-content-between w-full align-items-end'>
    <h1 class='font-weight-bold mb-0'>{section.name}</h1><p class='mb-0'><a class='text-muted' href={section.urlId}>Show All ></a></p>
  </div>
  <hr>
  {section.description}
  <CollectionGallery {section} collections={getCollections(section)} limit={4}/>
{/each}

<style>
  hr {
    background: var(--dm-border-color) !important;
  }
</style>
