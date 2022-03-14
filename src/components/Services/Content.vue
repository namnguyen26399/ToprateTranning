<template>
    <div id="content" class="flex mt-16 flex-wrap px-auto justify-around sm:mt-0">
        <!-- //? item 1 -->
        <div
            id="category1"
            class="category w-[200px] h-[314px] mt-20 sm:mt-10 sm:w-[50%]"
            data-aos="fade-up"
        >
            <img class="mx-auto" src="../.././assets/images/cate1.png" alt="" />
            <p
                class="
                    Open-Sans
                    text-center text-xl
                    font-semibold
                    headding
                    mt-7
                "
            >
                Calculated Weather
            </p>
            <p
                class="
                    heading2
                    Poppins
                    text-center
                    font-medium
                    text-16
                    px-2
                    mt-4
                    w-[190px]
                    mx-auto
                "
            >
                Built Wicket longer admire do barton vanity itself do in it.
            </p>
        </div>
        <!-- //? item 2 -->
        <div
            id="category1"
            class="item2 category w-[200px] h-[314px] mt-20 relative z-30 sm:mt-10 sm:w-[50%]"
            data-aos="fade-up"
        >
            <img class="mx-auto" src="../.././assets/images/cate1.png" alt="" />
            <p
                class="
                    Open-Sans
                    text-center text-xl
                    font-semibold
                    headding
                    mt-7
                "
            >
                Calculated Weather
            </p>
            <p
                class="
                    heading2
                    Poppins
                    text-center
                    font-medium
                    text-16
                    px-2
                    mt-4
                    w-[190px]
                    mx-auto
                "
            >
                Built Wicket longer admire do barton vanity itself do in it.
            </p>
            <img
                class="absolute z-0 -bottom-10 -left-12 sm:hidden"
                src="../../assets/images/rectangle2.png"
                alt=""
            />
        </div>
        <!-- //? item 3 -->
        <div
            id="category1"
            class="category w-[200px] h-[314px] mt-20 sm:mt-10 sm:w-[50%]"
            data-aos="fade-up"
        >
            <img class="mx-auto" src="../.././assets/images/cate1.png" alt="" />
            <p
                class="
                    Open-Sans
                    text-center text-xl
                    font-semibold
                    headding
                    mt-7
                "
            >
                Calculated Weather
            </p>
            <p
                class="
                    heading2
                    Poppins
                    text-center
                    font-medium
                    text-16
                    px-2
                    mt-4
                    w-[190px]
                    mx-auto
                "
            >
                Built Wicket longer admire do barton vanity itself do in it.
            </p>
        </div>
        <!-- //? item 4 -->
        <div
            id="category1"
            class="category w-[200px] h-[314px] mt-20 sm:mt-10 sm:w-[50%]"
            data-aos="fade-up"
        >
            <img class="mx-auto" src="../.././assets/images/cate1.png" alt="" />
            <p
                class="
                    Open-Sans
                    text-center text-xl
                    font-semibold
                    headding
                    mt-7
                "
            >
                Calculated Weather
            </p>
            <p
                class="
                    heading2
                    Poppins
                    text-center
                    font-medium
                    text-16
                    px-2
                    mt-4
                    w-[190px]
                    mx-auto
                "
            >
                Built Wicket longer admire do barton vanity itself do in it.
            </p>
        </div>
        <!-- //?2 -->
    </div>
</template>

<script>
import ServiceItem from "../bases/ServiceItem.vue";
export default {
    components: {
        ServiceItem,
    },
};
</script>

<style scoped>
.category {
    transition: transform 0.2s;
}
.headding {
    color: #1e1d4c;
}
.Poppins {
    font-family: Poppins;
}
.heading2 {
    color: #5e6282;
}
.category2 {
    border-radius: 36px;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
}
.category:hover {
    border-radius: 36px;
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.04),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
}
.item2 {
    border-bottom-left-radius: 36px;
    border-bottom-right-radius: 36px;
}
*{
    transition-duration: 2s;
}
</style>