<script>
  import { page } from '$app/stores'
  $: arr = Object.values($page.params)
</script>
<nav class='d-flex flex-column'>
  <ul class='breadcrumb text-muted'>
    <li class='breadcrumb-item'>
      <a href='/'>Home</a>
    </li>
    {#each arr as item, i}
      <li class='breadcrumb-item text-capitalize'>
        {#if (arr.length - 1) !== i}
          <a href='/{arr.slice(0, i + 1).join('/')}'>{item.replaceAll('-', ' ')}</a>
        {:else}
          {item.replaceAll('-', ' ')}
        {/if}
      </li>
    {/each}
  </ul>
  <hr class='w-full'>
</nav>

<style>
  hr {
    background: var(--dm-border-color) !important;
  }
</style>
