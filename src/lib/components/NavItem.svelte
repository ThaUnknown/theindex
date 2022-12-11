<script lang='ts'>
  import { page } from '$app/stores'
  import type { Section } from '$lib/types'
  export let item: Section | any
  export let title: String | any
</script>

<li class='nav-item text-capitalize' class:active={$page.params.section === item.name.toLowerCase()}>
  <a href='/{item.name.toLowerCase()}' class='nav-link'>{title || item.name}</a>
</li>
