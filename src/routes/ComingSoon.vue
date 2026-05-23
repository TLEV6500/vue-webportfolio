<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
    <main
        class="min-vh-100 d-flex flex-column justify-content-center align-items-center position-relative overflow-hidden grid-pattern"
    >
        <div class="bg-text-tlev text-uppercase">WIP</div>

        <div class="container text-center position-relative z-1 px-4">
            <span
                class="text-75crem ls-40crem font-display text-primary fw-bold tracking-widest text-uppercase d-block mb-3"
            >
                <font-awesome-icon icon="fa-solid fa-wrench" class="me-2" />
                Work in Progress
            </span>

            <h1 class="display-1 fw-bold tracking-tighter mb-4">Coming Soon</h1>

            <p
                class="description-large text-on-surface-variant fs-5 mb-5 mx-auto max-w-700"
            >
                This section of the platform is currently being engineered.
                Check back a little later to see the deployed results.
            </p>

            <RouterLink
                to="/"
                class="text-decoration-none btn-brutal btn-primary-brutal d-inline-flex align-items-center gap-3"
            >
                <font-awesome-icon
                    icon="fa-solid fa-arrow-right"
                    style="transform: rotate(180deg)"
                />
                Return to Base
            </RouterLink>
        </div>
    </main>
</template>
