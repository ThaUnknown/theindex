<script lang='ts'>
  import { page } from '$app/stores'
  import type { Section } from '$lib/types'
  export let item: Section
</script>

<li class='nav-item text-capitalize' class:active={$page.params.section === item.name.toLowerCase()}>
  <a href='/{item.name.toLowerCase()}' class='nav-link'>{item.name}</a>
</li>
