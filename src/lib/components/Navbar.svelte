<script lang='ts'>
  import type { Sections } from '$lib/types'
  export let sections: Sections
  import NavItem from './NavItem.svelte'
</script>

<nav class='navbar border-bottom'>
  <div class='container-fluid'>
    <a href='/' class='navbar-brand'>
      <img src='/favicon.png' alt='logo' class='rounded' />
      The Index
    </a>
    <span class='navbar-text text-monospace'>Beta</span>
    <ul class='navbar-nav ml-auto'>
      <li class='nav-item text-capitalize'>
        <a href='https://thewiki.moe/' class='nav-link'>Wiki</a>
      </li>
      <div class='px-15'/>
      {#each Object.values(sections) as item}
        <NavItem {item} />
      {/each}
      <div class='px-15'/>
      <NavItem item={{ name: 'login' }}/>
    </ul>
  </div>
</nav>
