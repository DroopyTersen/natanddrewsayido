<script>
  import Signature from "../SaveTheDate/Signature.svelte";
  import Hamburger from "./Hamburger.svelte";
  let open = false;
  let path = "";
  if (typeof window !== "undefined") {
    path = location.pathname.toLowerCase();
    window.addEventListener("locationchange", function (event) {
      path = location.pathname.toLowerCase();
      console.log("locationchange", path);
    });
  }
</script>

<style>
  header {
    font-family: var(--fancyFont);
    padding: 1rem 2rem;
    max-width: 1024px;
    box-sizing: border-box;
    margin: 0 auto;
    justify-content: flex;
  }
  :global(.menu-trigger) {
    display: none !important;
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
    color: var(--black);
  }
  header nav .first {
    margin-left: 0;
    margin-right: auto;
  }
  .active {
    border-bottom-color: var(--greyPurple);
  }
  .signature {
    display: none;
  }
  @media (max-width: 640px) {
    header {
      position: fixed;
      width: 100%;
      z-index: 6;
      top: 0;
    }
    .signature {
      display: block;
      font: 11vw var(--cursiveFont);
    }
    :global(.menu-trigger) {
      display: flex !important;
      float: right;
    }
    header nav {
      background: var(--skinPink);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      position: fixed;
      padding: 20px 20px 60px 20px;
      transform: translateX(100vw);
      opacity: 0;
      transition: transform 0.1s ease-out, opacity 0.2s ease;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      text-align: center;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    header nav > * {
      margin: 2rem 0;
      font-size: 2.3rem;
    }
    header nav > .first {
      margin-right: 0;
    }
    .active {
      border-bottom-color: transparent;
    }
    header nav.open {
      transform: translateX(0);
      opacity: 1;
    }
  }
  :global(body .mobile-header .signature) {
    font-size: 2.3rem;
    line-height: 2.3rem;
    padding: 1rem;
    color: var(--greyPurple);
  }
  @media (max-width: 640px) {
    
    header {
      position: fixed;
    top: 0;
    right: 0;
    left: 0;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: none;
      display: block;
    }
  }
</style>

<header>
  <div class="mobile-header">
    <a href="/">
      <Signature size="small" />
    </a>
  </div>
  <nav class:open>
    <div class="signature">Natalie & Drew</div>
    <a
      href="/"
      class="first"
      class:active={path === '/'}
      on:click={() => {
        open = false;
      }}>Save our Date</a>
    <a
      class:active={path === '/travel'}
      on:click={() => {
        open = false;
      }}
      href="/travel">Travel</a>

    <a
      class:active={path === '/thingstodo'}
      on:click={() => {
        open = false;
      }}
      href="/thingstodo">Things to do</a>
    <a
      class:active={path === '/registry'}
      on:click={() => {
        open = false;
      }}
      href="/registry">Registry</a>
  </nav>

  <Hamburger bind:open className="hamburger" />
</header>
