<style>
  .save-our-date {
    --size: 4rem;
    font-family: var(--fancyFont);
    font-weight: 300;
    font-size: var(--size);
    /* margin-bottom: var(--size); */
    line-height: var(--size);
    letter-spacing: 2px;
    color: var(--greyPurple);
    text-transform: uppercase;
  }
  .save-our-date span {
    font-style: italic;
    text-transform: lowercase;
    letter-spacing: 1px;
  }

  @media (max-width: 700px) {
    .save-our-date {
      --size: 6vw;
    }
  }
</style>

<div class="save-our-date">Save <span>our</span> Date</div>
