<template>
  <div>
    <div class="our_clients">
      <div class="our_clients_left">
        <div>OUR CLIENTS</div>
        <h1>{{ $settings.client.title }}</h1>
        <p>{{ $settings.client.des }}</p>
        <hr />
        <div class="our_clients_images_left">
          <img
            v-for="image in $settings.client.images"
            :src="image.src"
            alt=""
          />
        </div>

        <nuxt-link :to="$settings.client.url">Book a Space</nuxt-link>
      </div>
      <div class="our_clients_right">
        <img :src="$settings.client.right.image.src" alt="" />
        <div class="text">
          <div>{{ $settings.client.right.text }}</div>
          <p>{{ $settings.client.right.desPlace }}</p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>
<script>
</script>
<style scoped>
.our_clients {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 100px;
  margin-top: 200px;
  margin-left: 200px;
  margin-right: 200px;
}
.our_clients_images_left {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 40px;
  row-gap: 40px;
  margin-bottom: 120px;
  margin-top: 80px;
}
.our_clients_images_left img {
  width: 200px;
  height: 80px;
}
.our_clients a {
  background-color: black;
  color: white;
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  border: 2px solid black; /* Add a white border */
  height: 55px;
}
.our_clients_right img {
  height: 900px;
}
.our_clients_right .text {
  background-color: #ffffff;
  position: relative;
  bottom: 550px;
  margin: 40px;
  padding: 40px;
}
.our_clients_right .text div {
  font-size: 30px;
  padding: 20px;
}
.our_clients_right .text p {
  font-size: 18px;
  padding: 20px;
  color: #636161;
}
.our_clients_left h1 {
  font-size: 50px;
  width: 70%;
}
.our_clients_left p {
  width: 90%;
  font-size: 18px;
  color: #636161;
  margin-top: 40px;
  margin-bottom: 30px;
}

.our_clients_left > div {
  margin-top: 20px;
  color: rgb(218, 144, 8);
  font-size: 20px;
  /* font-family: normal;
    font-family: 'Epilogue'; */
  font-family: "Epilogue", Sans-serif;
}
</style>