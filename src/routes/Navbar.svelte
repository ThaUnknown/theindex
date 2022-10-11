<script>
  import NavItem from './NavItem.svelte'
  import sections from '$lib/sections.json'
</script>

<nav class='navbar'>
  <div class='container-fluid'>
    <a href='/' class='navbar-brand'>
      <img src='/favicon.png' alt='logo' class='rounded' />
      The Index
    </a>
    <span class='navbar-text text-monospace'>Beta</span>
    <ul class='navbar-nav'>
      {#each Object.values(sections) as item}
        <NavItem {item} />
      {/each}
    </ul>
  </div>
</nav>
