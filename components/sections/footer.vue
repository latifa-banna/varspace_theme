<template>
    <div class="bg-black p-[100px]">
        <div class="grid grid-cols-2 gap-x-[896px]">
            <div class="text-white w-[540px] text-4xl font-medium">{{ $settings.footer.top.text }}</div>
            <nuxt-link :to="$settings.footer.top.url" class="border-1 bg-orange-600 w-[160px] h-[48px] text-white text-center p-[10px] ">{{ $settings.footer.top.text_url }}</nuxt-link>

        </div>
        <hr class="m-[80px] "/>
        <div class="text-white grid grid-cols-4 gap-10 ">
            <div class="w-[350px]">
                <img :src="$settings.footer.contact_text.logo.src" alt="logo" class="w-[178px] h-[70px] text-white">
                <div>{{ $settings.footer.contact_text.text }}</div>
                <div>
                    <nuxt-link to=""></nuxt-link>
                    <nuxt-link to=""></nuxt-link>
                    <nuxt-link to=""></nuxt-link>
                 </div>
            </div>
            <div>
                <h4>{{ $settings.footer.contact.text }}</h4>
                <div>{{ $settings.footer.contact.number_phone }}</div>
                <div>{{ $settings.footer.contact.email }}</div>
                <h4>{{ $settings.footer.address.text }}</h4>
                <div>{{ $settings.footer.address.adress }}</div>
                <div>{{ $settings.footer.address.time }}</div>
                <div></div>
            </div>
            <div>
                
                <h4>{{ $settings.footer.explore.text }}</h4>
                <div>{{ $settings.footer.explore.home }}</div>
                <div>{{ $settings.footer.explore.about }}</div>
                <div>{{ $settings.footer.explore.spaces }}</div>
                <div>{{ $settings.footer.explore.pricing }}</div>
                <div>{{ $settings.footer.explore.blog }}</div>
            </div>
            <div>
                <h4>{{ $settings.footer.support.support }}</h4>
                <div>{{ $settings.footer.support.help_center }}</div>
                <div>{{ $settings.footer.support.privacy }}</div>
                <div>{{ $settings.footer.support.disclaimer }}</div>
                <div>{{ $settings.footer.support.FAQs }}</div>
                <div>{{ $settings.footer.support.contact }}</div>
            </div>
            <hr class="w-[1600px]"/>
            <div class="grid grid-cols-2 pt-16">
                <div class=" ">{{ $settings.footer.butoom.copy_right }}</div>
                <div class="grid grid-cols-2">
                    <div>{{ $settings.footer.butoom.privacy }}</div>
                    <div>{{ $settings.footer.butoom.terms_services }}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style>
.footer {
    
    
}
.footer .first_div{
    
 
}
.footer .first_div div{
color: white;
font-size: 45px;
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
padding-bottom: 16px;
font-weight: 600;
width: 70%;
}
.footer .first_div a{

}
</style>