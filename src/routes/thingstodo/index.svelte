<script>
  import Menu from "../../components/Menu/Menu.svelte";
  import ThingToDo from "../../components/ThingToDo.svelte";
</script>

<Menu />
<main>
  <div class="container">
    <h1>Things to do</h1>
    <img
      src="https://visitidaho.org/content/uploads/2019/10/181013jjw-0116-1.jpg"
      alt="Sawtooths"
    />
    <p>
      Our wedding venue is in central Idaho between Sun Valley/Ketchum and
      Stanley. .
    </p>

    <div>
      We recommend checking out the..
      <ul>
        <li>Mountain town vibe of downtown Ketchum.</li>
        <li>Incredible sights of the Sawtooth Mountains near Stanley.</li>
      </ul>
    </div>
    <img
      src="https://visitidaho.org/content/uploads/2020/01/RegionMaps_Website-R7.png"
      alt="central idaho"
    />
    <p>
      Near Sun Valley you'll find <a
        href="https://www.ketchumidaho.org/discover-ketchum"
        target="_blank">Ketchum</a
      >, an upscale mountain town with a variety of restaurants, shops and art
      galleries, and hotels.
    </p>
    <p>
      North of the venue is Stanley, a tiny town sits looking right up at the
      Sawtooth Mountains. There isn't much to Stanley, just a few restaurants
      and a small grocery store but the area is home to some great hikes and
      alpine lakes.
    </p>
    <div class="cards">
      <ThingToDo
        title="Order Travel Guide"
        location="visitidaho.org"
        image="https://res.cloudinary.com/droopytersen/image/upload/c_scale,q_auto:good,w_1190/v1614559051/natanddrewsayido/things-to-do/idahoguides.jpg"
      >
        <p>
          Natalie and I ordered the print versions of some of these and really
          like them! All you have to do is provide your address and an email.
        </p>
        <p>
          Planning a vacation to Idaho couldn’t be easier with their variety of
          free travel publications and maps. You can download or order free
          printed copies of the items you want.
        </p>
        <div class="center text-center">
          <a href="https://visitidaho.org/explore-idaho/maps-and-publications/">
            Maps & Publications | Visit Idaho
          </a>
        </div>
      </ThingToDo>
      <ThingToDo
        title="Redfish Lake Shuttle"
        location="Stanley, ID"
        image="https://res.cloudinary.com/droopytersen/video/upload/e_loop/v1614557093/natanddrewsayido/things-to-do/20200724_132321.gif"
      >
        <p>
          There is a pontoon boat shuttle that takes you across Redfish Lake and
          drops your right into the thick of the the Sawtooths. Once there you
          could have yourself a picnic in the big picnic area where they drop
          you off or hike deeper into the mountains (and take the shuttle back),
          or hike your way back around the lake.
        </p>
        <p>
          It’s a gorgeous ride! There’s no hiking (and even clean flush toilets)
          if you opt to shuttle there and back.
        </p>
        <p>It's $14/person one-way or $19 round trip.</p>
        <div class="center text-center">
          <a
            href="https://l.facebook.com/l.php?u=https%3A%2F%2Fredfishlake.com%2Fmarina%2F%3Ffbclid%3DIwAR0zusi4WMtEv6VOdC4SSxlWaoI0Nh_ORffC4hNQmEh44hPsJgVIIBAVj3M&h=AT3nEAVjj_wdp4OAuG_KyZVBZF2U4jfOR626iwIRYvpPPizOY9Il4tti51-8ZfIlvVpYdDAuSpup4_-MMtiaT3hCTHjRfRwbrjmpim3i_kErTcfDDUinV7VlXiF9F2zb&__tn__=-UK-R&c[0]=AT1uJQeRrY1uEZQYyUfSHFFRHL76Tm6yd7B4XabB7hyD1WL5ywQW-T-Pslb95zfjQHMNbVrp_Hi-bpWJfXqKg6k_qm1ugcPf6qWti5_EuSvW9PW94tK6BYCiarMA9MClEBSZBVdzSbWQDP24M-v0-mIGHetBHG1bX43mUAvu0vSTLe13UOMiSS1PnyYFj3Do_LLx_QT0JGpH1I2CV5sTjdkRM-wF"
          >
            Redfish Lake Marina
          </a>
        </div>
      </ThingToDo>
      <ThingToDo
        title="Dayhike at the Venue"
        location="Central Idaho 4-H Camp"
        image="https://res.cloudinary.com/droopytersen/image/upload/q_auto:good/v1614558223/natanddrewsayido/things-to-do/venue-dayhike.jpg"
      >
        <p>The trail head for this hike is about 1/4 from the Wedding venue.</p>
        <p>
          Mill Lake is a 4 mile lightly trafficked out and back trail located
          near Ketchum, Idaho that offers the chance to see wildlife and is
          rated as moderate. The trail is primarily used for hiking and running
          and is best used from April until October. Dogs are also able to use
          this trail but must be kept on leash.
        </p>
        <div class="center text-center">
          <a
            href="https://www.alltrails.com/trail/us/idaho/mill-lake--2?fbclid=IwAR0lxNpEJft_ICAJ-AkcBiosOisO-kY4hn_2O3CL3Ec0IXnwb7cXhh85piE"
          >
            Mill Lake | All Trails
          </a>
        </div>
      </ThingToDo>
    </div>
  </div>
</main>
