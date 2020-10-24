<script lang="ts">
  import { getAllGuests } from "../services/guest.service";

  let guestsRequest = getAllGuests();
</script>

{#await guestsRequest}
  <p>...loading guests</p>
{:then guests}
  <div class="cards">
    {#each guests as guest}
      <div class="card guest">
        <h5 class="card-header">{guest.name}</h5>
      </div>
    {/each}
  </div>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
