<style>
  header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-family: var(--fancyFont);
    padding: 1rem 2rem;
  }
  header nav {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 1.8rem;
  }

  header nav > * {
    margin-left: 2rem;
  }
  .logo a {
    opacity: .8;
  }
  .logo a:hover {
    opacity: 1;
  }
  .logo img {
    height: 30px;
  }
  @media (max-width:640px) {
    header nav {
      font-size: 1.4rem;
      justify-content: center;
    }
    .logo {
      display: none;
    }
  }
</style>

<header>
  <div class='logo'>
    <a href="/" title='Nat & Drew Say I Do'>
      <img src='/images/mountain-logo.svg' alt='mountain-logo'>
    </a>
  </div>
  <nav>
    <a href="#">Travel</a>
    <a href="#">Things to do</a>
    <a href="#">Registry</a>
  </nav>
</header>
