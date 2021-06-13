<script>
  import BigDate from "./BigDate.svelte";
  let scrollY = 0;
</script>

<svelte:window bind:scrollY />

<div class="center save-the-date">
  <img
    src="https://res.cloudinary.com/droopytersen/image/upload/c_scale,f_auto,q_auto,w_2234/v1603771183/natanddrewsayido/wedding-mountains.jpg"
    class="background-image"
    alt="background"
  />
  <div class="center">
    <div class="cursive">Let's do this</div>
    <BigDate />
  </div>

  <div class="location" class:scrolled={scrollY > 0}>Ketchum, ID</div>
</div>

<style>
  .save-the-date {
    padding: 8rem 2rem;
    position: relative;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
  }
  .background-image {
    object-fit: cover;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    height: 100%;
  }
  .cursive {
    font-family: var(--cursiveFont);
    color: var(--white);
    opacity: 0.7;
    font-size: 17rem;
  }

  .location {
    position: absolute;
    bottom: 2rem;
    font: 2rem var(--fancyFont);
    color: var(--white);
    opacity: 0.7;
    font-size: 1.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  @media (max-width: 1024px) {
    .location:not(.scrolled) {
      position: fixed;
    }
    .cursive {
      font-size: 11vw;
    }
    .save-the-date {
      padding: 5rem 2rem;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
      min-height: 100vh;
    }
  }
  @media (max-width: 640px) {
    .save-the-date .center {
      margin-top: -4rem;
    }
    .cursive {
      margin-bottom: 2rem;
    }
    .location {
      font-size: 1.4rem;
      letter-spacing: 2px;
    }
  }
</style>
