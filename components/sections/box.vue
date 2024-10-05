<template>
  <div>
    
    <div class=" pt-[0px] px-2 pb-[30px]   opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in ">
      
      <div class="flex justify-center relative transition-all duration-400 w-full flex-col md:flex-row lg:flex-nowrap md:flex-wrap">
        <div class="bg-white m-2.5 p-5 h-[180px] relative w-[98%] sm:w-[98%] md:w-[45%] lg-[25%] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)]">
        <div class="absolute top-0 left-0 pt-5 pl-5 font-epilogue text-lg font-medium normal-case no-underline leading-6">{{ banner.buttom.fastInternet.text }}</div>
        <div class="absolute bottom-0 left-0 pb-5 pl-5 font-epilogue text-[35px] font-medium leading-[1.4]">{{ fastInternetValue }}mb/s</div>
      </div>
      <div class="bg-white m-2.5 p-5  h-[180px] relative w-[98%] sm:w-[98%] md:w-[45%] lg-[25%] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)]">
        <div class="absolute top-0 left-0 pt-5 pl-5 font-epilogue text-lg font-medium normal-case no-underline leading-6">{{ banner.buttom.spaces.text }}</div>
        <div class="absolute bottom-0 left-0 pb-5 pl-5 font-epilogue text-[35px] font-medium leading-[1.4]">{{ spacesValue }}+</div>
      </div>
      <div class="bg-white m-2.5 p-5  h-[180px] relative w-[98%] sm:w-[98%] md:w-[45%] lg-[25%] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)]">
        <div class="absolute top-0 left-0 pt-5 pl-5 font-epilogue text-lg font-medium normal-case no-underline leading-6">{{ banner.buttom.members.text }}</div>
        <div  class="absolute bottom-0 left-0 pb-5 pl-5 font-epilogue text-[35px] font-medium leading-[1.4]">{{ membersValue }}+</div>
      </div>
      <div class="bg-white m-2.5 p-5  h-[180px] relative w-[98%] sm:w-[98%] md:w-[45%] lg-[25%] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)]">
        <div class="absolute top-0 left-0 pt-5 pl-5 font-epilogue text-lg font-medium normal-case no-underline leading-6">{{ banner.buttom.review.text }}</div>
        <div  class="absolute bottom-0 left-0 pb-5 pl-5 font-epilogue text-[35px] font-medium leading-[1.4]">{{ reviewValue }}%</div>
      </div>
      </div>
      
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: this.$settings.sections.banner,
      fastInternetValue: this.$settings.sections.banner.buttom.fastInternet.number,
      spacesValue: this.$settings.sections.banner.buttom.spaces.number,
      membersValue: this.$settings.sections.banner.buttom.members.number,
      reviewValue: this.$settings.sections.banner.buttom.review.number,
    };
  },
  mounted() {
    this.increaseValueTo(150, "fastInternetValue", 2000);
    this.increaseValueTo(50, "spacesValue", 2000);
    this.increaseValueTo(200, "membersValue", 2000);
    this.increaseValueTo(99.9, "reviewValue", 2000);
  },
  methods: {
  increaseValueTo(targetValue, propertyName, duration) {
    const startTime = Date.now();
    const updateValue = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      if (elapsed < duration) {
        const progress = elapsed / duration;
        this[propertyName] = (targetValue * progress).toFixed(1);
        requestAnimationFrame(updateValue);
      } else {
        this[propertyName] = targetValue.toFixed(1);
      }
    };
    requestAnimationFrame(updateValue);
  },
},
};
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
