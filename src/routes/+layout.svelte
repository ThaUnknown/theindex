<script lang='ts'>
  import 'quartermoon/css/quartermoon-variables.css'
  import Navbar from '$lib/components/Navbar.svelte'
  import Breadcrumbs from '$lib/components/Breadcrumbs.svelte'
  import type { PageData } from './$types'
  export let data: PageData
</script>

<div class='page-wrapper with-navbar bg-dark'>
  <div class='sticky-alerts' />

  <Navbar sections={data.sections} />
  <div class='content-wrapper overflow-y-scroll'>
    <div class='container'>
      <Breadcrumbs />
      <slot />
    </div>
  </div>
</div>
