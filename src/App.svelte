<script lang="ts">
  import ImportGuests from "./guests/ImportGuests.svelte";
  import Header from "./Header.svelte";
  import SaveTheDate from "./SaveTheDate.svelte";
</script>

<style>
  main {
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
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
  <ImportGuests />
</main>
