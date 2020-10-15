<script lang="ts">
  import Header from "./Header.svelte";
  import SaveTheDate from "./SaveTheDate.svelte";
  import { getAllGuests } from "./services/guest.service";

  let guestsRequest = getAllGuests();
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<Header />
<main>
  <SaveTheDate />
  {#await guestsRequest}
    <p>...waiting</p>
  {:then guests}
    <pre>{JSON.stringify(guests, null, 2)}</pre>
  {:catch error}
    <p style="color: red">{error.message}</p>
  {/await}
</main>
