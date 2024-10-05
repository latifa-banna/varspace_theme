<template>
  <div
    class="bg-black m-0 px-[20px] md:px-[40px]  pt-[90px] pb-[10px] "
  >
    <div
      class="flex flex-col md:flex-row flex-wrap justify-between items-center text-center md:text-left"
    >
      <h2
        class="box-border w-[100%] text-[32px] lg:w-[50%] text-white block font-epilogue md:text-[38px] md:w-[72%] lg:text-[45px] font-medium md:leading-[67.5px] m-0 p-0 no-underline pb-[20px] md:pb-[14.4px]"
      >
        {{ section.top.text }}
      </h2>

      <nuxt-link
        :to="section.top.url"
        class="hover:bg-white bg-[#ff831a] rounded-tl-none rounded-tr-none border-0 shadow-none box-border text-white cursor-pointer inline-block font-epilogue text-[14px] font-semibold h-[46px] leading-[14px] pb-[16px] pl-[32px] pr-[32px] pt-[16px] text-center no-underline transition-all duration-300 ease-in-out w-[171.7px]"
      >
        <span
          class="box-border text-white cursor-pointer block fill-current text-white font-epilogue text-[14px] normal-case font-medium h-[14px] leading-[14px] text-center no-underline transition-all duration-100 ease-in-out"
          >{{ section.top.text_button }}</span
        >
      </nuxt-link>
      <!-- <nuxt-link
        :to="section.top.url"
        class="border-1 bg-orange-600 w-[160px] h-[48px] text-white text-center p-[10px]"
        >{{ section.top.text_button }}</nuxt-link
      > -->
    </div>
    <hr class="my-[60px]" />
    <div
      class="text-white flex flex-wrap flex-col lg:flex-row lg:flex-nowrap justify-between w-full"
    >
      <div
        class="w-full lg:w-[50%] flex flex-col justify-center lg:justify-start items-center lg:items-start lg:flex-none mb-8 lg:mb-0"
      >
        <img
          :src="section.logo ? section.logo.src : ''"
          alt="logo"
          class="w-[195px] h-[80px] text-white"
        />
        <p
          class="box-border text-[rgba(255,255,255,0.83)] block font-inter m-0 mb-[14.4px] text-center lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px] lg:text-teft"
        >
          {{ section.social_media.title }}
        </p>
        <div>
          <nuxt-link to=""
            ><img
              src="https://storeno.b-cdn.net/stores/10-2024/1727972449645.png"
              class="bg-black"
          /></nuxt-link>
          <nuxt-link to=""></nuxt-link>
          <nuxt-link to=""></nuxt-link>
        </div>
      </div>
      <div class="w-full lg:w-[50%] ml-0 lg:ml-8">
        <div class="flex flex-col md:flex-row justify-between">
          <div>
            <div class="contact">
              <h4
                class="py-4 box-border text-white block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] m-0 p-0 no-underline"
              >
                {{ section.contact.text }}
              </h4>
              <ul>
                <li
                  class="box-border text-[rgba(255,255,255,0.83)] cursor-pointer block font-inter list-none text-left p-0 no-underline ease transition-colors duration-300 lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px]"
                >
                  <nuxt-link to="">{{ section.contact.phone }}</nuxt-link>
                </li>
                <li
                  class="box-border text-[rgba(255,255,255,0.83)] cursor-pointer block font-inter list-none text-left p-0 no-underline ease transition-colors duration-300 lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px]"
                >
                  <nuxt-link to="">{{ section.contact.email }}</nuxt-link>
                </li>
              </ul>
            </div>
            <div class="address">
              <h4
                class="py-4 box-border text-white block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] m-0 p-0 no-underline"
              >
                {{ section.address.text }}
              </h4>
              <ul>
                <li
                  class="box-border text-[rgba(255,255,255,0.83)] cursor-pointer block font-inter list-none text-left p-0 no-underline ease transition-colors duration-300 lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px]"
                >
                  <nuxt-link to="">{{ section.address.address }}</nuxt-link>
                </li>
              </ul>
              <div>{{ section.address.time }}</div>
            </div>
          </div>

          <div class="explore">
            <h4
              class="py-4 box-border text-white block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] m-0 p-0 no-underline"
            >
              {{ section.Explore.text }}
            </h4>
            <ul>
              <li
                v-for="item in section.Explore"
                :key="item.text"
                class="box-border text-[rgba(255,255,255,0.83)] cursor-pointer block font-inter list-none text-left p-0 no-underline ease transition-colors duration-300 lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px]"
              >
                <nuxt-link to="">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </div>
          <div
            class="content-start box-border text-[#7a7a7a] flex flex-wrap font-inter font-normal leading-[28.8px] p-0 relative text-[100%] normal-case isolate w-[117px]"
          >
            <h4
              class="py-4 box-border text-white block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] m-0 p-0 no-underline"
            >
              {{ section.support.text }}
            </h4>
            <ul
              class="bg-transparent border-gray-700 border-0 box-border text-gray-700 block font-inter text-base font-normal leading-[28.8px] list-none m-0 p-0 outline-none text-[100%] normal-case isolate align-baseline"
            >
              <li
                v-for="item in section.support"
                :key="item.text"
                class="box-border text-[rgba(255,255,255,0.83)] cursor-pointer block font-inter list-none text-left p-0 no-underline ease transition-colors duration-300 lg:text-[16px] lg:leading-[28.8px] text-[15px] leading-[27px]"
              >
                <nuxt-link to="">{{ item.text }}</nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <hr class="w-full mt-20" />
      <div class="flex flex-col-reverse sm:flex-row sm:justify-between pt-16">
  <!-- First flex: Centered on small screens -->
  <div class="text-white font-epilogue font-medium mb-4 lg:text-[14px] lg:leading-[28.8px] text-[14px] leading-[27px] text-center sm:text-left ">
    {{ section.copyright.text }}
  </div>

  <!-- Second flex: Centered and justified between on small screens -->
  <div class="flex flex-row justify-center sm:flex-row  sm:justify-end items-center sm:items-start space-x-4 sm:space-x-4 w-full sm:w-auto pb-[20px] sm:pb-0">
    <div class="text-white font-epilogue font-medium lg:text-[14px] lg:leading-[28.8px] text-[14px] leading-[27px]">
      {{ section.copyright.PrivacyPolicy }}
    </div>
    <div class="text-white font-epilogue font-medium lg:text-[14px] lg:leading-[28.8px] text-[14px] leading-[27px]">
      {{ section.copyright.Terms_Services }}
    </div>
  </div>
