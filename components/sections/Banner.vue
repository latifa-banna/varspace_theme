<template>
  <div class="w-full bg-primary text-primary relative">
    <div class="w-full bg-blue-500 relative">
      <div v-if="banner.items" class="overflow-hidden">
        <div class="w-full" v-if="lastItem">
          <div class="h-[810px] relative">
            <!-- Set parent height -->

            <!-- Image will be 80% of parent height -->
            <nuxt-img
              class="object-cover h-[100%] w-full bg-gray-200 relative"
              :src="
                lastItem.image
                  ? lastItem.image.src
                  : $store.state.defaults.sliderImage
              "
              :alt="lastItem.title"
            />
          </div>
        </div>
      </div>
      <div
        v-if="lastItem"
        class="w-full absolute top-[150px] sm:ml-[20px] md:ml-[40px] lg:ml-[84px] px-2 p-0 text-left"
      >
        <p
          class="opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in w-full text-shadow-md uppercase text-white font-semibold text-[15px] sm:text-[14px] md:text-[15px] tracking-[2px] sm:tracking-[4px]"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
        >
          {{ banner.content.text_welcome }}
        </p>
        <p
          class=" opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in text-4xl w-full text-white font-medium leading-[1.3] py-[22px] sm:text-[50px] md:text-[55px] sm:w-[600px] md:w-[700px] text-shadow-lg sm:py-[15px] font-epilogue text-left"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 1)"
        >
          {{ banner.content.title }}
        </p>
        <p
          class="opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in text-white text-shadow-md text-[16px] sm:text-[18px] w-[80%] sm:w-[70%] sm:w-[35%] font-normal normal-case leading-[1.8] font-inter"
          style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.9)"
        >
          {{ banner.content.description }}
        </p>
        
          <nuxt-link
          :to="banner.content.book_now.link"
          class="opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in  py-[14px] px-[32px]  text-[12px] mt-[-20px] bg-black text-white no-underline border-2 border-black relative top-[40px] font-epilogue text-sm font-semibold  sm:mt-[-20px] sm:top-[40px] "
        >
          {{ banner.content.book_now.text }}
        </nuxt-link>
        <nuxt-link
          :to="banner.content.get_tour.link"
          class="opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in  py-[14px] px-[32px] text-[12px] border-2 border-white text-white text-shadow-md no-underline relative top-[40px] ml-5 font-epilogue text-sm font-semibold transform-none"
        >
          {{ banner.content.get_tour.text }}
        </nuxt-link>
       
       
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timeout: null,
      lastItem: null,
      activeIndex: 0,
      banner: this.$settings.sections.banner,
    };
  },

  mounted() {
    this.animate();
    console.log("banner ", this.banner);
    this.banner = this.$settings.sections.banner;
    if (!this.banner.items) {
      console.error("Banner items are not available");
    }
  },
  methods: {
    animate(index = null) {
      if (!this.banner.items) return;
      if (index != null) {
        this.lastItem = this.banner.items[`item_${[this.activeIndex]}`];
        this.activeIndex = index;
        clearTimeout(this.timeout);
      } else {
        this.lastItem = this.banner.items[`item_${[this.activeIndex]}`];
        if (this.activeIndex >= Object.keys(this.banner.items).length - 1)
          this.activeIndex = -1;
        this.activeIndex++;
        this.timeout = setTimeout(() => {
          this.animate();
        }, 4500);
      }
    },
  },
};
</script>
<style>
.slider-item.last {
  position: absolute;
}
.slider-item:not(.active):not(.last) {
  position: absolute;
  top: 0;
  transform: translateX(-110%);
}
.slider-item.active {
  transform: none;
  transition: 0.5s;
}

.Get_tour {
}
/* ----------------------------------------------------------------- */
.container {
  display: flex;
  justify-content: space-between;
  margin: 0px 130px;
}

.box {
  flex: 1;
  /* background-color: white; */
  /* margin: 10px; */
  /* padding: 20px; */
  /* border: 1px solid #ccc; */
  /* height: 180px; */
  /* position: relative; */
  /* bottom: 90px; */
}
@keyframes fadeIn {
  0% {
    opacity: 0; /* Start hidden */
    transform: scale(0.95); /* Start slightly smaller */
  }
  100% {
    opacity: 1; /* Fully visible */
    transform: scale(1); /* End at normal size */
  }
}

.fade-in {
  animation: fadeIn 2s forwards; /* Animation duration */
}
</style>
