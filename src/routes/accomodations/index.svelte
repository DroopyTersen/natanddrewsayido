<script>
  import Menu from "../../components/Menu/Menu.svelte";
</script>

<Menu />

<main>
  <div class="container small-container">
    <h1>Accomodations</h1>
    <div>
      <p>The primary accomodation options are:</p>
      <ul style="padding-left: 4rem">
        <li>
          <a href="#cabins">The camp cabins (FREE).</a>
        </li>
        <li>
          <a href="#hotel">Hotel in Ketchum</a>
        </li>
        <li>
          <a href="#airbnb">AirBnB near Ketchum</a>
        </li>
        <li>
          <a href="#camp">RV or Tent camp</a>
        </li>
      </ul>
    </div>
    <div>
      <h3 id="cabins">Camp Cabins</h3>

      <p><em>Pretends it's a weekend away at summer camp.</em></p>
      <p>
        At the venue there are 12 cabins that each have a dozen twin size bunks.
        <b>These are free</b> for anyone to use from Friday (6/18) at noon to Sunday
        at 9 am.
      </p>
      <div class="side-by-side-images">
        <img
          alt="cabins"
          src="https://res.cloudinary.com/droopytersen/image/upload/v1613956079/natanddrewsayido/camp-cabin.jpg"
        />
        <img
          src="https://res.cloudinary.com/droopytersen/image/upload/v1613956080/natanddrewsayido/inside-cabin.jpg"
          alt="Inside the cabins"
        />
      </div>
      <p>
        The cabins have lights and electricity in the cabins, but <b
          >they aren't heated</b
        >. Temperatures outside will probably drop into the high 30's at night
        (high 60's during the day). That said, with a few bodies in there and a
        solid sleeping bag (or a few thick blankets) it could be a fun "summer
        camp" style experience.
      </p>
      <p>
        There are twice as many bunks as guests so there should be no trouble
        finding an open spot.
      </p>
    </div>
    <div>
      <h3 id="hotel">Ketchum Hotel</h3>
      <div class="side-by-side-images">
        <img src="/images/ketchum1.jpg" alt="Ketchum" />
        <img src="/images/hotel3.jpg" alt="Ketchum Hotel at night" />
      </div>
      <p>
        The best hotel options will be in Ketchum, about 20 minutes south of the
        venue. Ketchum is an upscale ski town (also commonly referred to as Sun
        Valley).
      </p>

      <p>
        About 20 minutes south of Ketchum is Hailey which might have more
        affordable options, but be 40 minutes from the venue.
      </p>
    </div>
    <div>
      <h3 id="airbnb">AirBnB (House Rental)</h3>
      <div class="side-by-side-images">
        <img src="/images/airbnb2.jpg" alt="AirBnB Cabin" />
        <img src="/images/airbnb4.jpg" alt="AirBnB House" />
      </div>
      <p>
        There are a variety of house rental options on AirBnB. For example, you
        could get:
      </p>
      <ul>
        <li>A studio apartment in Ketchum for $150/night</li>
        <li>A condo for up to 6 guests for $300/night</li>
        <li>A crazy fancy 5 bedroom cabin for $600-900/night</li>
      </ul>
      <p>
        Don't forget to account for the cleaning fees and taxes when pricing out
        the AirBnB (pay attention to the "total" cost as well as the nightly
        rate).
      </p>
      <p>
        <a
          target="_blank"
          href="https://www.airbnb.com/s/Ketchum--ID--United-States/homes?tab_id=home_tab&refinement_paths[0]=%2Fhomes&checkin=2021-06-18&checkout=2021-06-20&source=structured_search_input_header&search_type=filter_change&ne_lat=43.97980497787976&ne_lng=-114.16100879162161&sw_lat=43.59855580207899&sw_lng=-114.72327339425294&zoom=11&search_by_map=true&room_types[0]=Entire%20home%2Fapt&place_id=ChIJbYYeLamCqVQRwvWEHG_VZEQ&fbclid=IwAR3UwLE8ESWLU7Wl0W3gX8CylYZmh7QtPaN0D76nCSPQ4HoUM2v8GecWInE"
          >Click here to see current availability on AirBnb.</a
        >
      </p>
    </div>
    <div>
      <h3 id="camp">Camping</h3>
      <img
        src="https://blog.goodsam.com/wp-content/uploads/2020/08/header_CROP2b.jpg"
        alt="Sawtooth camping"
      />
      <p>
        If you have an RV/Camper, you can definitely stay in the 4-H Camp's
        parking lot, but I don't think they'll have any power hookups for you.
      </p>
      <p>
        Any camping you find on Hwy 75 between Stanley to the north and and
        Ketchum to the south will put you well within striking distance of the
        venue. The farther north, the more impressive the mountains (and cold).
      </p>
      <p>
        If you are feeling adventurous, much of the land is part of the Sawtooth
        National Forest which has very lax rules on <a
          target="_blank"
          href="https://www.jeriandpenguin.com/rv-travel/sawtooth-national-forest"
          >dispersed camping</a
        > (aka: you can camp wherever you want for free, but no amenities).
      </p>
    </div>
  </div>
</main>

<style>
  h1 {
    margin-bottom: 0;
  }
  h3 {
    padding-top: 70px;
    margin-top: -20px;
    margin-bottom: 1rem;
  }
</style>
