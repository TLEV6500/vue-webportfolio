<script setup>
import { RouterLink } from "vue-router";

// Adjust this path based on where you saved projects.json
import projectsData from "../data/projects.json";

// This helper function allows Vite to correctly bundle dynamic image paths
const getImageUrl = (imageName) => {
    return new URL(`../assets/${imageName}`, import.meta.url).href;
};
const appendToBaseUrl = (url) => {
    return import.meta.env.BASE_URL + url;
};
</script>

<template>
    <section id="projects" class="py-5 px-4 px-md-5 bg-surface-low">
        <div class="container-fluid">
            <div
                class="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5 gap-4"
            >
                <div>
                    <span
                        class="text-65crem ls-40crem font-display text-primary fw-bold tracking-widest text-uppercase d-block mb-3"
                    >
                        Portfolio Selected Works
                    </span>
                    <h2 class="display-4 fw-bold tracking-tighter">
                        Here’s what I’m up to...
                    </h2>
                </div>
                <RouterLink
                    to="/projects"
                    class="text-decoration-none text-primary font-display fw-bold text-uppercase tracking-widest fs-6 d-flex align-items-center gap-2 group"
                >
                    View all projects
                    <font-awesome-icon
                        icon="fa-solid fa-arrow-right"
                        class="w-4 h-4 transition-transform"
                    />
                </RouterLink>
            </div>

            <div class="row g-5">
                <div
                    v-for="project in projectsData"
                    :key="project.id"
                    class="col-md-4"
                >
                    <div class="project-card p-0 transition-parent">
                        <div class="project-img-container position-relative">
                            <img
                                :src="getImageUrl(project.image)"
                                :alt="project.alt"
                                class="project-img"
                                referrerpolicy="no-referrer"
                            />
                        </div>

                        <div class="p-4">
                            <h3
                                class="fs-2 mb-3 d-flex justify-content-between align-items-center transition-color"
                            >
                                <RouterLink
                                    :to="project.url"
                                    class="text-reset text-decoration-none"
                                >
                                    {{ project.title }}
                                    <font-awesome-icon
                                        icon="fa-solid fa-square-arrow-up-right"
                                    />
                                </RouterLink>
                            </h3>
                            <p
                                class="description-large text-on-surface-variant fs-5 mb-4"
                            >
                                {{ project.description }}
                            </p>
                            <details class="text-on-surface-variant fs-5 mb-4">
                                <summary>{{ project.summary }}</summary>
                                <span v-if="project.details">{{
                                    project.details
                                }}</span>
                            </details>

                            <div
                                class="extra-tags d-flex flex-wrap align-items-center gap-2 text-uppercase fw-bold text-on-surface-variant tracking-widest mt-auto"
                            >
                                <span
                                    v-for="(
                                        category, index
                                    ) in project.categories"
                                    :key="'cat-' + index"
                                    class="tag"
                                >
                                    {{ category }}
                                </span>

                                <span
                                    v-if="
                                        project.categories.length > 0 &&
                                        project.technologies.length > 0
                                    "
                                    class="text-muted mx-1"
                                    >|</span
                                >

                                <span
                                    v-for="(
                                        tech, index
                                    ) in project.technologies"
                                    :key="'tech-' + index"
                                    class="tag"
                                >
                                    {{ tech }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
