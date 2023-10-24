<template>
     <div class="gallery">
      <div class="gallery_first_div">
        <div>GALLERY</div>
        <h1>{{ $settings.gallery.text }}</h1>
      </div>
      <div class="gallery_images">
        <div v-for="image in $settings.gallery.imagesTop">
          <img :src="image.src" alt="" />
        </div>
      </div>

      <!-- <div class="gallery_images">
        <div v-for="image in $settings.gallery.imagesDown">
          <img :src="image.src" alt="" />
        </div>
      </div> -->
    </div>
</template>
<script>
export default {
  data() {
    return {
      menu: null,
      main_image: null,
      product: [],
      params: null,
      results: null,
      result: null,
      name: null,
      imageSources: [
        this.$settings.images_head1.src,
        this.$settings.images_head2.src,
        this.$settings.images_head3.src,
        // Add more image sources as needed
      ],
      currentIndex: 0,
    };
  },
  async mounted() {
 

    // console.log("image" + this.$settings.images_head1.src);
   
    this.main_image = this.$settings.main_image;

    const response = await this.$storeino.products.search();
    this.result = response.data.results;

    // console.log(response);
    // console.log(response.data);
    // console.log(this.result);
    // console.log("description : " + this.result[0].description);

    // console.log(this.result[0].images[0].src);
    this.startImageRotation();
  },

  methods: {
    changeImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imageSources.length;
    },
    startImageRotation() {
      this.changeImage(); // Change the image immediately
      setInterval(this.changeImage, 5000); // Change the image every 10 seconds
    },
  },
};
</script>
<style>

.gallery {
  background-color: #000000;
  padding-bottom: 120px;
}

.gallery .gallery_first_div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 120px;
  padding-bottom: 120px;
  line-height: 70px;
}
.gallery .gallery_first_div div {
  color: rgb(218, 144, 8);
  font-size: 20px;

  font-family: "Epilogue", Sans-serif;
}
.gallery .gallery_first_div h1 {
  color: #ffffff;
  font-size: 40px;
  width: 30%;
  text-align: center;
}
.gallery .gallery_images {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 30px;
  row-gap: 30px;
}
</style>