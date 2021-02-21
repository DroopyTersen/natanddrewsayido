<script>
  export let disabled = false;
  export let onLookup;

  let streetnumber = "";
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(streetnumber);
    if (streetnumber && onLookup) {
      onLookup(streetnumber.split(" ")[0]);
    }
  };
</script>

<div>
  <h4>We'll look you up based on your address.</h4>
  <form on:submit={handleSubmit}>
    <fieldset {disabled}>
      <label class="name">
        Street number <br />
        <input
          type="number"
          inputmode="numeric"
          pattern="[0-9]*"
          bind:value={streetnumber}
          required
        />
        <br />
      </label>
      <p class="example">
        For example, if we sent your invitation to <b>2594 Cramer St</b>, then
        you'd type <b>2594</b>.
      </p>
      <button class="primary">Look me up</button>
    </fieldset>
  </form>
</div>

<style>
  input {
    max-width: 120px;
  }
  .example {
    margin-top: 0;
    text-align: left;
  }
</style>
