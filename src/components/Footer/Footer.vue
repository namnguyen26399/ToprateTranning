<template>
    <div
        class="
            w-full
            h-354px
            mt-[166px]
            sm:mt-[66px]
            lg:w-screen
            lgs:w-screen
            max-w-[1240px]
            lg:overflow-hidden
            md:w-screen
            sm:h-[600px]
            sm:px-4
        "
    >
        <div class="flex sm:flex-wrap justify-around md:w-screen md:flex-wrap">
            <div class="ml-32 sm:w-full sm:ml-0 lg:ml-[0px] md:ml-10">
                <p class="p1 sm:w-full sm:text-center">Jadoo.</p>
                <p class="p2 w-[207px] h-[48px] mt-[19px] sm:mx-auto sm:mt-2">
                    Book your trip in minute, get full Control for much longer.
                </p>
            </div>
            <div class="ml-[50px] text-left sm:ml-0 sm:w-[30%] md:w-[15%]">
                <p class="p3 mb-[34px]">Company</p>
                <p class="p4 mb-3 p-blue">About</p>
                <p class="p4 mb-3 p-blue">Carrers</p>
                <p class="p4 mb-3 p-blue">Mobile</p>
            </div>
            <div class="ml-[50px] text-left sm:ml-0 sm:w-[30%] md:w-[15%]">
                <p class="p3 mb-[34px]">Contact</p>
                <p class="p4 mb-3 p-blue">Help/FAQ</p>
                <p class="p4 mb-3 p-blue">Press</p>
                <p class="p4 p-blue">Affilates</p>
            </div>
            <div class="ml-[50px] text-left sm:ml-0 sm:w-[30%] md:w-[15%]">
                <p class="p3 mb-[34px]">More</p>
                <p class="p4 mb-3 p-blue">Airlinefees</p>
                <p class="p4 mb-3 p-blue">Airline</p>
                <p class="p4 p-blue">Low fare tips</p>
            </div>
            <div
                class="
                    mt-2
                    ml-[82px]
                    sm:mx-auto
                    lg:ml-[40px]
                    md:w-full md:ml-0 md:flex md:mx-auto md:justify-around
                    sm:flex
                    sm:mt-10
                "
            >
                <div class="flex mb-[20px] md:mt-[15px] sm:mt-9 sm:mr-6 sm:scale-[80%]">
                    <img
                        class="mr-[25px] cursor-pointer sm:mr-0"
                        src="../../assets/images/fb.png"
                        alt=""
                    />
                    <img
                        class="mr-[25px] cursor-pointer sm:mr-0"
                        src="../../assets/images/ins.png"
                        alt=""
                    />
                    <img
                        class="cursor-pointer "
                        src="../../assets/images/twe.png"
                        alt=""
                    />
                </div>

                <div class="sm:scale-[80%]">
                    <p class="p5 mb-[23px] text-center ">
                        Discover our app
                    </p>
                    <div class="flex justify-around md:h-[40px] md:mt-0">
                        <img
                            class="mr-2 cursor-pointer"
                            src="../../assets/images/ggplay.png"
                            alt=""
                        />
                        <img
                            class="cursor-pointer"
                            src="../../assets/images/appstore.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
        <div class="bot mb-10 relative md:w-full md:mt-24">
            <p
                class="
                    p6
                    mb-[80px]
                    text-center
                    md:w-full
                    mt-10
                    lg:w-screen
                    md:ml-0
                "
            >
                All rights reserved@jadoo.co
            </p>
            <div
                class="
                    decor
                    top-[50px]
                    right-[-40px]
                    lg:right-0
                    md:top-[90px] md:left-[1300px]
                    lg:hidden
                "
            >
                abc
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.p1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 44px;
    line-height: 66px;
    color: #181e4b;
}
.p2 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 124.5%;
    color: #5e6282;
}
.p3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 124.5%;
    color: #080809;
    margin-top: 24px;
}
.p4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 124.5%;
    color: #5e6282;
}
.p5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 124.5%;
    letter-spacing: 0.005em;
    color: #5e6282;
}
.p6 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 124.5%;
    color: #5e6282;
}
.decor {
    position: absolute;
    width: 70px;
    height: 50.86px;
    background: #bb00ff;
    opacity: 0.8;
    filter: blur(50px);
    transform: matrix(-1, 0, 0, 1, 0, 0);
}
p {
    width: 100%;
    text-align: center;
}
.p2 {
    width: 207px;
}
.p-blue:hover {
    color: #009af3;
    cursor: pointer;
}
</style>