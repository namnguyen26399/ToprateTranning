<template>
    <div id="booking" class="w-full h-[580px] flex mt-[168px] relative sm:block pt-[100px]  sm:block-inline">
        <!-- //?left -->
        <div class="w-1/2  pl-32 md:pl-5 sm:pl-2 sm:w-full">
            <p data-aos="flip-right" class="Poppins sm:w-full text-left sm:text-center">Easy and Fast</p>
            <p data-aos="flip-right" class="Volkhov text-[50px] mt[15px] md:text-4xl sm:text-2xl  sm:text-center sm:w-full sm:leading-none">Book your next trip in 3 easy steps</p>
            <!-- //? Content -->

            <div id="content" class="mt-[31px]">
                <!-- //? 1  -->
                <div class="flex  sm:w-full sm:pl-[20px] booking-step1 pl-5" data-aos="fade-right ">
                    <div class="booking-img relative w-12 h-12 mt-4">
                        <img
                            class="w-12 h-12"
                            src="../../assets/images/booking1.png"
                            alt=""
                        />
                        <img
                            class="absolute top-[12px] left-[12px]"
                            src="../../assets/images/bookingV1.png"
                            alt=""
                        />
                    </div>
                    <div class="w-[320px] ml-2 mt-1 md:ml-1">
                        <p class="Poppins2">Choose Destination</p>
                        <p class="Poppins3 sm:text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <!-- //? 2   -->
                <div class="flex mt-5   sm:w-full sm:pl-[20px] pl-5 booking-step2" data-aos="fade-right">
                    <div class="booking-img relative w-12 h-12 mt-4">
                        <img
                            class="w-12 h-12"
                            src="../../assets/images/booking2.png"
                            alt=""
                        />
                        <img
                            class="absolute top-[12px] left-[12px]"
                            src="../../assets/images/bookingV2.png"
                            alt=""
                        />
                    </div>
                    <div class="w-[320px] ml-2 mt-1 md:ml-1">
                        <p class="Poppins2">Make Payment</p>
                        <p class="Poppins3 sm:text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
                <!-- //? 3    -->
                <div class="flex mt-5   sm:w-full sm:pl-[20px] pl-5 booking-step3"  data-aos="fade-right">
                    <div class="booking-img relative w-12 h-12 mt-4">
                        <img
                            class="w-12 h-12"
                            src="../../assets/images/booking3.png"
                            alt=""
                        />
                        <img
                            class="absolute top-[12px] left-[12px]"
                            src="../../assets/images/bookingV3.png"
                            alt=""
                        />
                    </div>
                    <div class="w-[320px] ml-2 mt-1 md:ml-1">
                        <p class="Poppins2">Reach Airport on Selected Date</p>
                        <p class="Poppins3 sm:text-[12px]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Urna, tortor tempus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <!-- //? Decore          -->
        <div
        
            class="
                relative
                w-[200px]
                h-[200px]
                decor
                opacity-80
                right-[-240px]
                z-0
                sm:hidden
                md:mt-[170px]
                mt-[110px]
            "
        ></div>
        <!-- //?right -->
        <div class="relative right-[200px] right z-30 w-[370px] h-[400px] md:right-[90px] md:mt-[150px] sm:mx-auto  sm:w-full  sm:right-0"  data-aos="fade-down">
            <div
                class="
                bg-white
                    
                    w-[370px]
                    h-[400px]
                    ml-20
                    mt-16
                    booking-right
                    pl-[25px]
                    z-30
                    md:scale-[70%]
                    md:-mt-3
                    sm:scale-75 
                    sm:mx-auto
              
                "
            >
                <!-- //? image  -->
                <div class="pt-5">
                    <img
                        class=""
                        src="../../assets/images/Trip.jpg"
                        alt=""
                    />
                </div>
                <!-- //? p -->
                <p class="trip-to-gree mt-[26px]">Trip To Greece</p>
                <!-- //? ----- -->
                <div class="flex time mt-[13px]">
                    <p>14-29 June</p>
                    <p class="mr-[13px]">|</p>
                    <p>by Robbin joseph</p>
                </div>
                <!-- //? icon -->
                <div class="flex mt-5 sm:pl-[15%] booking-img">
                    <img
                        class="mr-4"
                        src="../../assets/images/icon1.png"
                        alt=""
                    />
                    <img
                        class="mr-4"
                        src="../../assets/images/icon2.png"
                        alt=""
                    />
                    <img src="../../assets/images/icon3.png" alt="" />
                </div>
                <!-- //? number visitor -->
                <div class="flex mt-8">
                    <img src="../../assets/images/building.png" alt="" />
                    <p class="number-visitor ml-1.5 mr-[143px]">
                        24 people going
                    </p>
                    <img src="../../assets/images/heart.png" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.Poppins {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    color: #5e6282;
}
.Poppins2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 124.5%;
    color: #5e6282;
}
.Poppins3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 124.5%;
    color: #5e6282;
}
.Volkhov {
    font-family: Volkhov;
    font-style: normal;
    font-weight: bold;
    line-height: 64px;
    text-transform: capitalize;
    color: #14183e;
}
.booking-right {
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 26px;
}
.trip-to-gree {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    letter-spacing: 0.015em;
    color: #080809;
}
.time {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 124.5%;
    letter-spacing: -0.005em;
    color: #84829a;
}
.number-visitor {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 124.5%;
    letter-spacing: -0.02em;
    color: #84829a;
}
.decor {
    background: #6fbff1;
    opacity: 5.9;
    filter: blur(100px);
    z-index: 0;
    top: 0px;
}
.right {
    z-index: 1;
}
.booking-step1:hover{
    background-color: #f1f1f1;
    border-radius: 10px;
}.booking-step2:hover{
    background-color: #f1f1f1;
    border-radius: 10px;
}.booking-step3:hover{
    background-color: #f1f1f1;
    border-radius: 10px;
}
</style>