<script>
  import { } from "svelte"
  let path = location.pathname.toLowerCase();
window.addEventListener('locationchange', function (event) {
  path = location.pathname.toLowerCase();
	console.log("locationchange", path)
});

</script>
<style>
  header {
    font-family: var(--fancyFont);
    padding: 1rem 2rem;
    max-width: 960px;
    box-sizing: border-box;
    margin: 0 auto;
  }
  header nav {
    --marginSize: 2rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    font-size: 1.8rem;

  }

  header nav > * {
    margin-left: var(--marginSize);
    border-bottom: 2px solid transparent;
  }
  header nav > *:first-child {
    margin-left: 0;
    margin-right: auto;
  }
  .active {
    border-bottom-color: var(--greyPurple);
  }
  @media (max-width: 640px) {
    header nav {
      font-size: 1.3rem;
      /* justify-content: center; */
      --marginSize: 1rem;
    }
  }
</style>

<header>

  <nav>
    <a href="/" class:active={path === '/'}>Save our Date</a>
    <a
      class:active={path === '/travel'}
      href="/travel">Travel</a>
    <a
      class:active={path === '/thingstodo'}
      href="/thingstodo">Things to do</a>
    <a
      class:active={path === '/registry'}
      href="/registry">Registry</a>
  </nav>
</header>
