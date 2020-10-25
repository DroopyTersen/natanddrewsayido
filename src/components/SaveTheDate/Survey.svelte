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
    padding: .75rem;
    opacity: .7;
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
  @media (max-width:1024px) {
      .buttons {
          grid-template-columns: 1fr;
          padding: 0;
      }
  }
</style>

<div class="survey">
  <h3>Think you'll make it?</h3>
  <div class="container">
    <div class="buttons">
      <button class="outline">
        <span>Bummer!</span><br />
        I can't make it :(
      </button>
      <button class="outline">
        <span>Might be tough...</span><br />
        I'll see what I can do.
      </button>
      <img src="/images/mountain-logo.svg" alt="divider" />
      <button class="outline">
        <span>Planning on it.</span><br />
        Just have to verify some things
      </button>
      <button class="outline">
        <span>Count me in!</span><br />
        I'm coming for sure.
      </button>
    </div>
  </div>
</div>
