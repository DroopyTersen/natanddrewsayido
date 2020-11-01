<script>
  import ImageTiles from "./Image/ImageTiles.svelte";
</script>

<style>
  h3 {
    --size: 2.8rem;
    /* text-align: center; */
    margin: 10rem 0 6rem 0;
    letter-spacing: 1.5px;
    font-size: var(--size);
  }
  .first-header {
    text-align: center;
  }
  .first-p {
    margin: 10rem 0;
  }
  img.camp {
    width: 100%;
    object-fit: cover;
    filter: grayscale(0.2);
    min-height: 100%;
    max-height: 100%;
    border-radius: 3px;
  }
  .help {
    color: var(--red);
    font-weight: bold;
  }
  .help-text {
    margin: 0 0 8rem;
  }
  @media (max-width: 640px) {
    /* h3 {
      --size: 2.rem;
      letter-spacing: 1px;
    } */
  }
</style>

<div class="container small-container">
  <h3 class="first-header">We're getting married!</h3>
</div>
<div class="container">
  <ImageTiles
    files={['glacier-mountains.jpg', 'diving.jpg', 'proposal.jpg', 'iceland.jpg', 'brads-wedding.jpg', 'hammock2.jpg', 'proposal2.jpg', 'bryce.jpg', 'iceland-hotspring.jpg', 'sawtooths1.jpg', 'tetons1.jpg', 'badlands.jpg']} />
</div>
<div class="container small-container">
  <p class="first-p">
    On
    <b>June 19, 2020</b>
    we are getting married in the beautiful Idaho mountains. We've rented the
    <a
      target="_blank"
      href="https://www.google.com/maps/place/Central+Idaho+4-H+Camp/@43.4691744,-110.0573083,5z/data=!4m5!3m4!1s0x54a90b13a008d653:0xecf2756d0f52897d!8m2!3d43.8087604!4d-114.6129285">Central
      Idaho 4-H Camp</a>
    for the weekend, complete with a mountain lodge, and a
    <a href="/travel#accomodations">dozen rustic cabins</a>.
  </p>
  <div class="images">
    <!-- <img load="lazy" alt="Ketchum" class="camp" src="/images/ketchum1.jpg" /> -->
    <img load="lazy" alt="4-h Camp" class="camp" src="/images/camp.png" />
  </div>
</div>
<div class="container small-container">
  <h3 class="help">We need your help!</h3>
  <p class="help-text">
    We'd love to see everyone there, but an Idaho destination wedding is a HUGE
    ask. We completely understand if circumstances prohibit you from making the
    journey.
  </p>
  <p><b>Please answer the survey</b> below to help us plan our day.</p>
</div>
