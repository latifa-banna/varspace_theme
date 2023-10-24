<template>
     <div class="About_us">
      <img :src="$settings.about.image ? $settings.about.image.src : ''" />
      <div>
        <h3 class="about_first_h3">{{ $settings.about.text }}</h3>
        <h1 class="about_title">{{ $settings.about.title }}</h1>
        <p class="about_desc">{{ $settings.about.des }}</p>
        <hr />
        <div class="vision_mission">
          <div>
            <h3>{{ $settings.about.our_vision.title }}</h3>
            <p>{{ $settings.about.our_vision.des }}</p>
          </div>

          <div>
            <h3>{{ $settings.about.our_Mission.title }}</h3>
            <ul v-for="item in $settings.about.our_Mission.items">
              <li>{{ item }}</li>
            </ul>
          </div>
        </div>

        <div>
          <nuxt-link :to="$settings.about.url">Learn More</nuxt-link>
        </div>
      </div>
    </div>
</template>
<script>

</script>
<style>
.About_us {
  display: grid;
  grid-template-columns: auto auto;
  margin: 120px 120px 200px 200px;
  column-gap: 110px;
}
.About_us img {
  height: 900px;
  width: 900px;
}
.About_us .about_first_h3 {
  margin-top: 80px;
  color: rgb(218, 144, 8);
  font-size: 20px;
  /* font-family: normal;
    font-family: 'Epilogue'; */
  font-family: normal, Sans-serif;
}
.About_us .about_title {
  font-size: 50px;
  width: 70%;
}
.About_us .about_desc {
  width: 90%;
  font-size: 18px;
  color: #636161;
  margin-top: 40px;
  margin-bottom: 30px;
}
.About_us a {
  background-color: black;
  color: white;
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  border: 2px solid black; /* Add a white border */
  height: 55px;
}

.About_us .vision_mission {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 50px;
  width: 85%;
  margin-top: 30px;
  margin-bottom: 80px;
}
.About_us .vision_mission h3 {
  font-size: 25px;
  margin-bottom: 20px;
}


.vision_mission p,
.vision_mission li {
  font-size: 18px;
  color: #636161;
  line-height: 35px;
}
.vision_mission li {
  line-height: 45px;
}
</style>