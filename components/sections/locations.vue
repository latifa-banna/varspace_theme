<template>
     <div class="our_location">
      <div class="our_location_first_div">
        <div>OUR LOCATIONS</div>
        <h1>{{ $settings.location.title }}</h1>
        <p>{{ $settings.location.des }}</p>
      </div>

      <div class="our_location_second_div">
        <div>
          <ol v-for="item in $settings.location.item">
            <li>{{ item }}</li>
          </ol>
        </div>
        <div>
          <img
            :src="
              $settings.location.image1 ? $settings.location.image1.src : ''
            "
            alt=""
          />
          <img
            :src="
              $settings.location.image2 ? $settings.location.image2.src : ''
            "
            alt=""
            class="image_move"
          />
        </div>
      </div>
      <nuxt-link to="#">Browse Spaces</nuxt-link>
    </div>
</template>
<script></script>
<style scoped>
.our_location {
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #ccc;
}
.our_location .our_location_first_div div {
  color: rgb(218, 144, 8);
  font-size: 20px;

  font-family: "Epilogue", Sans-serif;
}
.our_location .our_location_first_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 140px;
  line-height: 70px;
}
.our_location .our_location_first_div h1 {
  color: #000000;
  font-size: 40px;
  width: 40%;
  text-align: center;
}
.our_location .our_location_first_div p {
  font-size: 18px;
  padding: 20px;
  color: #636161;
}
.our_location .our_location_second_div {
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 160px;
}
.our_location .our_location_second_div li {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
  font-size: 60px;
  line-height: 120px;
}
.our_location .our_location_second_div img {
  width: 500px;
  height: 800px;
}
.our_location .our_location_second_div .image_move {
  position: absolute;
  top: 10670px;
  right: 580px;
}
.our_location_second_div div:first-child {
  width: 800px;
  /* background-color: #000000; */
}
.our_location a {
  background-color: black;
  color: white;
  text-decoration: none;
  padding: 15px 40px;
  border: 2px solid black;
  height: 55px;
  margin-top: 40px;
  /* display: flex;
  justify-content: center; */
}
</style>