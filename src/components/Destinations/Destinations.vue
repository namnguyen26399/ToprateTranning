<template>
    <div class="Destinations mt-40 w-full h-auto sm:mt-10">
        <p data-aos="zoom-in" class="text-center Poppins">Top Selling</p>
        <p data-aos="zoom-in" class="Volkhov mt-2">Top Destinations</p>
        <div class="mt-14 flex flex-wrap px-auto justify-around">
            <!-- //? item 1 -->
            <div class="relative" data-aos="fade-up">
                <div
                    class="
                        destinations-item
                        w-[300px]
                        destinations-item1
                        relative
                    "
                >
                    <div
                        class="
                            bg-white
                            h-[130px]
                            absolute
                            w-full
                            top-[351px]
                            content
                        "
                    >
                        <div class="position pl-5 mt-8">
                            <p class="inline-block pos">Rome, Italty</p>
                            <p class="inline-block cost">$5,42k</p>
                        </div>
                        <div class="mt-5">
                            <img
                                class="inline-block ml-5 mr-6"
                                src="../../assets/images/Vector1.png"
                                alt=""
                            />
                            <p class="inline-block number-days">10 Days Trip</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //? item2   -->
            <div class="relative" data-aos="fade-up">
                <div
                    class="
                        destinations-item
                        w-[300px]
                        destinations-item2
                        relative
                    "
                >
                    <div
                        class="
                            bg-white
                            h-[130px]
                            absolute
                            w-full
                            top-[351px]
                            content
                        "
                    >
                        <div class="position pl-5 mt-8">
                            <p class="inline-block pos">Rome, Italty</p>
                            <p class="inline-block cost">$5,42k</p>
                        </div>
                        <div class="mt-5">
                            <img
                                class="inline-block ml-5 mr-6"
                                src="../../assets/images/Vector1.png"
                                alt=""
                            />
                            <p class="inline-block number-days">10 Days Trip</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //? item3 -->
            <div class="relative" data-aos="fade-up">
                <div
                    class="
                        destinations-item
                        w-[300px]
                        destinations-item3
                        relative
                    "
                >
                    <div
                        class="
                            bg-white
                            h-[130px]
                            absolute
                            w-full
                            top-[351px]
                            content
                        "
                    >
                        <div class="position pl-5 mt-8">
                            <p class="inline-block pos">Rome, Italty</p>
                            <p class="inline-block cost">$5,42k</p>
                        </div>
                        <div class="mt-5">
                            <img
                                class="inline-block ml-5 mr-6"
                                src="../../assets/images/Vector1.png"
                                alt=""
                            />
                            <p class="inline-block number-days">10 Days Trip</p>
                        </div>
                    </div>
                </div>
                <img
                    src="../../assets/images/Decore4.png"
                    class="absolute top-32 left-[260px]  sm:hidden z-0 md:hidden lg:hidden"
                    alt=""
                />
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.h-457 {
    height: 617px;
}
.Poppins {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #5e6282;
}
.Volkhov {
    font-family: Volkhov;
    font-style: normal;
    font-weight: bold;
    font-size: 50px;
    line-height: 64px;
    /* identical to box height */

    text-align: center;
    text-transform: capitalize;

    /* 3rd */

    color: #14183e;
}
.destinations-item {
    margin-top: 40px;
    width: 314px;
    height: 480px;
    /* filter: drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.02)),
        drop-shadow(0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852))
            drop-shadow(0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481))
            drop-shadow(0px 20px 13px rgba(0, 0, 0, 0.01))
            drop-shadow(0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185))
            drop-shadow(0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)); */
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 24px;
}
.destinations-item1 {
    background-image: url(../../assets/images/Des1.png);
    background-size: 471px 660px;
    background-repeat: no-repeat;
    background-position-x: center;
}
/* .destinations-item1:hover{
    background-size: 550px 770px;
   transition: all 10s ease;
    
} */
.destinations-item2 {
    background-image: url(../../assets/images/Des2.jpg);
    background-size: 471px 660px;
    background-repeat: no-repeat;
    background-position-x: center;
}
.destinations-item3 {
    background-image: url(../../assets/images/Des3.png);
    background-size: 471px 660px;
    background-repeat: no-repeat;
    background-position-x: center;
}
.pos {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5e6282;
    margin-right: 103px;
}
.cost {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 124.5%;
    color: #5e6282;
}
.number-days {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 124.5%;
    /* identical to box height, or 20px */

    /* TEXT CLR */

    color: #5e6282;
}
.decore4 {
    top: 0;
    right: -50px;
}
.z-index {
    z-index: 2;
}
.content {
    border-bottom-left-radius: 24px;
    border-bottom-right-radius: 24px;
}
.destinations-item:hover {
    background-size: 550px 770px;
    transition: 1s ease;
}
</style>