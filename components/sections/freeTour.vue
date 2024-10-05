<template>
  <div class="">
    <div
      class="relative w-full h-[90%] bg-gray-300 px[20px] py-[120px] md:px-[80px]"
      :style="backgroundStyle"
    >
      <!-- Content goes here -->
      <div class="w-full flex flex-col justify-center text-center md:flex-none md:text-left">
        <div
          class="pt-[55px] md:pt-[30px] font-epilogue box-border text-[#ff831a] block font-semibold tracking-[4px] leading-[28.8px] pb-[20px] md:text-[15px] text-[14px] uppercase"
        >
          {{ section.text }}
        </div>
        <div class="flex flex-col md:flex-row md:justify-between justify-center items-center ">
          <h1 class="w-[90%] md:w-[80%] box-border  text-white block font-[Epilogue] text[32px] md:text[38px] lg:text-[45px] font-medium leading-[48px] md:leading-[57px] lg:leading-[67.5px] text-decoration-none">
            {{ section.title }}
          </h1>

          <nuxt-link to="#" class="rounded-full bg-white mt-6 md:m-0 p-4 w-20 md:w-auto">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40px"
              viewBox="0 -960 960 960"
              width="40px"
              fill="#000000"
            >
              <path d="M320-202v-560l440 280-440 280Z" />
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$settings.sections.free_tour,
      imageSrc:
        "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/hub_workdeskposture_article.ashx?mw=1382&hash=A163CE470A78F0217003C164A6723870",
      imageUrl:
        "https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/hub_workdeskposture_article.ashx?mw=1382&hash=A163CE470A78F0217003C164A6723870",
    };
  },
  computed: {
    backgroundStyle() {
      return {
        backgroundImage: `url(${this.imageUrl})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };
    },
  },
};
</script>
<style scoped>
.free_tour {
  background-color: #ccc;

  background-image: url("https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/hub_workdeskposture_article.ashx?mw=1382&hash=A163CE470A78F0217003C164A6723870");

  /* Create a parallax effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
