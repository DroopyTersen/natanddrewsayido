<style>
  .date {
    --size: 24rem;
    margin: 0;
    font-family: var(--fancyFont);
    color: var(--white);
    font-weight: light;
    letter-spacing: 2px;
    font-size: var(--size);
    line-height: var(--size);
    display: flex;
    align-items: center;
    opacity: .6;
  }
  .separator {
    margin: 0 2rem;
  }
  @media (max-width:640px) {
    .date {
      --size: 18vw;
      margin: 2rem 0;
      /* --margin: 8vw; */
    }
    .separator {
      margin: 0 1rem;
    }
  }
</style>

<h1 class="date">
  <span class="numbers">06</span>
  <span class="separator">.</span>
  <span class="numbers">19</span>
  <span class="separator">.</span>
  <span class="numbers">21</span>
</h1>
