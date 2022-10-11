<script>
  import 'quartermoon/css/quartermoon-variables.css'
  import Navbar from './Navbar.svelte'
  import Breadcrumbs from './Breadcrumbs.svelte'
</script>

<div class='page-wrapper with-navbar'>
  <div class='sticky-alerts' />

  <Navbar />
  <div class='content-wrapper'>
    <div class='container'>
      <Breadcrumbs />
      <slot />
    </div>
  </div>
</div>
