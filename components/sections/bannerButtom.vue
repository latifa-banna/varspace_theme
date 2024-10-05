<template>
    <div>
    <div class="container">
      <div class="box">
        <div>{{$settings.items.fastInternet.text}}</div>
        <div>{{$settings.items.fastInternet.number}}mb/s</div>
      </div>
      <div class="box">
        <div>{{$settings.items.spaces.text}}</div>
        <div>{{$settings.items.spaces.number}}+</div>
      </div>
      <div class="box">
        <div>{{$settings.items.activeNumber.text}}</div>
        <div>{{$settings.items.activeNumber.number}}+</div>
      </div>
      <div class="box">
        <div>{{$settings.items.positiveReview.text}}</div>
        <div>{{$settings.items.positiveReview.number}}%</div>
      </div>
    </div>
    <div class="container_text_center">
      <div class="text_center">{{ $settings.text_center }}</div>
    </div>
</div>
</template>
<script></script>
<style scoped>

.container {
  display: flex;
  justify-content: space-between;
  margin: 0px 130px;
}

.box {
  flex: 1;
  background-color: white;
  margin: 18px;
  padding: 20px;
  border: 1px solid #ccc;
  height: 250px;
  position: relative;
  bottom: 580px;
}

.box > div:first-child {
  font-weight: bold;
  margin-bottom: 10px;
}
.container_text_center {
  display: flex;
  justify-content: center;
  margin-top: -500px;
  font-family: sans-serif;
  /* font-family: "Epilogue",sans-serif;
    font-size: 65px;
    font-weight: 500;
    text-transform: none;
    font-style: normal;
    text-decoration: none;
    line-height: 1.3em; */
}
.text_center {
  font-size: 50px;
  width: 55%;
  justify-content: center;
  text-align: center;
  font-weight: 480;
}

</style>