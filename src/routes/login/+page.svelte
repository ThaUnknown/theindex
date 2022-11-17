
<div class='d-flex w-full h-full justify-content-center align-items-center'>
  <form action='http://localhost:8080/login' method='POST' class='w-400 mw-full'>
    <div class='form-group'>
      <label for='username' class='required'>Username</label>
      <input type='text' class='form-control' id='username' placeholder='Username' required>
      <div class='form-text'>
        Only alphanumeric characters and underscores allowed.
      </div>
    </div>
    <div class='form-group'>
      <label for='password' class='required'>Password</label>
      <input type='password' class='form-control' id='password' placeholder='Password' required>
      <div class='form-text'>
        Must be at least 8 characters long, and contain at least one special character.
      </div>
    </div>
    <input class='btn btn-primary btn-block' type='submit' value='Log in'>
  </form>
</div>
