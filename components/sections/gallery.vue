<!-- <template>
     <div class="bg-black pb-[100px]">
      <div class="flex flex-col justify-center items-center pt-20 pb-20 ">
        <div class="pt-[55px] md:pt-[30px]  font-epilogue box-border text-[#ff831a] block font-semibold  tracking-[4px] leading-[28.8px] pb-[20px]  md:text-[15px] text-[14px] uppercase">{{ section.text }}</div>
        <h1 class="w-[98%] box-border text-white text-center block font-[Epilogue] text[32px] lg:text-[45px] md:text[38px] font-medium  leading-[48px] md:leading-[57px] lg:leading-[67.5px]  text-decoration-none">{{ section.title }}</h1>
      </div>
      <div class=" grid grid-rows-2 grid-cols-2 md:grid-cols-3 gap-5">
        <div v-for="image in section.images">
          <img :src="image ?image.src:' '" alt="" class="w-[100%] h-[100%] object-cover" />
        </div>
      </div>



      
      <carousel  
                :perPageCustom="[[240, 1], [480, 2], [768, 3]]"
                :autoplay="true"
                :autoplayTimeout="8000"
                :autoplayHoverPause="true"
                :navigationEnabled="true"
                :paginationEnabled="false"
                >

                <slide v-for="image in section.images ">
                  <img :src="image ?image.src:' '" alt="" class="w-[100%] h-[100%] object-cover" />
                </slide>

            </carousel>

     
    </div>
</template>
<script>

export default {

  data() {
    
        return {
            section: this.$settings.sections.gallery,
            

        }
    },
    mounted(){
      // console.log("clients : "+this.$settings.sections.clients.title)
    }
}
</script>
<style>


</style> -->



<template>
  <div class="bg-black pb-[100px] ">
    <div class="flex flex-col justify-center items-center pt-20 pb-20">
      <div class="pt-[55px] md:pt-[30px] font-epilogue text-[#ff831a] font-semibold tracking-[4px] leading-[28.8px]  pb-[20px] md:text-[15px] text-[14px] uppercase">
        {{ section.text }}
      </div>
      <h1 class="w-[98%] text-white text-center font-[Epilogue] text-[32px] lg:text-[45px] md:text-[38px] font-medium leading-[48px] md:leading-[57px] lg:leading-[67.5px]">
        {{ section.title }}
      </h1>
    </div>

    <div class="grid grid-rows-2 grid-cols-1 gap-5">
      <div class="carousel-container">
        <carousel
          :perPageCustom="[[240, 1], [480, 2], [768, 3]]"
          :autoplay="true"
          :autoplayTimeout="1000"
          :autoplayHoverPause="true"
          :navigationEnabled="true"
          :paginationEnabled="false"
        >
          <slide v-for="(image, index) in imagesFirstField" :key="index">
            <img :src="image.src" alt="" class="w-full h-full object-cover" />
          </slide>
        </carousel>
      </div>

      <div class="carousel-container">
        <carousel
          :perPageCustom="[[240, 1], [480, 2], [768, 3]]"
          :autoplay="true"
          :autoplayTimeout="1000"
          :autoplayHoverPause="true"
          :navigationEnabled="true"
          :paginationEnabled="false"
        >
          <slide v-for="(image, index) in imagesFirstField" :key="index">
            <img :src="image.src" alt="" class="w-full h-full object-cover" />
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
      section: this.$settings.sections.gallery,
    };
  },
  computed: {
    imagesArray() {
      return Array.isArray(this.section.images)
        ? this.section.images
        : Object.values(this.section.images);
    },
    imagesFirstField() {
      return this.imagesArray.slice(0, 5);
    },
    imagesSecondField() {
      return this.imagesArray.slice(5, 10);
    },
  },
  mounted() {
    console.log('Gallery Images:', this.section.images);
  },
};
</script>

<style>
/* Add your styles here if needed */
</style>