</div>


    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$settings.sections.footer,
    };
  },
};
</script>
<style>
/* .footer h2 {
  font-family: "Epilogue", sans-serif;
  font-size: 50px;
  font-weight: 500;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.5em;
  position: relative;
  display: flex;
  width: 50%;
  flex-wrap: wrap;
  align-content: flex-start;
  --widgets-spacing: 20px 20px;
  color: white;
} */

/* .footer .first_div div {
  color: white;
  font-size: 45px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  padding-bottom: 16px;
  font-weight: 600;
  width: 70%;
} */
/* .footer .first_div a {
  margin-top: 50px;
} */
/* .footer .second_div {
  display: flex;
  justify-content: space-between;
  width: 100%;
} */
/* .footer .second_div p {
  margin-block-start: 0;
  margin-block-end: 0.9rem;
  display: block;
 
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.8em;
  color: #ffffffd4;
} */
/* .footer .list {
  display: flex;
  justify-content: space-between;
  width: 50%;

} */
/* . .list h4{
    font-family: "Epilogue",sans-serif;
    font-size: 21px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 1.5em;
    margin-bottom: 20px;
    margin-top: 20px;
} */
/* . .list ul li a{
   font-family: "Inter",sans-serif;
   font-size: 16px;
   font-weight: 400;
   text-transform: none;
   font-style: normal;
   text-decoration: none;
   line-height: 1.5em;

   
} */
</style>
