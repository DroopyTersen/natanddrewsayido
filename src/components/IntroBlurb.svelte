<style>
  h3 {
    --size: 3rem;
    /* text-align: center; */
    margin: 8rem 0;
    font-size: var(--size);
  }
  p {
    text-align: justify;
    margin: 0 0 5rem;
  }
  .images {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: 1fr;
    gap: 20px;
    margin-bottom: 5rem;

  }
  img.camp {
    width: 100%;
    object-fit: cover;
    filter:grayscale(.2);
    min-height: 100%;
    max-height: 100%;
    border-radius: 3px;
  }
  .help {
    color: var(--red);
    font-weight: bold;
}
</style>

<div class="container small-container">
  <h3>We're getting married in the Idaho mountains!</h3>
  <p>
    We've rented the
    <a
      target="_blank"
      href="https://www.google.com/maps/place/Central+Idaho+4-H+Camp/@43.4691744,-110.0573083,5z/data=!4m5!3m4!1s0x54a90b13a008d653:0xecf2756d0f52897d!8m2!3d43.8087604!4d-114.6129285">Central
      Idaho 4-H Camp</a>
    for the weekend, complete with a mountain lodge, and a dozen rustic cabins.
  </p>
  <div class='images'>
    <img alt='Ketchum' class='camp' src='/images/ketchum1.jpg'/>
      <img alt='4-h Camp' class='camp' src='/images/camp.png'/>
  </div>

  <h5 class="help">We need your help!</h5>
  <p class="help-text">
    We'd love to see everyone there, but an Idaho destination wedding is a HUGE
    ask. We completely understand if circumstances prohibit you from making the
    journey.
  </p>
  <p><b>Please answer the survey</b> below to help us plan our day.</p>

</div>

<!--   
<div class="container">
  <div class="intro-row">
    <div class="pic pic-1">
      <div class="accent" />
      <img src="/images/camp.png" alt="camp" />
    </div>
    <div class="main-content">
      <h5>We're getting married in the Idaho mountains!</h5>
      <p>
        We've rented the
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Central+Idaho+4-H+Camp/@43.4691744,-110.0573083,5z/data=!4m5!3m4!1s0x54a90b13a008d653:0xecf2756d0f52897d!8m2!3d43.8087604!4d-114.6129285">Central
          Idaho 4-H Camp</a>
        for the weekend, complete with a mountain lodge, and a dozen rustic
        cabins.
      </p>
      <h5 class="help">We need your help!</h5>
      <p class="help-text">
        We'd love to see everyone there, but an Idaho destination wedding is a
        HUGE ask. We completely understand if circumstances prohibit you from
        making the journey.
      </p>
      <p><b>Please answer the survey</b> below to help us plan our day.</p>
    </div>
    <div class="pic pic-2">
      <div class="accent" />
      <img src="/images/lodge.png" alt="lodge" />
    </div>
  </div>
</div> -->
