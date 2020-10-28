<script>
  import BigDate from "./BigDate.svelte";
</script>

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

  .save-our-date {
    position: absolute;
    top: 5vw;
    --size: 4rem;
    font-family: var(--fancyFont);
    font-weight: 300;
    font-size: var(--size);
    /* margin-bottom: var(--size); */
    line-height: var(--size);
    letter-spacing: 3px;
    color: var(--white);
    opacity: .7;
    text-transform: uppercase;
  }
  .save-our-date span {
    font-style: italic;
    text-transform: lowercase;
    letter-spacing: 1px;
  }

  .location {
    position: absolute;
    bottom: 2rem;
    font: 2rem var(--fancyFont);
    color: var(--white);
    opacity: .7;
    font-size: 1.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
  }

  @media (max-width: 640px) {
    .save-the-date {
      padding: 5rem 2rem;
      box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
    min-height: 70vw;

    }
    .save-our-date {
      --size: 6vw;
    }
    .location {
      font-size: 1.6rem;
      letter-spacing: 2px;
      bottom: 1.2rem;
    }
  }
</style>

<main>

  <div class="center save-the-date">
    <img
      src="https://res.cloudinary.com/droopytersen/image/upload/c_scale,f_auto,q_auto,w_2234/v1603771183/natanddrewsayido/wedding-mountains.jpg"
      class="background-image"
      alt="background" />
      <div class="save-our-date">Save <span>our</span> Date</div>
    <BigDate />
  
    <div class="location">Ketchum, ID</div>
  </div>
</main>
