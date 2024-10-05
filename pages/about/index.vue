<template>
    <div>
    
        <div class="relative">
  <!-- Background image -->
  <img src="https://storeno.b-cdn.net/stores/10-2023/1697473574336.jpeg" alt="Background" class="w-full h-[380px] object-cover" />

  <!-- Overlay Content -->
  <div class="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-40">
    <h1 class="block box-border text-white font-epilogue font-medium 
            text-[32px] leading-[48px]
            text-center mb-0 mt-0 
            p-0 decoration-white decoration-solid 
            decoration-auto transform-none 
            md:text-[38px] md:leading-[57px]  
            lg:text-[45px] lg:leading-[67.5px] mb-4">About Us</h1>

    <!-- Breadcrumb -->
    <nav class="text-sm md:text-base flex items-center space-x-2 text-white">
      <a href="#" class="hover:text-white box-border text-[rgba(255,255,255,0.47)] cursor-pointer 
           block font-epilogue font-medium 
           text-[14px] leading-[27px] 
           list-none pl-[15px] text-center 
           transition-colors duration-300 ease 
           lg:leading-[28.8px]">Home</a>
      <svg class=" text-center" xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#ff831a"><path d="m600-216-51-51 177-177H96v-72h630L549-693l51-51 264 264-264 264Z"/></svg>    
        <span class="hover:text-white  box-border text-[rgba(255,255,255,0.47)] cursor-pointer 
           block font-epilogue font-medium 
           text-[14px] leading-[27px]  
           list-none pl-[15px] text-center 
           transition-colors duration-300 ease 
           lg:leading-[28.8px]">About</span>
    </nav>
  </div>
</div>


    <sections-aboutUs></sections-aboutUs>
    <div class="bg-[#FAF7F0]">
        <sections-ourClients></sections-ourClients>
        <sections-box ></sections-box>
    </div>
    
    <sections-ourValues></sections-ourValues>
    <sections-locations></sections-locations>
    <sections-ourTeam></sections-ourTeam>
    <sections-faqs></sections-faqs>
    <nuxt/>
    </div>
    
</template>
<script></script>