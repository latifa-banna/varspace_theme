<template>
  <div class="browse-more">
    <div class="">
      <div class="browse">BROWSE MORE</div>
      <h1>{{ $settings.space.title }}</h1>
    </div>
    <div class="browse-spaces">
      <div v-for="space in $settings.spaces" :key="space.title">
        <h2>{{ space.title }}</h2>
        <p>{{ space.des }}</p>
        <p>{{ space.people }}</p>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style scoped>
.browse-more {
  padding-left: 120px;
  margin-right: 120px;
}
.browse {
  margin: 200px 0px 20px 10px;
  color: rgb(218, 144, 8);
  font-size: 20px;
  /* font-family: normal;
    font-family: 'Epilogue'; */
  font-family: "Epilogue", Sans-serif;
}
.browse-more h1 {
  font-size: 50px;
  width: 40%;
}
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
  width: 52%;
  margin-top: 10px;
  padding: 10px 20px;
  border-radius: 30px;
  color: #000000;
}
</style>
