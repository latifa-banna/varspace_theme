<template>
        <main>
      <img :src="imageSources[currentIndex]" />
      <div>
        <p class="text_welcome">{{ $settings.text_welcome }}</p>
        <p class="text_title">{{ $settings.text_title }}</p>
        <p class="text_small">{{ $settings.text_small }}</p>
        <nuxt-link to="#" class="book_now">Book Now!</nuxt-link>
        <nuxt-link to="#" class="Get_tour">Get a Tour </nuxt-link>
      </div>
    </main>
</template>
<script>
export default {
  data() {
    return {
      main_image: null,
      imageSources: [
        
      this.$settings.images_head1 ? this.$settings.images_head1.src:'',
      this.$settings.images_head2 ? this.$settings.images_head2.src:'',
      this.$settings.images_head3 ? this.$settings.images_head3.src:'',
        // Add more image sources as needed
      ],
      currentIndex: 0,
    };
  },
  async mounted() {
    this.main_image = this.$settings.main_image;
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
<style scoped>
main img {
  width: 100%;
}
main div {
  position: relative;
  bottom: 830px;
  margin-left: 120px;
}
main div .text_title {
  font-size: 55px;
  color: #ffffff;
  font-weight: 500;
  width: 800px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  padding: 30px 0px;
}
main div .text_welcome {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 1);
  color: #ffffff;
  font-weight: 500;
  font-size: 20px;
}
main div .text_small {
  color: #ffffff;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  font-size: 20px;
  width: 700px;
  font-family: "Epilogue";
}
main div .book_now {
  margin-top: -40px;
  font-size: 20px;
  font-weight: 400;
  background-color: black;
  color: white;
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  border: 2px solid black; /* Add a white border */
  position: relative;
  top: 70px;
}
main div .Get_tour {
  font-size: 20px;
  font-weight: 400;

  border: 2px solid white;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9);
  text-decoration: none; /* Remove the underline on the link */
  padding: 15px 40px; /* Adjust padding as needed */
  position: relative;
  top: 70px;
  margin-left: 20px;
}
</style>