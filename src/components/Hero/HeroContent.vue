<template>
    <div id="Desc" class="mt-44 pl-32 w-full h-770px relative  flex md:pl-16 sm:pl-4  ">
        <div class="w-1/2">
            <div id="Text" class="" style=" height: 540px ">
                <div id="tagline" class="poppins max-w-[410px]">
                    Best Destinations around the world
                </div>
                <div id="heading" class="volkhov max-w-[545px] md:text-[55px] sm:text-[40px] sm:leading-none"  >
                    Travel, enjoy and live a new and full life
                </div>
                <div id="desc" class=" max-w-[477px]">
                    Built Wicket longer admire do barton vanity itself do in it.
                    Preferred to sportsmen it engrossed listening. Park gate
                    sell they west hard for the.
                </div>
                <div class="flex mt-9  sm:w-64 " style="">
                    <button
                        id="btn-fomore"
                        class="py-auto px-7 text-white w-40 h-12 md:scale-90 sm:scale-75 sm:-ml-5"
                    >
                        Find out more
                    </button>
                    <div id="btn-play-block" class="w-40 h-12 flex ml-11 sm:ml-0  img-demo ">
                        <button id="btn-play" class="h-full w-12 play-shadow md:scale-90 sm:scale-75   img-demo  ">
                            <img
                                class="w-4 h-4 ml-4 img-demo"
                                src="../.././assets/images/Polygon.png"
                                alt=""
                            />
                        </button>
                        <p
                            class="text-4 font-normal my-auto ml-5 sm:ml-0 btn-demo"
                            style="font-family: Poppins ; color:#686D77"
                        >
                            Play Demo
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div id="Image" class="relative w-[50%]">
            <img
                class=" ani1 sm:mt-20 "
                src="../.././assets/images/Traveller1.png"
                alt=""
            />
            <img
                class="absolute plane1 w-1/6 sm:mt-10"
                src="../.././assets/images/plane1.png"
                alt=""
            />
            <img
                class="absolute plane2  w-1/6 sm:mt-10"
                src="../.././assets/images/plane2.png"
                alt=""
            />
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style>
#Image {
    width: 765px;
    height: 765px;

}
.plane1 {
    top: 7%;
    left: 20%;
}
.plane2 {

    top: 10%;
    left: 83%;

}

#tagline {
    animation-name: tagline;
    animation-duration: 1.5s;
}
@keyframes tagline {
    0% {
        transform: translateX(-50%);
    }
    100% {
    }
}
#heading {
    animation-name: heading;
    animation-duration: 1.5s;
}
@keyframes heading {
    0% {
        transform: translateX(-50%);
    }
    100% {
    }
}
#desc {
    animation-name: desc;
    animation-duration: 1.5s;
}
@keyframes desc {
    0% {
        transform: translateX(-50%);
    }
    100% {
    }
}
.ani1 {
    animation-name: ani1;
    animation-duration: 1.5s;
}
@keyframes ani1 {
    0% {
        transform: translateY(-50%);
    }
    100% {
    }
}
#btn-fomore:hover {
    background-color: rgb(255, 145, 0);
}
.poppins {
    font-family: Poppins;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-transform: uppercase;
    color: #df6951;
}
.volkhov {
    font-family: Volkhov;
    font-style: normal;
    font-weight: bold;
    font-size: 84px;
    line-height: 89px;
    letter-spacing: -0.04em;
    color: #181e4b;
}
#desc {
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 30px;
    color: #5e6282;
}
#btn-fomore {
    background: #f1a501;
    box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
    border-radius: 10px;
}
#btn-play {
    box-shadow: 0px 20px 35px rgba(241, 165, 1, 0.15);
    border-radius: 10px;
}
#btn-play {
    background-color: #df6951;
    border-radius:50px;
}
.play-shadow{
    box-shadow: 0px 15px 30px rgba(223, 105, 81, 0.3);
}
.img-demo:hover  .btn-demo{
    color:red;
    transform: scale(1.3);
}
#btn-play:hover{
    background-color: rgb(253, 55, 55);
}
</style>