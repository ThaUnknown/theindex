<script lang='ts'>
  import { enhance } from '$app/forms'
  import type { ActionData, PageData } from './$types'
  export let form: ActionData
  export let data: PageData
</script>

<div class='d-flex w-full h-full flex-column justify-content-center align-items-center'>
  {#if form?.success || data.auth}
    <form action='?/create' method='POST' class='w-400 mw-full' use:enhance>
      <h1 class='font-weight-bold'>Create User</h1>
      <div class='form-group'>
        <label for='username' class='required'>Username</label>
        <input type='text' class='form-control' id='username' placeholder='Username' required autocomplete='username' name='login'>
        <div class='form-text'>
          Only alphanumeric characters and underscores allowed.
        </div>
      </div>
      <div class='form-group'>
        <label for='password' class='required'>Password</label>
        <input type='password' class='form-control' id='password' placeholder='Password' required autocomplete='new-password' name='password'>
        <div class='form-text'>
          Must be at least 8 characters long, and contain at least one special character.
        </div>
      </div>
      <input class='btn btn-primary btn-block' type='submit' value='Create account'>
    </form>
  {:else}
    <form action='?/login' method='POST' class='w-400 mw-full' use:enhance>
      <h1 class='font-weight-bold'>Login</h1>
      <div class='form-group'>
        <label for='username' class='required'>Username</label>
        <input type='text' class='form-control' id='username' placeholder='Username' required autocomplete='username' name='login'>
        <div class='form-text'>
          Only alphanumeric characters and underscores allowed.
        </div>
      </div>
      <div class='form-group'>
        <label for='password' class='required'>Password</label>
        <input type='password' class='form-control' id='password' placeholder='Password' required autocomplete='current-password' name='password'>
        <div class='form-text'>
          Must be at least 8 characters long, and contain at least one special character.
        </div>
      </div>
      <input class='btn btn-primary btn-block' type='submit' value='Log in'>
    </form>
  {/if}
</div>
