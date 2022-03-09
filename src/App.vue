s


<template>
    <div
        id="container"
        class="max-w-[1240px] md:overflow-hidden sm:overflow-hidden lg:overflow-hidden"
    >
        <div id="Hero" class="sm:h-auto max-w-[1240px]">
            <TopNav></TopNav>
            <HeroContent></HeroContent>
            <Decore></Decore>
        </div>
        <ServicesLayout class="mt-32"></ServicesLayout>
        <Destinations class="h-auto"></Destinations>
        <Booking class="mt-40"></Booking>
        <Testimonials></Testimonials>
        <LogoView class="sm:mt-[300px]"></LogoView>
        <Subscribe class=""></Subscribe>
        <Footer class="md:scale-75 md:ml-[-150px]"></Footer>

        <!-- <ServicesLayout></ServicesLayout>
        <Destinations></Destinations>
        <Booking></Booking>
        <Testimonials></Testimonials>
        <LogoView></LogoView>
        <Subscribe></Subscribe>
        <Footer></Footer> -->
    </div>
</template>

<script>
import TopNav from "./components/Hero/TopNav.vue";
import HeroContent from "./components/Hero/HeroContent.vue";
import Decore from "./components/Hero/Decore.vue";
import ServicesLayout from "./components/Services/ServicesLayout.vue";
import Destinations from "./components/Destinations/Destinations.vue";
import Booking from "./components/Booking/Booking.vue";
import Testimonials from "./components/Testimonials/Testimonials.vue";
import LogoView from "./components/Logo/LogoView.vue";
import Subscribe from "./components/Subs/Subscribe.vue";
import Footer from "./components/Footer/Footer.vue";
export default {
    components: {
        TopNav,
        HeroContent,
        Decore,
        ServicesLayout,
        Destinations,
        Booking,
        Testimonials,
        LogoView,
        Subscribe,
        Footer,
    },
};
</script>

<style module>
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@500&family=Martel+Sans:wght@800&family=Montserrat:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,100;0,300;1,400&family=Source+Sans+Pro:wght@200;300;400&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@500&family=Martel+Sans:wght@800&family=Montserrat:wght@700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600&family=Roboto:ital,wght@0,100;0,300;1,400&family=Source+Sans+Pro:wght@200;300;400&family=Volkhov:wght@700&display=swap");
* {
    z-index: 20;
}
* {
    transition-duration: 1s;
}
</style>