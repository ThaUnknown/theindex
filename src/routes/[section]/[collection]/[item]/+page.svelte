<script lang='ts'>
  import type { PageData } from './$types'

  export let data: PageData

  function partition (array: Array<any>, isValid: Function): [Array<any>, Array<any>] {
    return array.reduce(([pass, fail], elem) => {
      return isValid(elem) ? [[...pass, elem], fail] : [pass, [...fail, elem]]
    }, [[], []])
  }

  $: proAndCon = Object.entries(data.item.data).filter(([key]) => data.columns[key].type === 'proAndCon')
  $: features = Object.entries(data.item.data).filter(([key]) => data.columns[key].type === 'feature')
  $: language = Object.entries(data.item.data).filter(([key]) => data.columns[key].type === 'language')
  $: arrays = Object.entries(data.item.data).filter(([key]) => data.columns[key].type === 'array')

  $: [pros, cons] = partition(proAndCon, ([key, value]) => value)
</script>

<h1 class='font-weight-bold mb-0'>
  {data.item.name}
</h1>
<div class="text-{data.item.ping ? 'success' : 'danger'}">
  {data.item.ping ? 'Online' : 'Offline'}
</div>
<p>
  {data.item.description}
</p>
<a href={data.item.urls[0]}>
  <button class='btn btn-primary border' type='button'>Visit</button>
</a>

<p class='text-danger'>
  {#each cons as [key, value]}
    {#if typeof value === 'boolean'}
      <div class='px-10 py-5 d-inline-block'>{data.columns[key].name}</div>
    {:else}
      <div class='px-10 py-5 d-inline-block'>
        {data.columns[key].name}{#if value?.length}: {Array.isArray(value) ? value.join(', ') : value}{/if}
      </div>
    {/if}
  {/each}
</p>
<p class='text-success'>
  {#each [...features, ...arrays, ...pros, ...language] as [key, value]}
    {#if typeof value === 'boolean'}
      <div class='px-10 py-5 d-inline-block'>{data.columns[key].name}</div>
    {:else}
      <div class='px-10 py-5 d-inline-block'>
        {data.columns[key].name}{#if value?.length}: {Array.isArray(value) ? value.join(', ') : value}{/if}
      </div>
    {/if}
  {/each}
</p>
