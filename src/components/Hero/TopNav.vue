<template>
    <div
        @click="windowClick"
        id="top-nav"
        class="flex w-full h-10 mt-12 relative z-90"
    >
        <!-- //?----------Logo -->
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
                    sm:h-[28px]
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
                sm:mr-0
            "
        >
            <button
                @click="hide"
                class="cursor-pointer menufix:block absolute -right-0 w-6 h-6"
            >
                <img
                    class="w-6 h-6"
                    src="../../assets/images/menu.png"
                    alt=""
                />
            </button>

            <div
                id="menu-down"
                class="
                    bg-white
                    w-[60%]
                    z-90
                    rounded-md
                    h-screen
                    fixed
                    top-0
                    left-0
                    mt-0
                "
                role="none"
                data-v-20db37e3=""
                style="display: none"
            >
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <button
                    @click="closeMenu"
                    class="
                        absolute
                        top-0
                        right-0
                        w-10
                        h-6
                        cursor-pointer
                        font-medium
                        text-[20px]
                    "
                >
                    X
                </button>
                <a
                    href="#"
                    class="
                        mt-10
                        border-b border-gray-100
                        text-gray-700
                        block
                        px-4
                        py-2
                        text-sm text-center
                        hover:bg-slate-100
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    data-v-20db37e3=""
                    >Destinations</a
                ><a
                    href="#"
                    class="
                        border-b border-gray-100
                        text-gray-700
                        block
                        px-4
                        py-2
                        text-sm text-center
                        hover:bg-slate-300
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                    data-v-20db37e3=""
                    >Hotels</a
                ><a
                    href="#"
                    class="
                        border-b border-gray-100
                        text-gray-700
                        block
                        px-4
                        py-2
                        text-sm text-center
                        hover:bg-slate-300
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    data-v-20db37e3=""
                    >Flights</a
                ><a
                    href="#"
                    class="
                        border-b border-gray-100
                        text-gray-700
                        block
                        px-4
                        py-2
                        text-sm text-center
                        hover:bg-slate-300
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    data-v-20db37e3=""
                    >Bookings</a
                ><a
                    href="#"
                    class="
                        border-gray-100
                        text-gray-700
                        block
                        px-4
                        py-2
                        text-sm text-center
                        hover:bg-slate-300
                        border-b-0
                    "
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                    data-v-20db37e3=""
                    >Login</a
                >
            </div>
            <div
                style="display: none"
                id="bg-right"
                class="
                    fixed
                    top-0
                    right-0
                    h-screen
                    w-[40%]
                    opacity-50
                    z-0
                    bg-gray-200
                "
            ></div>

            <!-- //? menu down -->
        </div>
        <!-- //?------------Nav-item -->

        <div
            id="Nav-item"
            class="
                w-[80%]
                h-full
                mr-12
                sm:mr-0 sm:w-40 sm:absolute sm:right-0 sm:hidden
                menufix:hidden
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
                        <!-- <p
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
                        </button> -->
                        <!-- //? language -->
                        <div class="relative inline-block text-left">
                            <div>
                                <button
                                    @click="chooselanguage"
                                    type="button"
                                    class="
                                        chosse-language
                                        inline-flex
                                        justify-center
                                        w-full
                                        rounded-md
                                        py-[5px]
                                        bg-none
                                        font-normal
                                        text-[17px] text-gray-700
                                    "
                                    id="menu-button"
                                    aria-expanded="true"
                                    aria-haspopup="true"
                                >
                                    EN
                                    <svg
                                        class="-mr-1 ml-2 h-5 w-5 mt-1"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                            clip-rule="evenodd"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <div
                                class="
                                    origin-top-right
                                    absolute
                                    right-0
                                    mt-2
                                    w-56
                                    rounded-md
                                    bg-white
                                "
                                role="menu"
                                aria-orientation="vertical"
                                aria-labelledby="menu-button"
                                tabindex="-1"
                            >
                                <div
                                    id="language-tb"
                                    class="py-0"
                                    role="none"
                                    style="display: none"
                                >
                                    <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                                    <a
                                        href="#"
                                        class="
                                            border-b border-gray-100
                                            text-gray-700
                                            block
                                            px-4
                                            py-2
                                            text-sm text-center
                                            hover:bg-slate-100
                                        "
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-0"
                                        >English</a
                                    >
                                    <a
                                        href="#"
                                        class="
                                            border-b border-gray-100
                                            text-gray-700
                                            block
                                            px-4
                                            py-2
                                            text-sm text-center
                                            hover:bg-slate-300
                                        "
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-1"
                                        >Vietnamese</a
                                    >
                                    <a
                                        href="#"
                                        class="
                                            border-b border-gray-100
                                            text-gray-700
                                            block
                                            px-4
                                            py-2
                                            text-sm text-center
                                            hover:bg-slate-300
                                        "
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-2"
                                        >France</a
                                    >
                                    <a
                                        href="#"
                                        class="
                                            border-b border-gray-100
                                            text-gray-700
                                            block
                                            px-4
                                            py-2
                                            text-sm text-center
                                            hover:bg-slate-300
                                        "
                                        role="menuitem"
                                        tabindex="-1"
                                        id="menu-item-2"
                                        >China</a
                                    >
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    methods: {
        chooselanguage() {
            if (this.i % 2 == 0) {
                document.getElementById("language-tb").style.display = "block";
                this.i++;
            } else {
                document.getElementById("language-tb").style.display = "none";
                this.i++;
            }
            console.log(this.i);
        },

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
                document.getElementById("menu-down").style.display = "block";
                document.getElementById("bg-right").style.display = "block";
                this.isOpen = true;
                this.bgROpen =true;
                this.i++;
            } else {
                document.getElementById("menu-down").style.display = "none";
                document.getElementById("bg-right").style.display = "none";
                this.isOpen = false;
                this.i++;
            }
            console.log(this.i);
        },
        closeMenu() {
            document.getElementById("menu-down").style.display = "none";
            document.getElementById("bg-right").style.display = "none";
            this.i++;
        },
        windowClick(event) {
            if (this.isOpen && event.target == document.getElementById("bg-right"))
                document.getElementById("menu-down").style.display = "none";
            // document.getElementById("bg-right").style.display = "none";
             if (this.bgROpen && event.target == document.getElementById("bg-right"))
                document.getElementById("bg-right").style.display = "none";
                this.i = 0;
        },
    },
    data() {
        return {
            i: 0,
            isOpen: false,
            bgROpen:false
        };
    },
};
</script>

<style  scoped>
a:hover {
    color: #006eff;

    /* transform: scaleY(1.5); */
}
.sign-up:hover {
    background-color: #006eff;
    color: rgb(255, 255, 255);
    transition: 0.4s;
    border: none;
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
    color: #006eff;
    transition: 0.2s;
}

.logo:hover {
    transform: scale(1.2);
    transition: 0.5s;
}
.chosse-language:hover .language-tb {
    display: block;
}
</style>
