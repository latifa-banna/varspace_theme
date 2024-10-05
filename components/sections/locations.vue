<template>
  <div class="bg-gray-100 md:grid grid-cols-1 w-full px-[20px] md:px-[40px] pb-[50px] py-[55px] md:pb-[50px] md:gap-x-[60px] flex flex-wrap">
   <div class="w-full  pb-[25px] md:pb-[85px]  text-left md:text-center md:flex flex-col md:justify-center md:items-center ">
     <div class="font-epilogue box-border text-[#ff831a] block font-semibold tracking-[4px] leading-[28.8px] pb-[20px] text-[14px] md:text-[15px] uppercase">OUR LOCATIONS</div>
     <h1 class="w-[98%] lg:w-[60%]  box-border text-black block font-epilogue text-[32px] md:text-[38px] lg:text-[45px] font-medium lg:leading-[67.5px] md:leading-[44px] text-decoration-none">{{ section.title }}</h1>
     <p class="w-[98%] pt-[20px] box-border text-[#7a7a7a] block font-inter normal-case font-normal leading-[28.8px] text-[15px] lg:text-[16px]">{{ section.description }}</p>
   </div>

   <div class="flex flex-col w-full md:grid md:grid-cols-2 gap-8 md:items-center">
     <div class="order-2 md:order-1 py-8 md:py-10">
       <div v-for="(item, index) in section.links" :key="index" class=" md:mb-6">
         <nuxt-link :to="item.url" class="group">
           <div class="flex items-baseline">
             <small class="text-[18px] md:text-[19px] lg:text-[21px] w-[45px] pr-2">{{ getCounter() }}.</small>
             <span class="bg-transparent shadow-none box-border text-black cursor-pointer inline font-epilogue text-[32px] md:text-[38px] lg:text-[45px] font-medium no-underline leading-[48px] md:leading-[57px] lg:leading-[67.5px]">
               {{ item.text }}
             </span>
           </div>
         </nuxt-link>
       </div>
     </div>

     <div class="order-2 md:order-2  relative h-full pt-96 md:pt-20 md:py-10 md:p-0">
       <div class="relative w-full h-[600px]  md:h-full md:pr-0 md:mr-0">
         <img
           class=" absolute right-0 w-[75%] md:w-[70%] lg:w-[57%] h-full object-cover  shadow-lg z-10"
           :src="section.image1 ? section.image1.src : ''"
           alt="Primary Location Image"
         />
         <img
           class="absolute -top-96 md:-top-16 left-4 w-[75%] md:w-[70%] lg:w-[57%] h-full object-cover  shadow-lg z-20"
           :src="section.image1 ? section.image1.src : ''"
           alt="Secondary Location Image"
         />
       </div>
     </div>
   </div>

   <div class="flex justify-center w-full mt-10 leading-[28.8px]">
     <nuxt-link
       :to="section.url"
       class="bg-black hover:bg-[#ff831a] rounded-tl-none rounded-tr-none border-0 shadow-none box-border text-white cursor-pointer inline-block font-epilogue text-[14px] font-semibold h-[46px] leading-[14px] pb-[16px] pl-[32px] pr-[32px] pt-[16px] text-center no-underline transition-all duration-300 ease-in-out w-[171.7px]"
     >
       <span
         class="box-border text-white cursor-pointer block fill-current text-white font-epilogue text-[14px] normal-case font-medium h-[14px] leading-[14px] text-center no-underline transition-all duration-100 ease-in-out"
       >{{ section.text_url }}</span>
     </nuxt-link>
   </div>
 </div>
</template>

<script>
export default {
data() {
 return {
   counter: 0,
   section: this.$settings.sections.location,
 }
},
methods: {
 getCounter() {
   this.counter++; // Increment the counter
   return this.counter.toString().padStart(2, '0'); // Format as "01" to "05"
 },
},
}
</script>

<style scoped>
.our_location_second_div div:first-child {
width: 800px;
}
.url {
background-color: black;
color: white;
text-decoration: none;
padding: 15px 40px;
border: 2px solid black;
height: 55px;
margin-top: 40px;
}
</style>