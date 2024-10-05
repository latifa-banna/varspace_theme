<template>
  <div>
    <div></div>
    <div>
      <div class="left">
        <diV>{{ $settings.sections.space_detail.text }}</diV>
        <h1>{{ $settings.sections.space_detail.title }}</h1>
        <p>{{ $settings.sections.space_detail.paragraphe1 }}</p>
        <p>{{ $settings.sections.space_detail.paragraphe2 }}</p>
        <div v-for="image in $settings.sections.space_detail.images">
            <img :src="image?image.src:''" alt="" class="w-[100px]"/>
            <!-- <img src="" alt="" /> -->
        </div>
        <div>
            <h2>{{ $settings.sections.space_detail.Space_Overview.text }}</h2>
            <p>{{ $settings.sections.space_detail.Space_Overview.paragraphe }}</p>
            <div v-for="item in $settings.sections.space_detail.Space_Overview.items">
                <div>icon</div>
                <h5>{{ item.text }}</h5>
                <p>{{ item.description }}</p>
            </div>
            <div>
            <p>{{ $settings.sections.space_detail.Space_Overview.below.items }}</p>
            <div>
                <h2>{{$settings.sections.space_detail.renting_benefits.text}}</h2>
                <p>{{$settings.sections.space_detail.renting_benefits.firstParagraphe}}</p>
            
            <div v-for="item in $settings.sections.space_detail.renting_benefits.items">
                <div> icon <span>{{item.text}}</span></div>
            </div>
            <p>{{ $settings.sections.space_detail.renting_benefits.lastParagraphe }}</p>
        </div>
    </div>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>
<script></script>