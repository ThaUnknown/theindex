<script>
  import { page } from '$app/stores'
  $: arr = Object.values($page.params)
</script>
<nav aria-label='Breadcrumb navigation example'>
  <ul class='breadcrumb'>
    <li class='breadcrumb-item'>
      {#if arr.length}
        <a href='/'>Home</a>
      {:else}
        Home
      {/if}
    </li>
    {#each arr as item, i}
      <li class='breadcrumb-item'>
        {#if (arr.length - 1) !== i}
          <a href='/{item}'>{item}</a>
        {:else}
          {item}
        {/if}
      </li>
    {/each}
  </ul>
</nav>
