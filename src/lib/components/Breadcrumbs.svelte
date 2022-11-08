<script>
  import { page } from '$app/stores'
  $: arr = Object.values($page.params)
</script>
{#if arr.length}
  <nav aria-label='Breadcrumb navigation example'>
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
    <hr>
  </nav>
{/if}

<style>
  hr {
    background: var(--dm-border-color) !important;
  }
</style>
