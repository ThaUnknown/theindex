<script lang='ts'>
  import 'quartermoon/css/quartermoon-variables.css'
  import Navbar from './Navbar.svelte'
  import Breadcrumbs from './Breadcrumbs.svelte'
  import type { PageData } from './$types'
  export let data: PageData
</script>

<div class='page-wrapper with-navbar'>
  <div class='sticky-alerts' />

  <Navbar sections={data.sections} />
  <div class='content-wrapper overflow-y-scroll'>
    <div class='container'>
      <Breadcrumbs />
      <slot />
    </div>
  </div>
</div>
