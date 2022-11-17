<script lang='ts'>
  import { page } from '$app/stores'
  import 'quartermoon/css/quartermoon-variables.css'
  import Navbar from '$lib/components/Navbar.svelte'
  import type { PageData } from './$types'
  export let data: PageData
</script>

<svelte:head>
  <title>
    {$page.data?.title ? $page.data.title + ' | The Index' : 'The Index'}
  </title>
</svelte:head>

<div class='page-wrapper with-navbar bg-dark'>
  <div class='sticky-alerts' />

  <Navbar sections={data.sections} />
  <div class='content-wrapper overflow-y-scroll'>
    <div class='container h-full'>
      <slot />
    </div>
  </div>
</div>

<style>
  :global(.pointer){
    cursor: pointer;
  }
</style>
