<template>
  <div class=" opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in pb-2 px-2 ">
    <sections-box class=" relative bottom-24 "></sections-box>
    <div class="flex justify-center items-center font-epilogue mb-[100px] w-full -mt-10 ">
      <div class="text-3xl sm:text-3xl md:text-4xl lg:text-5xl md:w-[90%] lg:w-3/4  font-medium normal-case text-center " style="line-height: 1.5em">{{ $settings.sections.text_down_boxes }}</div>
    </div>
  </div>
   
</template>
<script>

</script>
<style scoped>

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