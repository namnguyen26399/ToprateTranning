<template>
    <div
        id="sub-view"
        class=" md:w-[90%]  lg:scale-90 w-[1170px] h-[407px] bg-slate-200 mt-[158px] mx-auto relative sm:bg-white sm:mt-[70px] sm:w-[343px] lg:w-full"
    >
        <p
            class="
            relative
                Poppins1
                inline-block
                w-[859px]
                h-[108px]
                mt-[79px]
                text-center
                ml-[155px]
                z-30
                text-[33px]
                sm:text-[20px]
                sm:w-[375px]
                sm:h-auto
                sm:leading-none
                sm:px-10
                sm:ml-[-20px]
                md:ml-10
                md:text-[25px]
                md:w-5/6
            "
        >
            Subscribe to get information, latest news and other interesting
            offers about Cobham
        </p>
        <div class="flex mt-[74px] sm:block sm:mt-6 md:ml-0  " >
            <div class="ml-[260px] mr-8 relative sm:ml-[0] md:ml-[10%]">
                <img class="absolute top-[25px] left-[31px] sm:top-[12px]" src="../../assets/images/email.png" alt="">
                <input
                    class=" email w-[421px] h-[68px] rounded-[10px] Montserrat pl-[74px]  sm:w-[320px] sm:h-[40px]  sm:ml-[20px]"
                    type="text"
                    value="Your email"
                />
            </div>
            <button class=" md:ml-0 w-[160px] h-[68px] bg-[#FF7D68] rounded-[10px] text-white sm:h-[40px] sm:w-[100px] sm:ml-[130px] sm:mt-[20px]">
                Subscribe
            </button>
        </div>
        <img class="absolute top-[131px] left-[28px] z-0 sm:hidden" src="../../assets/images/decor-eclip.png" alt="">
        <img class="absolute top-[0px] right-[0px] z-0 sm:hidden" src="../../assets/images/decor-eclip2.png" alt="">
        <img class="absolute top-[340px] right-[-0px] z-0 sm:hidden lg:right-0" src="../../assets/images/sub-star.png" alt="">
    </div>
    
</template>

<script>
export default {};
</script>

<style scoped>
#sub-view {
    border-radius: 20px;
    border-top-left-radius: 129px;
}
.Poppins1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    line-height: 54px;
    text-align: center;
    color: #5e6282;
}
.Montserrat {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    /* TEXT COLOR */

    color: #39425d;
}
.email{
    border: 1px solid rgb(167, 167, 167);
}
</style>