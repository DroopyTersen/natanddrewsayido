<script>
  import Menu from "../components/Menu/Menu.svelte";

  import IntroBlurb from "../components/IntroBlurb.svelte";
  import SaveTheDate from "../components/SaveTheDate/SaveTheDate.svelte";
  import Survey from "../components/SaveTheDate/Survey.svelte";
  // import Accomodations from "../components/Accomodations.svelte";
</script>

<Menu variant="transparent" />
<svelte:head>
  <link rel="icon" type="image/svg+xml" href="/images/ring.svg" />
  <title>06/19/21</title>
</svelte:head>
<main class="home">
  <SaveTheDate />
  <IntroBlurb />
  <Survey />
</main>
<!-- <Accomodations/> -->
