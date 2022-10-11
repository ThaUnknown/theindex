<script>
  /** @type {import('./$types').PageData} */
  import { page } from '$app/stores'
  import { collections } from '/src/stores.js'
</script>

<ul>
  {#each Object.values(collections[$page.params.sections]) as item}
    <li><a href='{$page.params.sections}/{item.urlId}'>{item.name}</a></li>
  {/each}
</ul>
