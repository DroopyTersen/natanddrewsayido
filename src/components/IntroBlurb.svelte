<style>
  .intro-row {
    margin: 30px 0;
    display: grid; 
    position: relative;
    grid-template-columns: 25% 1fr 25%;
    grid-template-rows: 1fr;
    gap: 40px;
    box-sizing: border-box;
    grid-template-areas:
        "pic1 content pic2"
  }
  h5 {
      margin-top: 0;
      font-size: 2.4rem;
      line-height: 2.4rem;
  }
  .main-content  {
      grid-area: content;
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
      position:absolute;
      background: var(--taupe);
      width: 40px;
      height: 100%;
      z-index: 0;
  }
  .pic-2 .accent {
      right: 20px;
  }
  @media (max-width:1024px ) {
    .intro-row {
        display: block;
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

<div class="container intro-row">
  <div class='pic pic-1'>
      <div class='accent'></div>
    <img src='/images/camp.png' alt='camp'>
</div>
  <div class='main-content'>
    <h5>We're getting married in the Idaho mountains!</h5>
    <p>
      We've rented the Central Idaho 4-H Camp for the weekend, complete with a
      mountain lodge, and a dozen rustic cabins.
    </p>
  </div>
  <div class='pic pic-2'>
    <div class='accent'></div>
    <img src='/images/lodge.png' alt='lodge'>
  </div>
</div>
