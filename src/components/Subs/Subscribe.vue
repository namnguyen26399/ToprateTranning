<template>
    <div
        id="sub-view"
        class="
            md:w-[90%]
            lg:scale-90
            w-[1170px]
            h-[407px]
            bg-slate-200
            mt-[158px]
            mx-auto
            relative
            sm:mt-[70px]
            lg:w-full
            sm:h-auto
             sm:w-[90%]
        "
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
                sm:text-[20px] sm:h-auto sm:px-10 
                md:ml-10 md:text-[25px] md:w-5/6
                sm:leading-[30px] sm:mt-10 sm:w-full
                sm:mx-auto
            "
        >
            Subscribe to get information, latest news and other interesting
            offers about Cobham
        </p>
        <div class="flex mt-[74px]  sm:mt-6 md:ml-0  flex-wrap sm:pl-[15%]">
            <div
                class="
                    ml-[15%]
                    mr-[5%]
                    relative
                    sm:ml-[0]
                    md:scale-75
                    md:-ml-[0]
                    
                "
            >
                <img
                    class="absolute top-[25px] left-[31px] sm:top-[12px]"
                    src="../../assets/images/email.png"
                    alt=""
                />
                <input
                    class="
                        email
                        w-[550px]
                        h-[68px]
                        rounded-[10px]
                        Montserrat
                        pl-[74px]
                        sm:w-full sm:h-[40px] 
                    "
                    type="text"
                    placeholder="Your email"
                />
            </div>
            <button
                class="
                    btn-sub
                    w-[160px]
                    h-[68px]
                    bg-[#FF7D68]
                    rounded-[10px]
                    text-white
                    sm:h-[40px]  
                    md:scale-75
                    md:-ml-[15%]
                    sm:mb-5
                    sm:w-[100px]
                    ip12:mt-2
                    ip12:ml-[80px]
                
                "
            >
                Subscribe
            </button>
        </div>
        <img
            class="absolute top-[131px] left-[28px] z-0 sm:hidden opacity-40"
            src="../../assets/images/decor-eclip.png"
            alt=""
        />
        <img
            class="absolute top-[0px] right-[0px] z-0 sm:hidden opacity-40"
            src="../../assets/images/decor-eclip2.png"
            alt=""
        />
        <img
            class="absolute top-[340px] right-[-0px] z-0 sm:hidden lg:right-0"
            src="../../assets/images/sub-star.png"
            alt=""
        />
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
.email {
    border: 1px solid rgb(167, 167, 167);
}
.btn-sub:hover {
    background-color: red;
}

input:focus {
    outline: 1px solid blue;
}
</style>