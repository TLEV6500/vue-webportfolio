<script setup>
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps({
    to: {
        type: [String, Object],
        required: true,
    },
});

const isExternal = computed(() => {
    return typeof props.to === "string" && props.to.startsWith("http");
});
</script>

<template>
    <a v-if="isExternal" :href="to" target="_blank" rel="noopener noreferrer">
        <slot />
    </a>

    <RouterLink v-else :to="to">
        <slot />
    </RouterLink>
</template>
