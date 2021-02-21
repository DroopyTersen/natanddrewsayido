<script>
  export let guest;
</script>

<div class="parent">
  <h2>{guest.name}</h2>
  {#if guest.rsvp && guest.rsvp.is_attending}
    <p class="large">
      Yes! You're coming with a party of {guest.rsvp.attendee_count}.
    </p>
  {:else}
    <p class="large">
      We're bummed you can't make it, but we totally understand.
    </p>
  {/if}
  <p>
    We've got your response. If you need to modify your RSVP, please
    call/text/email us.
  </p>
</div>

<style>
  .parent {
    padding: 3rem 0;
    text-align: center;
  }
  h2 {
    margin: 0;
  }
  .large {
    font-size: 2.2rem;
    margin-bottom: 0;
  }
</style>
