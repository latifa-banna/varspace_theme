<template>
    <div class="py-[70px] px-[30px] bg-[#FAF7F0]">
      <div class="w-full pb-[25px] md:pb-[85px] text-center md:flex flex-col md:justify-center md:items-center">
        <div class="font-epilogue box-border text-[#ff831a] block font-semibold tracking-[4px] leading-[28.8px] pb-[20px] text-[14px] md:text-[15px] uppercase">{{ $settings.sections.faqs.text }}</div>
        <h1 class="w-[98%] lg:w-[60%] box-border text-black block font-epilogue text-[32px] md:text-[38px] lg:text-[45px] font-medium lg:leading-[67.5px] md:leading-[44px] text-decoration-none">{{ $settings.sections.faqs.title }}</h1>
      </div>
  
     
  
      <div class="faq-accordion w-[98%] lg:w-[80%]">
        <div v-for="(faq, index) in $settings.sections.faqs.items" :key="index" class="  bg-white 
            shadow-none box-border text-black cursor-pointer
            font-epilogue 
            lg:text-[18px] lg:leading-[28.8px] lg:py-[30px] 
            md:text-[17px] md:leading-[27.2px]  md:py-[30px] md:px-[40px]
            sm:text-[16px] sm:leading-[25.6px]  py-[20px] px-[26px] 
            transition-all duration-400 ease-in-out mb-[1.5px] ">
          <div 
            class="faq-question cursor-pointer flex justify-between items-center "
            @click="toggleFAQ(index)"
          >
            <span class="font-medium">{{ faq.question }}</span>
            <span class="ml-2">
                <div v-if="isOpen(index)" class="bg-black p-2 rounded-full ">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff831a">
                <path d="M200-440v-80h560v80H200Z"/>
              </svg>
                </div>
           <div v-else class="bg-gray-100 p-2 rounded-full">
            <svg  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff831a">
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
              </svg>
           </div>
             
            </span>
          </div>
          <transition name="fade" class=" ">
            <div v-show="isOpen(index)" class="faq-answer py-2 pt-6 block box-border text-[#7A7A7A] font-inter 
            lg:text-[16px] lg:leading-[28.8px] lg:h-[86.4px] 
            lg:font-normal lg:mb-0 lg:mt-0 
            lg:decoration-[#7A7A7A] lg:decoration-solid 
            lg:decoration-auto lg:transform-none 
            text-[15px] leading-[27px] h-[81px] font-normal mb-0 mt-0 
            decoration-[#7A7A7A] decoration-solid 
            decoration-auto transform-none">
              {{ faq.description }}
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        openIndex: null, // To track which FAQ is open
      };
    },
    methods: {
      toggleFAQ(index) {
        this.openIndex = this.openIndex === index ? null : index;
      },
      isOpen(index) {
        return this.openIndex === index;
      }
    }
  };
  </script>
  
  <style scoped>
  .faq-accordion {
    margin: 0 auto;
    overflow: hidden; /* For rounded corners */
  }
  
  .faq-question {
  }
  
  .faq-answer {
    background: #fff; /* Example background for answer */
    transition: max-height 0.3s ease, opacity 0.3s ease;
    overflow: hidden; /* Hide overflowing content */
  }
  
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease, max-height 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
    max-height: 0; /* Start and end with height of 0 */
  }
  .fade-enter-to, .fade-leave {
    opacity: 1;
    max-height: 150px; /* Set this to an appropriate value based on your content */
  }
  </style>
  