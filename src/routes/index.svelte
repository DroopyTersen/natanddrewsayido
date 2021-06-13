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
      <h2>Key Info</h2>
      <ul>
        <li>
          <a
            href="https://www.google.com/maps/place/43%C2%B048'30.8%22N+114%C2%B036'40.6%22W/@43.7044052,-114.5833077,11z/data=!4m5!3m4!1s0x0:0x0!8m2!3d43.8085556!4d-114.6112778"
            target="_blank"
          >
            Central Idaho 4-H Camp
          </a>
        </li>
        <li>Be there by 4:30pm</li>
        <li>
          It's open bar and we've got more than enough alcohol. But you can can
          also bring your own if you want someting special.
        </li>
        <li>
          If you're planning to stay in the cabin bunks, please bring some
          blankets or a sleeping bag.
        </li>
      </ul>
    </div>
  </section>
  <Timeline />
  <IntroBlurb />
</main>
<!-- <Accomodations/> -->
