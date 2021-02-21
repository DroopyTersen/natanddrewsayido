<script>
  import Menu from "../components/Menu/Menu.svelte";

  import IntroBlurb from "../components/IntroBlurb.svelte";
  import SaveTheDate from "../components/SaveTheDate/SaveTheDate.svelte";
  import Survey from "../components/SaveTheDate/Survey.svelte";
  import RsvpWizard from "./rsvp/RsvpWizard.svelte";
  // import Accomodations from "../components/Accomodations.svelte";
</script>

<Menu variant="transparent" />
<!-- <svelte:head>
  <title>06/19/21</title>
</svelte:head> -->
<main class="home">
  <SaveTheDate />
  <IntroBlurb />
  <div class="container small-container">
    <h1 id="rsvp" style="margin: 8rem 0 0 0">RSVP</h1>
    <p>Please respond by May 1st. But the sooner the better!</p>
    <div>
      <RsvpWizard />
    </div>
  </div>
</main>
<!-- <Accomodations/> -->
