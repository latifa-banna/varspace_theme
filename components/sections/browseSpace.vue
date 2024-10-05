<template>
    <div class="px-[20px] lg:px-[40px] pt-[100px] pb-[55px] opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in">
      <div class="">
        <div class=" text-[14px] md:text-[15px] text-[rgb(255,131,26)] block font-epilogue font-semibold	leading-[28.8px] pb-[14.4px] mt-0 mr-0 uppercase tracking-[4px] box-border not-italic">{{ section.text }}</div>
        <h1 class="box-border  w-[100%]  text-[32px] lg:w-[43%] text-black block font-epilogue md:text-[37px] md:w-[72%] lg:text-[45px] font-medium  md:leading-[67.5px] m-0 p-0 no-underline pb-[14.4px]">{{ section.title }}</h1>
      </div>
      <div class="grid sm:grid-cols-1 md:grid-cols-2 mt-8 lg:grid-cols-4">
        <div v-for="space in section.items" :key="space.title" class="mt-0 pt-0 my-[60px] mr-[20px] md:mx-[20px]">
          <div class="text-[#7a7a7a] block font-epilogue text-[16px] font-normal mb-2 md:mb-6 ml-0 mr-0 text-left">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-armchair"><path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"/><path d="M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V11a2 2 0 0 0-4 0z"/><path d="M5 18v2"/><path d="M19 18v2"/></svg>

          </div>
          <h3 class="box-border text-black block font-epilogue text-[21px] font-medium h-[31.5px] leading-[31.5px] mb-[5px] mt-0"> 
            <span class="box-border text-black inline font-epilogue text-[18px] md:text-[21px] font-medium leading-[31.5px] text-left">{{ space.title }}</span></h3>
          <p class=" box-border text-[#7A7A7A] block font-inter text-[15px] md:text-[16px] font-normal leading-[28.8px]  mx-0 text-left  md:mb-[25px] mb-2">{{ space.description }}</p>
          <nuxt-link :to="space.url"
          class="bg-transparent border-b border-l border-r border-t border-[#0000001a] 
               rounded-tl-[30px] rounded-tr-[30px] rounded-bl-[30px] rounded-br-[30px] 
                border-[1.6px] shadow-none box-border 
               text-[#000000] cursor-pointer inline-block 
               font-Epilogue text-[14px] font-medium 
               leading-[28.8px]  px-[20px] py-2 
               text-center decoration-none 
               transition-all duration-300 ease-in-out
               
              
               ">
          
          <div class="flex justify-center items-center">
            
            <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg> -->
<div>


<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z" fill="black"/>
</svg>
</div>
<p class=" pl-[4px] text-[14px] md:text-[15px] font-medium leading-[28.8px] text-center  text-black transition-all duration-100 ease-in-out">{{ space.space }}</p>

          </div>
        </nuxt-link> 
        </div>
      </div>
      
    </div>
  </template>
  <script>
  export default{
    data(){
        return{
            section: this.$settings.sections.spaces,
        }
    }
  }
  </script>
  <style scoped>

  .browse-more .browse-spaces {
    display: grid;
    grid-template-columns: auto auto auto auto;
  }
  .browse-more .browse-spaces div {
    margin-top: 0px;
    padding-top: 0px;
  
    margin: 60px 20px;
  }
  .browse-more .browse-spaces div h2 {
    font-size: x-large;
  }
  .browse-more .browse-spaces div p {
    font-size: 20px;
    color: #636161;
    margin: 25px 0px;
  }
  .browse-more .browse-spaces div p:last-child {
    border: thistle solid 1px;
    font-size: 18px;
    text-align: center;
    width: 60%;
    margin-top: 10px;
    padding: 10px 20px;
    border-radius: 30px;
    color: #000000;
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
  