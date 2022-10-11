<script>
  import { page } from '$app/stores'
  export let item
</script>

<li class='nav-item text-capitalize' class:active={$page.params.Item === item.name.toLowerCase()}>
  <a href='/{item.name.toLowerCase()}' sdata-sveltekit-prefetch class='nav-link'>{item.name}</a>
</li>
