<style>
  .date {
    --size: 14rem;
    margin: 0;
    font-family: "Italiana", serif;
    color: var(--white);
    font-weight: light;
    letter-spacing: 2px;
    font-size: var(--size);
    line-height: var(--size);
    display: flex;
    align-items: center;
    opacity: 0.7;
    position: relative;
    top: -4vw;
  }
  .separator {
    margin: 0 2rem;
  }
  @media (max-width: 1024px) {
    .date {
      --size: 21vw;
      /* margin: 2rem 0; */
      /* --margin: 8vw; */
    }
    .separator {
      margin: 0 1rem;
    }
  }
  @media (max-width: 640px) {
    .date {
      letter-spacing: .5px;
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
