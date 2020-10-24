<style>
  .save-the-date {
    flex-direction: column;
    background: var(--transparentTaupe);
    padding: 8rem 2rem;
    position: relative;
  }
  .background-shadow {
    object-fit: cover;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
    opacity: 0.5;
    height: 100%;
  }
  .signature {
    font-family: var(--cursiveFont);
    font-size: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 10rem;
  }
  .save-our-date {
    font-family: var(--fancyFont);
    font-weight: 300;
    font-size: 3rem;
    line-height: 3rem;
    letter-spacing: 2px;
    color: var(--greyPurple);
    text-transform: uppercase;
    margin-bottom: 3.5rem;
  }
  .save-our-date span {
    font-style: italic;
    text-transform: lowercase;
    letter-spacing: 1px;
  }

  .date {
    margin: 0;
    font-family: var(--fancyFont);
    color: var(--darkBlue);
    font-weight: bold;
    letter-spacing: 0px;
    font-size: 14rem;
    line-height: 14rem;
    margin-top: 4rem;
    text-shadow: 1px 1px 2px rgb(0 0 0 / 16%);
  }

  .separator {
    margin: 0 10px;
    display: none;
  }
  .location {
    font: 2rem var(--fancyFont);
    color: var(--greyPurple);
    font-size: 1.8rem;
  }
  @media (max-width:1024px) {
    .signature {
      font-size: 8rem;
      line-height: 8rem;
    }
    .date {
      font-size: 10rem;
      margin-top: 3rem;
      line-height: 10rem;
    }
  }
  @media (max-width:700px) {
    .save-the-date {
      padding: 5rem 2rem;
    }
    .save-our-date {
      font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 2.3rem;
    }
    .signature {
      line-height: 6rem;
      font-size: 6rem;
    }
    .date {
      font-size: 8rem;
      margin-top: 3rem;
      line-height: 8rem;
    }
  }
  @media (max-width:500px) {
    .save-our-date {
      font-size: 1.5rem;
    line-height:1.5rem;
      margin-bottom: 1.5rem;
    }
    .signature {
      line-height: 4rem;
      font-size: 4rem;
    }
    .date {
      font-size: 5.6rem;
      margin-top: 2rem;
      line-height: 5.6rem;
    }
  }
</style>

<div class="center save-the-date">
  <img src='/images/shadow.jpg' class='background-shadow' alt='background shadow'>
  <div class='save-our-date'>Save <span>our</span> Date</div>
  <div class='signature'><span>Natalie</span><span style='margin:0 20px'>&</span> <span>Drew</span></div>
  <h1 class="date">
    <span class="numbers">06</span>
    <span class="separator">.</span>
    <span class="numbers">19</span>
    <span class="separator">.</span>
    <span class="numbers">21</span>
  </h1>

  <div class='location'>Ketchum, ID</div>
</div>
