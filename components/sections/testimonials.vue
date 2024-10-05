<template>
  <div class="testimonials  px-[20px] md:px-[40px] pb-[50px] py-[90px] md:pb-[50px]">
  
      <div class="w-full  pb-[25px] md:pb-[85px]  text-center md:flex flex-col justify-center items-center">
        <div class="font-epilogue box-border text-[#ff831a] block font-semibold tracking-[4px] leading-[28.8px] pb-[20px] text-[14px] md:text-[15px] uppercase">{{ section.text }}</div>
        <h1 class="w-[98%] lg:w-[44%]  box-border text-black block font-epilogue text-[32px] md:text-[38px] lg:text-[45px] font-medium lg:leading-[67.5px] md:leading-[44px] text-decoration-none">{{ section.title }}</h1>
      </div>
   
      <div class="w-full">
    <div class="  md:px-6 mx-4 md:mx-8 ">
      <carousel
        :perPage="perPage"
        :navigationEnabled="true"
        :paginationEnabled="false"
        :scrollPerPage="true"
        :autoplay="true"
        :autoplayTimeout="5000"
        :autoplayHoverPause="true"
        :mouseDrag="true"
        :touchDrag="true"
        :loop="true"
      >
        <slide v-for="(item, index) in section.items" :key="index" class="w-full box-border h-full ">
          <div class="p-4 w-[100%]  bg-[#f5f6f7] rounded-none shadow-[0px_4px_10px_0px_rgba(0,0,0,0)] box-border text-[#7a7a7a] block font-inter text-base font-normal leading-[28.8px] list-none  relative text-left transition-all duration-400 ease-linear z-[1]">
            <div
              :class="
                item.star === '5'
                  ? 'five_star'
                  : item.star === '4'
                  ? 'four_star'
                  : item.star === '3'
                  ? 'three_star'
                  : item.star === '2'
                  ? 'two_star'
                  : item.star === '1'
                  ? 'one_star'
                  : item.star === '0'
                  ? 'zero_star'
                  : ''
              "
            >
              <!-- icon star -->
            </div>
            <div class="box-border text-[#7a7a7a] block font-inter text-[15px] md:text-base font-normal leading-[27px] md:leading-[28.8px] list-none text-left transition-all duration-400 ease-linear py-6">{{ item.comment }}</div>
            <div class="flex  ">
              <img v-if="item.image && item.image.src" :src="item.image.src" :alt="item.name" class="w-[70px] h-[70px] rounded-full">
              <div class="grid grid-cols-1 ml-4">
                <h3 class="box-border text-black block font-epilogue text-[15px] md:text-[16px] font-medium leading-[22.5px] md:leading-6 list-none mb-0 text-left transition-color duration-300 ease-linear ">{{ item.name }}</h3>
                <div class="box-border text-[#7a7a7a] inline font-epilogue text-sm font-medium leading-[27px] md:leading-[28.8px] list-none text-left w-auto">{{ item.fonction }}</div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$settings.sections.testimonials,
      perPage: this.getPerPageValue(), 
    };
  },
  mounted() {
   
    this.updateCarousel(); // Set initial perPage on mount
    window.addEventListener('resize', this.updateCarousel);
  },
  methods: {
 
    getPerPageValue() {
      if (typeof window !== 'undefined') { // Check if window is defined
        console.log("Window width:", window.innerWidth); // Debugging
        if (window.innerWidth >= 1200) {
          return 3; // Large screens
        } else if (window.innerWidth >= 768) {
          return 2; // Medium screens
        } else {
          return 1; // Small screens
        }
      }
      return 1; // Fallback value for SSR
    },
    updateCarousel() {
      const newPerPage = this.getPerPageValue();
      console.log("Updating perPage to:", newPerPage); // Debugging
      this.perPage = newPerPage;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.updateCarousel);  }
}

</script>
<style>





  /* .testimonials .second_div{
    display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 100px;
  } */
 
  
  /* ---------------------------------- */
  /* CSS for star ratings */
.five_star::before {
  content: '★★★★★'; /* Unicode stars (★) for 5 stars */
  color: #FFD700; /* Yellow color for 5 stars */
}

.four_star::before {
  content: '★★★★☆'; /* Unicode stars (★) for 4 stars, and half star (☆) for the fifth star */
  color: #FFD700; /* Yellow color for 4 stars */
}

/* Add similar classes for 3, 2, 1, and 0 stars */
.three_star::before{
  content: '★★★☆☆'; /* Unicode stars (★) for 4 stars, and half star (☆) for the fifth star */
  color: #FFD700;
}
.two_star::before{
  content: '★★☆☆☆'; /* Unicode stars (★) for 4 stars, and half star (☆) for the fifth star */
  color: #FFD700;
}
.one_star::before{
  content: '★☆☆☆☆'; /* Unicode stars (★) for 4 stars, and half star (☆) for the fifth star */
  color: #FFD700;
}
.zero_star::before{
  content: '☆☆☆☆☆'; /* Unicode stars (★) for 4 stars, and half star (☆) for the fifth star */
  color: #FFD700;
}
</style>
