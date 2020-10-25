<style>
  .date {
    --size: 12rem;
    --margin: 6rem;
    margin: 0;
    font-family: var(--fancyFont);
    color: var(--darkBlue);
    font-weight: bold;
    letter-spacing: 0px;
    font-size: var(--size);
    line-height: var(--size);
    /* margin: var(--margin) 0; */
    text-shadow: 1px 1px 2px rgb(0 0 0 / 16%);
    display: flex;
    align-items: center;
  }
  .separator {
    color: var(--greyPurple);
    font-size: calc(var(--size) / 1.5);
    padding: 0 calc(var(--size) / 3) 15px;
    opacity: .6;
    text-shadow: none;
  }
  @media (max-width:640px) {
    .date {
      --size: 18vw;
      margin: 2rem 0;
      /* --margin: 8vw; */
    }
  }
</style>

<h1 class="date">
  <span class="numbers">06</span>
  <span class="separator">/</span>
  <span class="numbers">19</span>
  <span class="separator">/</span>
  <span class="numbers">21</span>
</h1>
