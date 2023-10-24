<template>
      <div class="facilities">
      <div>
        <div>{{ $settings.facilitie_text }}</div>
        <h1>{{ $settings.facilitie_title }}</h1>
        <p>{{ $settings.description_facilitie }}</p>
      </div>

      <div class="facilities-links">
        <nuxt-link to="">{{ $settings.Spacious_Parking }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Meeting_Room }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Equipped_Kitchen }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Business_Printer }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Book_Library }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Fast_Wifi }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Console }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Locker_Room }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Refreshment }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Onsite_Staff }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Full_AC_Room }}</nuxt-link>
        <nuxt-link to="">{{ $settings.Mini_Theatre }}</nuxt-link>
      </div>

      <nuxt-link :to="$settings.last_url_facilitie" class="facilities-last-link">{{ $settings.last_url_text_facilitie }}</nuxt-link>
    </div>
</template>
<script></script>
<style scoped>
.facilities {
  margin: 20px 120px 80px 120px;
  padding: 40px 0px;
  text-align: center;
  /* position: relative;
  top: 60px; */
}
.facilities > div:first-child {
  text-align: center;
  padding: 70px;
}
.facilities > div:first-child div {
  /* margin: 200px 0px 20px 100px; */
  color: rgb(218, 144, 8);
  font-size: 20px;
  /* font-family: normal;
    font-family: 'Epilogue'; */
  font-family: "Epilogue", Sans-serif;
}
.facilities > div:first-child h1 {
  font-size: 52px;
  padding: 20px;
}
.facilities > div:first-child p {
  color: #7d7d7d;
  font-size: large;
  width: 55%;
  margin-left: 23%;
}
.facilities-links {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  column-gap: 20px;
  row-gap: 20px;
  margin-bottom: 90px;
}
.facilities-links a {
  width: 300px;
  text-align: left;

  background-color: #ffffff;
  color: #000000;
  font-size: x-large;
  padding: 25px 20px 25px 60px;

  background-color: white;
  border: 1px solid #f5f4f4; /* Add a border for better visibility */
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Adjust the shadow values as needed */
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
}

.facilities-last-link {
  background-color: black;
  color: white;
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  border: 2px solid black; /* Add a white border */
  height: 55px;
}
</style>