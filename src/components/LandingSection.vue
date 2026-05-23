<script setup>
import profilePic from "../assets/profile_pic.png";
</script>

<template>
    <!-- Hero Section | #landing -->
    <section
        id="landing"
        class="min-vh-100 d-flex align-items-center position-relative overflow-hidden pt-5 px-4 px-md-5"
    >
        <div
            class="position-absolute inset-0 grid-pattern opacity-50 w-100 h-100"
        ></div>
        <div class="container-fluid mt-5">
            <div class="row align-items-center gy-5">
                <div class="col-lg-8">
                    <span
                        class="text-small d-inline-block px-3 py-1 bg-surface-high text-primary font-display fw-bold tracking-widest text-uppercase mb-4"
                    >
                        Software Architect & Designer
                    </span>
                    <h1 class="display-1 fw-bold mb-4 tracking-tighter lh-1">
                        I build bridges between
                        <div class="text-primary fst-italic">
                            complex systems
                        </div>
                        and beautiful interfaces.
                    </h1>
                    <p
                        class="max-w-700 text-on-surface-variant fs-4 fw-light mb-5 max-w-2xl lh-base"
                    >
                        I’m a lifelong learner, a tech enthusiast, and a coffee
                        lover based in the Philippines. From architecting
                        collaborative IDEs to brewing the perfect Moka pot
                        (coffee), I am obsessed with the craft of building
                        systems that are as robust as they are visually
                        compelling.
                    </p>
                    <div class="d-flex flex-wrap gap-3">
                        <button
                            class="btn btn-primary-brutal rounded-0 px-5 py-3 fs-6"
                        >
                            View My Work
                        </button>
                        <a
                            href="https://drive.google.com/file/d/1X1G1xQUcT-ikCAyDkMOOE_7GjUPdO0TK/view?usp=sharing"
                            class="btn btn-outline-brutal rounded-0 px-5 py-3 fs-6"
                        >
                            Read My Resume
                        </a>
                    </div>
                </div>
                <div class="col-lg-4 d-flex justify-content-center">
                    <div class="max-w-400 portrait-container w-100">
                        <div class="portrait-corner-tr"></div>
                        <div class="portrait-corner-bl"></div>
                        <div class="bg-surface-low overflow-hidden">
                            <img
                                :src="profilePic"
                                alt="Tim Leobert E. Villacin"
                                class="img-fluid w-100 grayscale brightness-90 contrast-125 transition-all duration-700 hover-color"
                                referrerpolicy="no-referrer"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
