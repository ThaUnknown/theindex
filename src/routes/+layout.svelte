<script lang='ts'>
  import 'quartermoon/css/quartermoon-variables.css'
  import Navbar from './Navbar.svelte'
</script>

<div class='page-wrapper with-navbar'>
  <div class='sticky-alerts'></div>

  <Navbar />
  <div class='content-wrapper'>
    <div class='container'>
      <slot />
    </div>
  </div>
</div>
