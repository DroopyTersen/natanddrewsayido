<script>
  import Signature from "../SaveTheDate/Signature.svelte";
  import Hamburger from "./Hamburger.svelte";
  export let variant = "white";
  let open = false;
  let path = "";
  if (typeof window !== "undefined") {
    path = location.pathname.toLowerCase();
    window.addEventListener("locationchange", function (event) {
      path = location.pathname.toLowerCase();
      console.log("locationchange", path);
    });
  }
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />
<header
  class:shadowed={scrollY > 0}
  class:transparent={variant === "transparent"}
>
  <nav class:open>
    <a href="/" class="nav-signature">
      <Signature size="small" />
    </a>
    <a class:active={path === "/rsvp"} href="/rsvp">Rsvp</a>
    <a class:active={path === "/travel"} href="/travel">Travel</a>

    <a class:active={path === "/thingstodo"} href="/thingstodo">Things to do</a>
    <a class:active={path === "/registry"} href="/registry">Registry</a>
  </nav>

  <Hamburger bind:open className="hamburger" />
</header>

<style>
  header {
    font-family: var(--fancyFont);
    padding: 0 2rem;
    max-width: 1024px;
    box-sizing: border-box;
    margin: 0 auto;
    position: relative;
    height: 7rem;
    display: flex;
    align-items: center;
    z-index: 1;
  }
  :global(.menu-trigger) {
    display: none !important;
  }

  header nav {
    --marginSize: 2rem;
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    font-size: 1.8rem;
    z-index: 1;
  }

  header nav > * {
    margin-left: var(--marginSize);
    border-bottom: 2px solid transparent;
    color: var(--black);
  }
  .active {
    border-bottom-color: var(--greyPurple);
  }

  .nav-signature {
    margin-left: 0;
    margin-right: auto;
    /* display: none; */
  }
  @media (max-width: 1024px) {
    header {
      position: fixed;
      top: 0;
      right: 0;
      left: 0;
      background: #fff;
      display: none;
      display: block;
      height: 6rem;
      transition: all 0.2s linear;
    }
    header.transparent:not(.shadowed) {
      background: transparent;
    }
    header.shadowed {
      box-shadow: 0 -3px 20px rgba(0, 0, 0, 0.13);
    }
    :global(header .menu-trigger) {
      display: flex !important;
      float: right;
      border: none;
      margin: 0;
      display: flex;
      padding: 5px;
      position: absolute;
      right: 2rem;
      top: 1.2rem;
      transition: color 0.2s linear;
      overscroll-behavior: contain;
    }
    :global(header.transparent:not(.shadowed) .menu-trigger) {
      color: var(--white);
    }
    :global(header.transparent .menu-trigger.open) {
      color: var(--black);
    }
    :global(header.transparent:not(.shadowed) .header-centered .signature) {
      color: var(--white);
    }
    header nav {
      background: var(--lightGrey);
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
      z-index: 1;
    }
    header nav > * {
      margin: 2rem 0;
      font-size: 2.3rem;
    }
    .active {
      border-bottom-color: transparent;
    }
    header nav.open {
      transform: translateX(0);
      opacity: 1;
    }
    .nav-signature {
      display: block;
      margin: 0 auto;
    }
  }
</style>
