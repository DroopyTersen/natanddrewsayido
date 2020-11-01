<script>
  import Accomodations from "../../components/Accomodations.svelte";
  import Menu from "../../components/Menu/Menu.svelte";
</script>

<Menu />
<main>
  <div class="container">
    <h1>Travel</h1>
    <p>Fly or drive?</p>
    <h2>Fly</h2>
    <p>
      You can fly into Boise International Airport. From there, Ketchum is a 2.5
      hours (3 hours if you take the scenic way, but it is SOOO worth it). We
      looked recently and found rental cars for about $30/day.
    </p>
    <h2>Roadtrip</h2>
    <p>If you are driving from WI you will see some incredible sights like:</p>
    <ul>
      <li>Badlands National Park (about halfway</li>
      <li>Mount Rushmore</li>
      <li>Yellowstone National Park</li>
      <li>Grand Tetons National Park</li>
    </ul>
  </div>
  <Accomodations />
</main>
