<script>
  export let guests = [];
  export let onChoose;
  export let cancel;
</script>

<div>
  {#if guests.length}
    <h4>That's a popular place! Who are you?</h4>
    <div class="choices">
      {#each guests as guest}
        <button class="primary" on:click={() => onChoose(guest)}
          >{guest.name}</button
        >
      {/each}
    </div>
  {:else}
    <h4>Uh oh. We couldn't find a match</h4>
    <p>
      Try again? Otherwise just call, text, or email one of us and we'll figure
      it out.
    </p>
  {/if}

  <button class="outline" type="button" on:click={cancel}> Start over</button>
</div>

<style>
  .choices {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }
  .choices > * {
    max-width: 500px;
    margin: 0;
    margin-bottom: 4px;
  }
</style>
