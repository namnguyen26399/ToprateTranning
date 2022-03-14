<template>
    <div
        class="
            Testimonials
            w-full
            h-[335px]
            pl-32
            mt-[200px]
            flex
            sm:block sm:mt-[500px] sm:pl-5
            s650:mt-[100px]
            lg:max-w-full lg:pl-0
            md:-ml-[0px] md:pl-0
            box-border
            lg:justify-center
            lgs:justify-center
        "
    >
        <div
            id="left"
            class="
                w-auto
                pr-[124px]
                md:mr-0 md:pr-10
                sm:w-full sm:pr-5
                md:scale-75 md:w-2/5
            "
        >
            <p
                data-aos="fade-up"
                class="
                    p1
                    mt-[9px]
                    mb-2
                    sm:w-full sm:ml-0
                    lg:pl-10
                    sm:text-center
                "
            >
                Testimonials
            </p>
            <p
                data-aos="fade-up"
                class="
                    p2
                    text-[50px]
                    w-[409px]
                    sm:text-2xl sm:w-full
                    lg:pl-10
                    sm:text-center
                    md:text-[30px] md:w-full md:h-auto
                "
            >
                What people say about Us.
            </p>
        </div>
        <div
            data-aos="fade-left"
            class="sm:mt-5 sm:ml-4 lg:ml-[0px] sm:mx-auto"
        >
            <!-- //?page1 -->
            <!-- 504.205 -->
            <div
                id="slide-1"
                class="
                    slide
                    right
                    w-[504px]
                    h-[245px]
                    bg-white
                    mike-taylor
                    relative
                    sm:h-80  sm:mx-auto
                    pt-10
                    sm:w-[90%]
                "
            >
                <p id="mess" class="p3 pl-[34px]">
                    “On the Windows talking painted pasture yet its express
                    parties use. Sure last upon he same as knew next. Of
                    believed or diverted no.”
                </p>
                <p id="author" class="p4 mt-[34px] pl-[34px]">Mike taylor</p>
                <p id="addr" class="p5 mt-[5px] pl-[34px]">Lahore, Pakistan</p>
                <img
                    id="avatar"
                    class="absolute -left-8 -top-8 avatar"
                    src="../../assets/images/avatar.png"
                    alt=""
                />
                <img
                    style="display: none"
                    id="avatar2"
                    class="absolute -left-8 -top-8 avatar"
                    src="../../assets/images/avatar2.png"
                    alt=""
                />
                <img
                    style="display: none"
                    id="avatar3"
                    class="absolute -left-8 -top-8 avatar"
                    src="../../assets/images/avatar3.png"
                    alt=""
                />
            </div>

            <div class="flex mt-11 sm:justify-center">
                <button class="mr-[26px] ml-[200px] sm:ml-0" @click="page1">
                    <img
                        id="img-page1"
                        src="../../assets/images/page1.png"
                        alt=""
                    />
                    <img
                        style="display: none"
                        id="img-page1-none"
                        src="../../assets/images/page2.png"
                        alt=""
                    />
                </button>
                <button class="mr-[26px]" @click="page2">
                    <img
                        style="display: none"
                        id="img-page2"
                        src="../../assets/images/page1.png"
                        alt=""
                    />
                    <img
                        id="img-page2-none"
                        src="../../assets/images/page2.png"
                        alt=""
                    />
                </button>
                <button @click="page3">
                    <img
                        style="display: none"
                        id="img-page3"
                        src="../../assets/images/page1.png"
                        alt=""
                    />
                    <img
                        id="img-page3-none"
                        src="../../assets/images/page2.png"
                        alt=""
                    />
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        page3() {
            document.getElementById("mess").innerHTML =
                "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus“.";
            document.getElementById("img-page3").style.display = "block";
            document.getElementById("img-page3-none").style.display = "none";
            document.getElementById("img-page2").style.display = "none";
            document.getElementById("img-page2-none").style.display = "block";
            document.getElementById("img-page1").style.display = "none";
            document.getElementById("img-page1-none").style.display = "block";

            document.getElementById("author").innerHTML = "Ng Sy Nam";
            document.getElementById("addr").innerHTML = "Ha Noi, Viet Nam";
            document.getElementById("avatar3").style.display = "block";
            document.getElementById("avatar").style.display = "none";
            document.getElementById("avatar2").style.display = "none";
        },
        page2() {
            document.getElementById("mess").innerHTML =
                "“Built Wicket longer admire do barton vanity itself do in it.Built Wicket longer admire do barton vanity itself do in it.Built Wicket longer admire!!!“";
            document.getElementById("img-page2").style.display = "block";
            document.getElementById("img-page2-none").style.display = "none";
            document.getElementById("img-page3").style.display = "none";
            document.getElementById("img-page3-none").style.display = "block";
            document.getElementById("img-page1").style.display = "none";
            document.getElementById("img-page1-none").style.display = "block";
            document.getElementById("author").innerHTML = "Ng Ngoc Hai";
            document.getElementById("addr").innerHTML = "Ha Nam, Viet Nam";
            document.getElementById("avatar2").style.display = "block";
            document.getElementById("avatar").style.display = "none";
            document.getElementById("avatar3").style.display = "none";
        },
        page1() {
            document.getElementById("mess").innerHTML =
                "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”";
            document.getElementById("img-page1").style.display = "block";
            document.getElementById("img-page1-none").style.display = "none";
            document.getElementById("img-page2").style.display = "none";
            document.getElementById("img-page2-none").style.display = "block";
            document.getElementById("img-page3").style.display = "none";
            document.getElementById("img-page3-none").style.display = "block";
            document.getElementById("author").innerHTML = "Mike taylor";
            document.getElementById("addr").innerHTML = "Lahore, Pakistan";
            document.getElementById("avatar").style.display = "block";
            document.getElementById("avatar2").style.display = "none";
            document.getElementById("avatar3").style.display = "none";
        },
    },
};
</script>

<style scoped>
.p1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    text-transform: uppercase;

    /* TEXT CLR */

    color: #5e6282;
}
.p2 {
    font-family: Volkhov;
    font-style: normal;
    font-weight: bold;
    line-height: 64px;
    text-transform: capitalize;

    /* 3rd */

    color: #14183e;
}
.p3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 32px;
    /* or 200% */

    /* TEXT CLR */

    color: #5e6282;
}
.p4 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    /* TEXT CLR */

    color: #5e6282;
}
.p5 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    /* identical to box height */

    /* TEXT CLR */

    color: #5e6282;
}
.mike-taylor {
    box-shadow: 0px 100px 80px rgba(0, 0, 0, 0.02),
        0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852),
        0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481),
        0px 20px 13px rgba(0, 0, 0, 0.01),
        0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185),
        0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481);
    border-radius: 10px;
}
</style>