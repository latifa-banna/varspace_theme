<template>
  <div class="testimonials">
  
      <div class="first_div">
        <div >TESTIMONIALS</div>
        <h1>{{ $settings.testimonials.title }}</h1>
      </div>
   
    <div class="second_div">
      <div v-for="item in $settings.testimonials">
        <div
          :class="
            item.star === '5'
              ? 'five_star'
              : item.star === '4'
              ? 'four_star'
              : item.star === '3'
              ? 'three_star'
              : item.star === '2'
              ? 'two_star'
              : item.star === '1'
              ? 'one_star'
              : item.star === '0'
              ? 'zero_star'
              : ''
          "
        >
          <!-- icon star -->
        </div>
        <div class="message">{{ item.message }}</div>
        <div class="info">
           <img v-if="item.image && item.image.src" :src="item.image.src" alt="">
           <div class="name_fonction">

           
          <h3>{{ item.name }}</h3>
          <div>{{ item.fonction }}</div>
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
      
    };
  },
  mounted() {
    // console.log("testimonials : "+this.$settings.testimonials.testimonial1.image.src); // Log the first item to inspect its structure

}}
</script>
<style>
.testimonials {
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 200px;
  padding-right: 200px;
}
.testimonials .first_div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  line-height: 70px;
}
.testimonials .first_div div {
  color: rgb(218, 144, 8);
  font-size: 20px;

  font-family: "Epilogue", Sans-serif;
}
.testimonials .first_div h1 {
  color: #000000;
  font-size: 40px;
  width: 40%;
  text-align: center;
}
.testimonials .second_div .message{
   font-size: 18px;
 
  color: #636161;
  }
  .testimonials .second_div{
    display: grid;
  grid-template-columns: auto auto auto auto;
  column-gap: 160px;
  }
  .testimonials .second_div .info{
    display: grid;
    grid-template-columns:  auto auto;
  column-gap: 60px;
  }
  .testimonials .second_div .info img{
    width: 70px;
    height: 70px;
    border-radius: 100px;
  }
  .testimonials .second_div .info .name_fonction{
    display: grid;
    grid-template-columns: auto;
  }
</style>
