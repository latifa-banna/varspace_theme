<template>
  <div class="py-[70px] px-[30px]">
   
    <div class="w-full  pb-[25px] md:pb-[85px] text-center md:flex flex-col md:justify-center md:items-center ">
     <div class="font-epilogue box-border text-[#ff831a] block font-semibold tracking-[4px] leading-[28.8px] pb-[20px] text-[14px] md:text-[15px] uppercase">{{ $settings.sections.about.our_values.top.text }}</div>
     <h1 class="w-[98%] lg:w-[60%]  box-border text-black block font-epilogue text-[32px] md:text-[38px] lg:text-[45px] font-medium lg:leading-[67.5px] md:leading-[44px] text-decoration-none">{{ $settings.sections.about.our_values.top.title }}</h1>
     <p class="w-[98%] lg:w-[55%] pt-[20px] box-border text-[#7a7a7a] block font-inter normal-case font-normal leading-[28.8px] text-[15px] lg:text-[16px]">{{ $settings.sections.about.our_values.top.description }}</p>
   </div>


   

    <!-- ---------------- -->

    <!-- Box grid -->
    <div class="max-w-7xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="item in $settings.sections.about.our_values.items" :key="item.text" class="bg-gray-100 px-6 py-14 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg">
          <div class="flex items-center gap-3  mb-4 ">
            <svg class="w-6 h-6 text-[#ff831a] " viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z" />
            </svg>
            <h3 class="font-epilogue text-xl font-medium text-black">{{ item.text }}</h3>
          </div>
          <p class="font-inter text-base text-gray-600">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutOurValues',
}
</script>

<style scoped>
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.animate-fadeIn {
  animation: fadeIn 1.25s;
}
</style>