<template>
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
                    px-4
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
                class="py-1"
                role="none"
                style="display: none"
            >
                <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
                <a
                    href="#"
                    class="
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
</template>

<script>
export default {
    
};
</script>

<style>
</style>