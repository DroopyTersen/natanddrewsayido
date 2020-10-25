<script>
  import BigDate from "./BigDate.svelte";
  import SaveOurDate from "./SaveOurDate.svelte";
  import Signature from "./Signature.svelte";
</script>

<style>
  .save-the-date {
    flex-direction: column;
    background: var(--transparentTaupe);
    padding: 8rem 2rem;
    position: relative;
  }
  .background-shadow {
    object-fit: cover;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.75;
    height: 100%;
  }

  .location {
    font: 2rem var(--fancyFont);
    color: var(--greyPurple);
    font-size: 1.8rem;
    position: absolute;
    bottom: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
  
  }
  .top-signature {
    display: none;
  }

  @media (max-width: 640px) {
    .save-the-date {
      padding: 5rem 2rem;
      box-shadow: 1px 1px 4px rgba(0,0,0,.2);
    }
    .top-signature {
    display: block;
  }
  :global(body .top-signature > .signature) {
    --size: 10vw;
  }
  .middle-signature {
    visibility: hidden;
    height: 30px;
    display: none;
  }
    .location {
      font-size: 1.4rem;
    letter-spacing: 2px;
    }
  }
</style>

<div class='top-signature'>
  <Signature />
</div>
<div class="center save-the-date">
  <img
    src="/images/shadow.jpg"
    class="background-shadow"
    alt="background shadow" />
    <SaveOurDate />
    <div class='middle-signature'>

      <Signature />
    </div>
  <BigDate />

  <div class="location">Ketchum, ID</div>
</div>
