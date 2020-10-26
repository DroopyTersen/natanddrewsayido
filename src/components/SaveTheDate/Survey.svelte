<script>
  import { fade, slide } from "svelte/transition";
  import { submitSurvey } from "../fauna.service";

  let name = "";
  let status = "new";
  let choice = null;

  $: if (!name) {
    status = "new";
    choice = null;
  }
  const responses = {
    0: "No Problem, we absolutely understand.",
    1: "No worries, keep us posted if things change.",
    2: "Nice! You won't regret it.",
    3: "Yes! We can't wait!",
  };
  const handleSubmit = async (value) => {
    choice = value;
    status = "saving";
    try {
      await submitSurvey({ name, value });
      status = "success";
    } catch (err) {
      status = "error";
    }
  };
</script>

<style>
  .survey {
    margin-top: 20px;
    background: var(--skinPink);
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
  }
  .buttons {
    display: grid;
    grid-template-columns: 1fr 1fr 70px 1fr 1fr;
    gap: 10px;
    align-items: stretch;
    justify-items: center;
  }
  .buttons img {
    padding: 0.75rem;
    opacity: 0.7;
    color: var(--greyPurple);
  }
  .buttons button {
    font-size: 1.4rem;
    margin: 0;
    max-width: 400px;
    width: 100%;
  }
  .buttons button span {
    font-weight: bold;
  }
  .buttons button.active {
    background: var(--greyPurple);
    color: white;
    border-color: var(--greyPurple);
  }
  @media (max-width: 1024px) {
    .buttons {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
  label.name {
    text-align: center;
    margin-bottom: 2rem;
  }
  label.name input {
    max-width: 400px;
  }
  @media (max-width: 640px) {
    label.name {
      text-align: left;
    }
    label.name input {
      max-width: 100%;
    }
  }
  .button-overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    background: var(--skinPink);
    opacity: 0.8;
  }
  img.loading {
      /* animation: shake 75ms infinite; */
      animation: wiggle 75ms infinite;
      animation-timing-function: linear;
  }
  @keyframes wiggle {
  0% { transform: translate(2px, 0); }
  50% { transform: translate(-2px, 0); }
  100% { transform: translate(2px, 0); }
}

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
      100% {
        transform: scale(1);
      }
  }
</style>

<div class="survey">
  <h3>Think you'll make it?</h3>
  <label class="name">
    Who are you? Families and plus ones are welcome.
    <input type="text" bind:value={name} placeholder="Bill Brasky & Guest" />
  </label>
  <div class="container button-container" transition:fade>
    {#if !name}
      <div transition:fade class="button-overlay" />
    {/if}
    <div class="buttons">
      <button
        class="outline"
        disabled={!name}
        on:click={() => handleSubmit(0)}
        class:active={choice === 0}>
        <span>Bummer!</span><br />
        I can't make it :(
      </button>
      <button
        class="outline"
        disabled={!name}
        on:click={() => handleSubmit(1)}
        class:active={choice === 1}>
        <span>Might be tough...</span><br />
        I'll see what I can do.
      </button>
      <img src="/images/mountain-logo.svg" alt="divider" class:loading={status === "saving"} />
      <button
        class="outline"
        disabled={!name}
        on:click={() => handleSubmit(2)}
        class:active={choice === 2}>
        <span>Planning on it.</span><br />
        Just have to verify some things
      </button>
      <button
        class="outline"
        disabled={!name}
        on:click={() => handleSubmit(3)}
        class:active={choice === 3}>
        <span>Count me in!</span><br />
        I'm coming for sure.
      </button>
    </div>
  </div>
  {#if status === 'error'}
    <div>Shoot.... something went wrong. Who built this site?!</div>
  {/if}
  {#if status === 'success'}
    <h4 transition:slide>{responses[choice]}</h4>
  {/if}
</div>
