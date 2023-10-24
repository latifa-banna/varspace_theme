<template>
    <div class="Our_Spaces">
      <div>OUR SPACES</div>
      <div class="spaces_title_link">
        <h3>{{ $settings.our_spaces_title }}</h3>
        <nuxt-link to="#">Browser All</nuxt-link>
      </div>
      <div class="card_container">
        <div v-for="res in result" :key="res.name" class="card">
          <img :src="res.images[0].src" class="card-image" />
          <div class="card-content">
            <p>New York, NY</p>
            <div>
              <h1>{{ res.name }}</h1>
              <p>1 Person only</p>
            </div>
            <p class="last-p">{{ res.description }}</p>
            <nuxt-link to="#">Book Now </nuxt-link>

            <!-- <font-awesome-icon icon="fa-solid fa-coffee" /> -->

            <!-- Add other content here if needed -->
          </div>
        </div>
        <br /><br />
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
    
    
      product: [],
    
      result: null,
    };
  },
  async mounted() {
    
   

    const response = await this.$storeino.products.search();
    this.result = response.data.results;

   

  },

 
};
</script>
<style scoped>



.Our_Spaces > div:first-child {
  margin: 200px 0px 20px 100px;
  color: rgb(218, 144, 8);
  font-size: 20px;
  /* font-family: normal;
    font-family: 'Epilogue'; */
  font-family: "Epilogue", Sans-serif;
}
.Our_Spaces .spaces_title_link {
  display: flex;
  justify-content: space-between;
  margin: 0px 90px;
}
.Our_Spaces .spaces_title_link h3 {
  font-size: 50px;
  width: 40%;
}
.Our_Spaces .spaces_title_link a {
  background-color: black;
  color: white;
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  border: 2px solid black; /* Add a white border */
  height: 55px;
}
.card_container {
  display: grid;
  column-gap: 40px;
  grid-template-columns: auto auto;
  margin: 100px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  /* width: 100%; */
}
.card {
  width: 100%;
}

.card-image {
  max-width: 100%;
  height: auto;
}

.card-content {
  /* padding: 10px; */
}

h1 {
  font-size: 18px;
  margin: 0;
}

/* Additional styling can be added as needed */
.card-content > p:first-child {
  margin: 30px 40px;
  font-size: 20px;
}
.card-content div {
  display: flex;
  justify-content: space-between;

  margin: 0px 50px 20px 40px;
}
.card-content div p {
  font-size: 20px;
  border: #000000 solid 1px;
  background-color: #000000;
  color: #ffffff;
  border-radius: 40px;
  padding: 15px 25px;
}
.card-content div h1 {
  font-size: xx-large;
  font-weight: bold;
}
.card-content .last-p {
  margin: 0px 0px 20px 40px;
  color: #636161;
}

.card-content a {
  margin: 0px 0px 60px 40px;
  font-weight: bold;
  padding-bottom: 60px;
}
</style>