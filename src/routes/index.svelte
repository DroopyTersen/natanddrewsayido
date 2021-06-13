<script>
  import Menu from "../components/Menu/Menu.svelte";

  import IntroBlurb from "../components/IntroBlurb.svelte";
  import SaveTheDate from "../components/SaveTheDate/SaveTheDate.svelte";
  import Survey from "../components/SaveTheDate/Survey.svelte";
  import RsvpWizard from "./rsvp/RsvpWizard.svelte";
  import Timeline from "../components/Timeline.svelte";
  // import Accomodations from "../components/Accomodations.svelte";
</script>

<Menu variant="transparent" />
<!-- <svelte:head>
  <title>06/19/21</title>
</svelte:head> -->
<main class="home">
  <SaveTheDate />
  <section class="container small-container">
    <div>
      <p class="first-p">
        On
        <b>June 19, 2021</b>
        we are getting married in the beautiful Idaho mountains. We've rented the
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Central+Idaho+4-H+Camp/@43.4691744,-110.0573083,5z/data=!4m5!3m4!1s0x54a90b13a008d653:0xecf2756d0f52897d!8m2!3d43.8087604!4d-114.6129285"
          >Central Idaho 4-H Camp</a
        >
        for the weekend, complete with a mountain lodge, and a
        <a href="/accomodations#cabins">dozen rustic cabins</a>.
      </p>
      <ul>
        <li>
          <a
            href="https://www.google.com/maps/place/43%C2%B048'30.8%22N+114%C2%B036'40.6%22W/@43.7044052,-114.5833077,11z/data=!4m5!3m4!1s0x0:0x0!8m2!3d43.8085556!4d-114.6112778"
            target="_blank"
          >
            Central Idaho 4-H Camp
          </a>
        </li>
        <li>Be there on Saturday by 4:30pm (Welcome Hour starts at 4pm)</li>
        <li>
          It's open bar and we've got more than enough alcohol. But you can can
          also bring your own if you want someting special.
        </li>
        <li>
          If you're planning to stay in the cabin bunks, please bring some
          blankets or a sleeping bag.
        </li>
      </ul>
      <div class="images">
        <!-- <img load="lazy" alt="Ketchum" class="camp" src="/images/ketchum1.jpg" /> -->
        <img
          load="lazy"
          alt="4-h Camp"
          class="camp"
          src="https://res.cloudinary.com/droopytersen/image/upload/q_auto:best/v1604263589/natanddrewsayido/camp.jpg"
        />
      </div>
    </div>
  </section>
  <Timeline />
  <IntroBlurb />
</main>

<!-- <Accomodations/> -->
<style>
  .first-p {
    margin: 3rem 0;
  }
  img.camp {
    width: 100%;
    object-fit: cover;
    filter: grayscale(0.2);
    min-height: 100%;
    max-height: 100%;
    border-radius: 3px;
    /* margin-bottom: 3rem; */
  }

  @media (max-width: 640px) {
    /* h3 {
      --size: 2.rem;
      letter-spacing: 1px;
    } */
  }
</style>
