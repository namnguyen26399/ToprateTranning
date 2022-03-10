

<template><vue-tree-nav :left="left" :right="right"></vue-tree-nav></template>

<script>
import treeNav from "vue-tree-nav";

export default {
    components: {
        "vue-tree-nav": treeNav,
    },
    data: {
        side: [
            {
                label: "pi",
                href: "#/numbers/3/14",
            },
            {
                label: "e",
                href: "#/numbers/2/7",
            },
            {
                label: "integer",
                children: [
                    {
                        label: "natural",
                        children: [
                            {
                                label: "even",
                                href: "#/numbers/4/6",
                            },
                            {
                                label: "prime",
                                href: "#/numbers/5/7",
                            },
                        ],
                    },
                    {
                        label: "minus three",
                        href: "#/numbers/_/3",
                    },
                ],
            },
        ],
    },
};
</script>

<style>
    i{
        display: none;
    }
</style>