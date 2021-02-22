<script>
  export let guest = {};
  export let submit;
  export let cancel;

  let isAttending;
  let numGuests;
  let notes = "";

  let handleSubmit = (e) => {
    e.preventDefault();
    if (isAttending !== true && isAttending !== false) {
      return;
    }
    let rsvp = {
      is_attending: isAttending,
      notes,
      attendee_count: numGuests || 0,
      guest_id: guest.id,
    };
    submit(rsvp);
  };
</script>

<h2>{guest.name}</h2>

<form on:submit={handleSubmit}>
  <fieldset>
    <div class="form-group">
      <label for="is_attending" class="form-label">Are you in?</label>
      <label class="radio-label">
        <input
          type="radio"
          name="is_attending"
          on:change={(e) => (isAttending = e.currentTarget.checked)}
        />
        Heck yeah!
      </label>
      <label class="radio-label">
        <input
          type="radio"
          name="is_attending"
          on:change={(e) => (isAttending = !e.currentTarget.checked)}
        />
        Bummer, can't.
      </label>
    </div>

    {#if isAttending}
      <div class="form-group">
        <label for="attendee_count">How many of you?</label>
        <input
          type="number"
          inputmode="numeric"
          pattern="[0-9]*"
          bind:value={numGuests}
          required={isAttending}
        />
      </div>

      <div class="form-group">
        <label class="form-label" for="notes"> What else? </label>
        <textarea
          class="form-input"
          name="notes"
          placeholder="Optionally, let us know your plans"
          rows="8"
          bind:value={notes}
        />
        <p class="hint">
          Things like... Dietary restrictions? Are you going to stay in the
          cabins? What days do you plan to arrive and leave? You flying or
          driving?
        </p>
      </div>
    {/if}

    <div class="row">
      <button class="col-6 primary">Send Rsvp</button>
      <button type="button" class="col outline" on:click={cancel}
        >Start Over</button
      >
    </div>
  </fieldset>
</form>

<style>
  form {
    text-align: left;
    /* background: var(--taupe); */
    /* padding: 2rem; */
    width: 350px;
  }
  .form-group {
    margin-bottom: 2rem;
  }
  .radio-label {
    font-weight: bold;
  }
  textarea {
    height: auto;
  }
  @media (max-width: 600px) {
    form {
      width: 100%;
    }
  }
  .hint {
    margin-top: -1rem;
    font-size: 0.9em;
    color: var(--greyPurple);
  }
</style>
