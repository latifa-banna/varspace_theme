<template>
  <div>
  
    <div class=" md:grid md:grid-cols-2 w-full px-[20px] md:px-[40px] pb-[80px]  md:py-[95px] md:pb-[70px] gap-x-[100px] md:gap-x-[60px] flex flex-wrap opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in ">
      <div >
        <div class="pt-[55px] md:pt-[30px]  font-epilogue box-border text-[#ff831a] block font-semibold  tracking-[4px] leading-[28.8px] pb-[20px]  md:text-[15px] text-[14px] uppercase">{{ section.text }}</div>
        <h1 class="w-[98%] box-border text-black block font-[Epilogue] text[32px]  md:text[38px] lg:text-[45px] font-medium  lg:leading-[67.5px] md:leading-[44px]  text-decoration-none">{{ section.title }}</h1>
        <p class="w-[98%] pt-[20px]  box-border text-[#7a7a7a] block font-[Inter]  normal-case font-normal  leading-[28.8px]   lg:text-[16px] text-[15px]">{{ section.description }}</p>
        <hr class="mt-[40px] mb-[46px]"/>
        <div class=" grid grid-cols-[auto_auto_auto] gap-x-8 gap-y-8  mb-[61px] ">
          <img
            v-for="image in section.left.images"
            :src="image ?image.src:' '"
            alt=""
            class="w-[200px] h-[80px]"
          />
        </div>

        <nuxt-link :to="section.left.url" class=" mb-11 md:m-0  bg-black hover:bg-[#ff831a] text-white  inline-block font-epilogue text-[14px] font-semibold  leading-[14px] pb-[16px] pl-[32px] pr-[32px] pt-[16px] text-center no-underline transition-all duration-300 ease-in-out ">{{ section.left.text_url }}</nuxt-link>
      </div>
      <div class="relative p-2 md:flex-none flex">
  <img :src="section.right.image ? section.right.image.src : ''" alt="" class="max-w-full h-[60vh]   md:h-[100%]    md:w-full flex" />
  
  <div class="bg-white absolute bottom-8 left-1/2 transform -translate-x-1/2 w-[90%]  p-6 flex flex-col">
    <div class="block text-black font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] mb-0 mt-0 p-0">{{ section.right.text }}</div>
    <p class="block text-[#7a7a7a] font-inter text-[15px] lg:text-[16px] font-normal leading-[27px] lg:leading-[28.8px] mb-[14.4px] mt-0">{{ section.right.description }}</p>
  </div>
</div>



      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
        return {
            section: this.$settings.sections.clients,
            

        }
    },
    mounted(){
      // console.log("clients : "+this.$settings.sections.clients.title)
    }
}
</script>
<style scoped>



.our_clients_right img {
  height: 900px;
  /* position: relative; */
}
.our_clients_right .text {
  background-color: #ffffff;
  position: absolute;
  bottom: 0; /* Adjust this value as needed */
  width: 35%;
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