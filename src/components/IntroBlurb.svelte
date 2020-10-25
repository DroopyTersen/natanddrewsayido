<style>
  .intro-row {
    display: grid;
    position: relative;
    grid-template-columns: 25% 1fr 25%;
    grid-template-rows: 1fr;
    gap: 30px;
    box-sizing: border-box;
    grid-template-areas: "pic1 content pic2";
    align-items: start;
    margin: 30px auto 0;
  }
  h5 {
    margin-top: 20px;
    font-size: 2.4rem;
    line-height: 2.4rem;
  }
  .main-content {
    grid-area: content;
  }
  .pic {
    padding: 0;
  }
  .pic-1 {
    grid-area: pic1;
  }
  .pic-2 {
    grid-area: pic2;
  }
  .pic {
    display: flex;
    align-items: center;
    position: relative;
  }
  .pic img {
    padding: 20px;
    box-sizing: border-box;
    z-index: 1;
  }
  .pic-1 img {
    padding-right: 0;
  }
  .pic-2 img {
    padding-left: 0;
  }
  .pic .accent {
    position: absolute;
    background: var(--taupe);
    width: 40px;
    height: 100%;
    z-index: 0;
  }
  .pic-2 .accent {
    right: 0px;
  }
  .help {
    margin: 40px 0 0 0;
    font-size: 1.8rem;
    line-height: 1.8rem;
    font-weight: bold;
    color: #bb433d;
    /* text-transform: uppercase; */
    letter-spacing: 1px;
  }
  .help-text {
    font-size: 1.35rem;
    padding-left: 10px;
    border-left: 3px solid var(--taupe);
  }
  @media (max-width: 1024px) {
    .intro-row {
      display: block;
    }
    .pic-2 {
      display: none;
    }
    .pic {
      justify-content: center;
    }
    .pic .accent {
      display: none;
    }
    .pic img {
      padding: 0;
      margin-bottom: 20px;
    }
  }
</style>

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
</div>
