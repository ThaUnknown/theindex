<script lang='ts'>
  import type { Sections } from '$lib/types'
  export let sections: Sections
  import NavItem from './NavItem.svelte'
</script>

<nav class='navbar'>
  <div class='container-fluid'>
    <a href='/' class='navbar-brand'>
      <img src='/favicon.png' alt='logo' class='rounded' />
      The Index
    </a>
    <span class='navbar-text text-monospace'>Beta</span>
    <ul class='navbar-nav ml-auto'>
      {#each Object.values(sections) as item}
        <NavItem {item} />
      {/each}
    </ul>
  </div>
</nav>
