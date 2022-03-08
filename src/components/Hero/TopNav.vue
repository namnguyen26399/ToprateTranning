<template>
    <div id="top-nav" class="flex w-full h-10 mt-12 relative">
        <!-- //!----------Logo -->
        <div id="logo" class="relative w-[20%] h-full ml-[-0px]">
            <img
                class="
                    logo
                    absolute
                    w-28
                    h-9
                    left-[88px]
                    z-20
                    bottom-0.5
                    md:left-[28px]
                    sm:left-[29px]
                "
                src="../.././assets/images/logo.png"
                alt=""
            />
        </div>

        <!-- //? btn more  -->
        <div
            class="
                cursor-pointer
                mr-0
                sm:h-10 sm:text-center
                md:px-[10px]
                justify-end
                absolute
                right-5
                top-2
                md:hidden
                lg:hidden
            "
        >
            <button @click="hide" class="cursor-pointer">
                <img src="../../assets/images/menu.png" alt="" />
            </button>
        </div>
        <!-- //?------------Nav-item -->

        <div
            id="Nav-item"
            class="
                w-[80%]
                h-full
                mr-12
                sm:mr-0 sm:w-40 sm:absolute sm:right-0 sm:hidden
            "
        >
            <ul
                class="
                    flex
                    h-full
                    align-items-center
                    justify-end
                    sm:flex-col sm:mt-10 sm:bg-slate-200 sm:h-auto
                "
            >
                <li
                    class="
                        menu-item
                        menuitem2
                        md:mr-5
                        sm:w-full sm:h-10 sm:text-center sm:rounded-r-sm
                        px-5
                        sm:py-1
                        pr-5
                        md:px-[10px]
                    "
                >
                    <a
                        class="font-normal text-17px leading-21px text-212832"
                        href="#"
                        >Destinations</a
                    >
                </li>
                <li
                    class="
                        menu-item
                        menuitem2
                        md:mr-5
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        pr-5
                        md:px-[10px]
                    "
                >
                    <a
                        class="font-normal text-17px leading-21px text-212832"
                        href="#"
                        >Hotels</a
                    >
                </li>
                <li
                    class="
                        menu-item
                        menuitem2
                        md:mr-5
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        pr-5
                        md:px-[10px]
                    "
                >
                    <a
                        class="font-normal text-17px leading-21px text-212832"
                        href="#"
                        >Flights</a
                    >
                </li>
                <li
                    class="
                        menu-item
                        menuitem2
                        md:mr-5
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        pr-5
                        md:px-[10px]
                    "
                >
                    <a
                        class="font-normal text-17px leading-21px text-212832"
                        href="#"
                        >Bookings</a
                    >
                </li>
                <li
                    class="
                        menu-item
                        menuitem2
                        md:mr-5
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        pr-5
                        md:px-[10px]
                    "
                >
                    <a
                        class="font-normal text-17px leading-21px text-212832"
                        href="#"
                        >Login</a
                    >
                </li>
                <li
                    class="
                        menu-item
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        pr-5
                        md:px-[10px]
                        sm:hidden
                    "
                >
                    <div id="Sign-up" class="h-full w-auto">
                        <button
                            class="
                                w-102px
                                h-full
                                py-2
                                px-5
                                rounded-5px
                                box-border
                                font-normal
                                text-17px
                                leading-21px
                                text-212832
                                sign-up
                            "
                        >
                            Sign up
                        </button>
                    </div>
                </li>
                <li
                    class="
                        menu-item
                        sm:w-full sm:h-10 sm:text-center sm:rounder-[1px
                        solid
                        sm:py-1
                        black]
                        px-5
                        md:px-[10px]
                        sm:hidden
                    "
                >
                    <div id="Choose-language" class="flex w-auto">
                        <p
                            class="
                                line-height-40
                                font-normal
                                text-17px text-center
                                leading-21px
                                text-212832 text-[17px]
                            "
                        >
                            EN
                        </p>
                        <button class="ml-1" @click="more">
                            <img
                                id="btn-more"
                                class="w-3"
                                src="../../assets/images/Down.png"
                                alt=""
                            />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        more() {
            if (this.i % 2 == 0) {
                document.getElementById("btn-more").style.transform =
                    "rotate(180deg)";
                this.i++;
            } else {
                document.getElementById("btn-more").style.transform =
                    "rotate(0deg)";
                this.i++;
            }
        },
        hide() {
            if (this.i % 2 == 0) {
                document.getElementById("Nav-item").style.display = "block";
                this.i++;
            } else {
                document.getElementById("Nav-item").style.display = "none";
                this.i++;
            }
            console.log(this.i);
        },
    },
    data() {
        return {
            i: 0,
        };
    },
};
</script>

<style  scoped>
a:hover {
    color: blue;
    /* transform: scaleY(1.5); */
}
.sign-up:hover {
    background-color: rgb(0, 153, 255);
    color: rgb(255, 255, 255);
}

@media only screen and (max-width: 767px) and (min-width: 320px) {
    .menu-item {
        border: 1px solid black;
    }
}
@media only screen and(max-width: 1240px) and (min-width: 768px) {
    .menu-item {
        margin-left: 12px;
        margin-right: 12px;
    }
}
a:hover {
    color: rgb(0, 68, 255);
}
.menuitem2:hover {
    transform: scale(1.5);
}
.logo:hover {
    transform: scale(1.5);
}
</style>
