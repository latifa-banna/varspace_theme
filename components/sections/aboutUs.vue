<template>
  <div class="bg-gray-100 opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in">

    <div class="md:grid md:grid-cols-2 w-full px-[20px] md:px-[40px] pb-[80px] py-[10px] md:py-[100px] md:pb-[60px] gap-x-[100px] md:gap-x-[60px] flex flex-wrap-reverse ">
      <!-- <div class="flex flex-wrap content-start 
            bg-[url('https://askproject.net/varspace/wp-content/uploads/sites/142/2023/05/business-people-at-work-in-a-busy-luxury-office-sp-PCLB9R3.jpg')] 
            bg-center bg-cover 
            box-border 
            text-[rgb(122,122,122)] 
            font-Inter 
            text-base 
            normal-case 
            font-normal 
            h-[681.9px] 
            leading-[28.8px] 
            mb-0 
            ml-0 
            mr-12 
            mt-0 
            p-0 
            relative 
            text-size-adjust-[100%] 
            transition-all 
            duration-300 
            ease-in-out 
            w-[577.2px]">
        
      </div> -->
     <img :src="section.image ? section.image.src : ''" 
    class="lg:h-[700px] md:w-[990px] md:h-[100%] w-[100%] h-full"
     />
     <!-- <div :style="backgroundStyle" class="background-container"></div> -->

     <div class="w-[98%] pb-[55px] ">
       <h3 class="pt-[55px] md:pt-[30px]  font-epilogue box-border text-[#ff831a] block font-semibold  tracking-[4px] leading-[28.8px] pb-[20px]  md:text-[15px] text-[14px] uppercase">{{ section.text }}</h3>
       <h1 class=" w-[98%] box-border text-black block font-[Epilogue] text[32px] lg:text-[45px] md:text[38px] font-medium  lg:leading-[67.5px] md:leading-[44px]  text-decoration-none  ">{{ section.title }}</h1>
       <p class=" w-[98%] pt-[20px]  box-border text-[#7a7a7a] block font-[Inter]  normal-case font-normal  leading-[28.8px] mb-[21px]  lg:text-[16px] text-[15px] ">{{ section.description }}</p>
       <hr />
       <div class=" lg:grid lg:grid-cols-2 gap-[25px] grid-cols-1 md:gap-[15px] w-[100%] mt-[26px] mb-[40px] md:mb-[20px]">
         <div>
           <div class=" mb-[12px] box-border text-black block font-[Epilogue] text-[18px] md:text-[19px] lg:text-[21px] font-medium  leading-[28.8px]   w-[98%]">{{ section.our_vision.title }}</div>
           <p class="  box-sizing border-box
text-[#7A7A7A] block font-[Inter] lg:text-[16px] text-[15px] font-normal  leading-[28.8px] mb-[14.4px] " style="text-decoration: none; text-size-adjust: 100%; text-transform: none;
           ">{{ section.our_vision.description }}</p>
         </div>

         <div class=" mb-[20px]  box-border text-[#7A7A7A] font-[Inter] text-[16px] font-normal  leading-[28.8px] mb-0 lg:ml-[30px] md:ml-0 mr-0 mt-0 p-0 relative w-[98%]">
           <div class="box-border text-black block font-[Epilogue] text-[18px] md:text-[19px] lg:text-[21px] font-medium  leading-[31.5px] mb-[12px] lg:mb-[12px] mt-0 me-0 ms-0 w-[98%]">{{ section.our_mission.title }}</div>
           <ul v-for="item in section.our_mission.items" class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" height="10px" viewBox="0 -960 960 960" width="10px" fill="#ff831a"><path d="M480.28-96Q401-96 331-126t-122.5-82.5Q156-261 126-330.96t-30-149.5Q96-560 126-629.5q30-69.5 82.5-122T330.96-834q69.96-30 149.5-30t149.04 30q69.5 30 122 82.5T834-629.28q30 69.73 30 149Q864-401 834-331t-82.5 122.5Q699-156 629.28-126q-69.73 30-149 30Zm-.28-72q130 0 221-91t91-221q0-130-91-221t-221-91q-130 0-221 91t-91 221q0 130 91 221t221 91Zm0 0q-130 0-221-91t-91-221q0-130 91-221t221-91q130 0 221 91t91 221q0 130-91 221t-221 91Z"/></svg>
             <li class=" lg:text-[16px] text-[15px] text-[rgb(122, 122, 122)] leading-[28.8px] pl-[10px]">{{ item }}</li>
           </ul>
         </div>
       </div>

       <div>
         <nuxt-link :to="section.url" class="bg-black hover:bg-[#ff831a] text-white  inline-block font-epilogue text-[14px] font-semibold  leading-[14px] pb-[16px] pl-[32px] pr-[32px] pt-[16px] text-center no-underline transition-all duration-300 ease-in-out ">{{ section.text_url }}</nuxt-link>
       </div>
     </div>
   </div>
  </div>

</template>
<script>
export default{
    data(){
        return{
            section: this.$settings.sections.about,

        }
    },
    computed: {
    backgroundStyle() {
      return {
        backgroundImage: this.section.image ? `url(${this.section.image.src})` : 'none',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '400px', // Adjust height as necessary
        width: '100%', // Adjust width as necessary
      }
    }
  }
}
</script>

<style>
.About_us {
 display: grid;
 grid-template-columns: auto auto;
 margin: 120px 120px 200px 120px;
 column-gap: 110px;
}
.About_us img {
 height: 850px;
 width: 990px;
}
.About_us .about_first_h3 {
 margin-top: 80px;
 color: rgb(218, 144, 8);
 font-size: 20px;
 font-family: Epilogue, Sans-serif;
}
.About_us .about_title {
 font-size: 50px;
 width: 70%;
}
.About_us .about_desc {
 width: 90%;
 font-size: 18px;
 color: #636161;
 margin-top: 40px;
 margin-bottom: 30px;
}
.About_us a {
 background-color: black;
 color: white;
 text-decoration: none; /* Remove the underline on the link */
 padding: 15px 40px; /* Adjust padding as needed */
 border: 2px solid black; /* Add a white border */
 height: 55px;
}

.About_us .vision_mission {
 display: grid;
 grid-template-columns: auto auto;
 column-gap: 50px;
 width: 85%;
 margin-top: 30px;
 margin-bottom: 80px;
}
.About_us .vision_mission h3 {
 font-size: 25px;
 margin-bottom: 20px;
}


.vision_mission p,
.vision_mission li {
 font-size: 18px;
 color: #636161;
 line-height: 35px;
}
.vision_mission li {
 line-height: 45px;
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