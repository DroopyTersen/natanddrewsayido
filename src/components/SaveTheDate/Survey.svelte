<script>
  import { fade, slide } from "svelte/transition";
  import { submitSurvey } from "../fauna.service";

  let name = "";
  let status = "new";
  let choice = null;

  $: validationPrompt = (() => {
     if (!name) {
         return "Please enter your name"
     }
     if (choice === null) {
         return "Please make a selection to let us know if you'll make it."
     }
     return ""
  })()

  $: if(name && choice !== null) {
      status = "touched"
  }
  $: if(name) {
      status = "touched"
  }

  const responses = {
    0: "No Problem, we absolutely understand.",
    1: "No worries, keep us posted if things change.",
    2: "Nice! You won't regret it.",
    3: "Yes! We can't wait!",
  };

  const handleSave = async () => {
    status = "touched";
    if (name && choice !== null) {
      status = "saving";
      validationPrompt = "";
      try {
        await submitSurvey({ name, value: choice });
        status = "success";
      } catch (err) {
        status = "error";
      }
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
    margin-top: 4rem;
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

  button.primary {
      width: 150px;
      max-width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  button.primary.loading {
      animation: pulse .6s infinite ease-in-out;
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
</style>

<div class="survey">
  <h3>Think you'll make it?</h3>

  <div class="container button-container" >
    <div class="buttons">
      <button
        class="outline"
        on:click={() => (choice = 0)}
        class:active={choice === 0}>
        <span>Bummer!</span><br />
        I can't make it :(
      </button>
      <button
        class="outline"
        on:click={() => (choice = 1)}
        class:active={choice === 1}>
        <span>Might be tough...</span><br />
        I'll see what I can do.
      </button>
      <img
        src="/images/mountain-logo.svg"
        alt="divider"
        class:loading={status === 'saving'} />
      <button
        class="outline"
        on:click={() => (choice = 2)}
        class:active={choice === 2}>
        <span>Planning on it.</span><br />
        Just have to verify some things
      </button>
      <button
        class="outline"
        on:click={() => (choice = 3)}
        class:active={choice === 3}>
        <span>Count me in!</span><br />
        I'm coming for sure.
      </button>
    </div>

  </div>
  <label class="name">
    Who are you? Families and plus ones are welcome.<br />
    <input type="text" bind:value={name} placeholder="Bill Brasky & Guest" />
  </label>
  {#if validationPrompt && status === "touched"}
    <p transition:slide>{validationPrompt}</p>
  {/if}
  <button
    class="primary"
    transition:slide
    class:loading={status === 'saving'}
    disabled={status === 'success' || status === "saving"}
    on:click={() => handleSave()}>
        {#if status === "new" || status === "touched"}
            <span>Save</span>
            {:else}
            <span>&#9825;</span>
        {/if}    	

    </button>
  {#if status === 'error'}
    <div>Shoot.... something went wrong. Who built this site?!</div>
  {/if}

  {#if status === 'success'}
    <h4 transition:slide>{responses[choice]}</h4>
  {/if}
</div>
