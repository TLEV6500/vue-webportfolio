<script setup>
import tlevLogo from "../assets/tlev-logo.png";
</script>

<template>
    <nav
        class="navbar navbar-expand-md navbar-brutal navbar-dark fixed-top px-4 py-3"
    >
        <div class="container-fluid">
            <a
                class="navbar-brand text-white font-display fw-bold tracking-tighter fs-2"
                href="#"
            >
                <div class="logo-group d-inline-block">
                    <img :src="tlevLogo" alt="Logo" />
                </div>
                <h1 class="text-light d-inline-block">TLEV</h1>
            </a>
            <button
                class="navbar-toggler border-0"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
            >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div
                class="navbar-collapse justify-content-center collapse"
                id="navbarNav"
            >
                <ul class="navbar-nav gap-lg-4">
                    <li class="nav-item position-relative">
                        <div
                            class="hover-bg position-absolute top-0 h-100"
                        ></div>
                        <a class="nav-link nav-link-brutal" href="#landing"
                            >Home</a
                        >
                    </li>
                    <li class="nav-item position-relative">
                        <div
                            class="hover-bg position-absolute top-0 h-100"
                        ></div>
                        <a class="nav-link nav-link-brutal" href="#projects"
                            >Projects</a
                        >
                    </li>
                    <li class="nav-item position-relative">
                        <div
                            class="hover-bg position-absolute top-0 h-100"
                        ></div>
                        <a class="nav-link nav-link-brutal" href="#tools"
                            >Tools</a
                        >
                    </li>
                    <li class="nav-item position-relative">
                        <div
                            class="hover-bg position-absolute top-0 h-100"
                        ></div>
                        <a class="nav-link nav-link-brutal" href="#contact"
                            >Contact</a
                        >
                    </li>
                </ul>
            </div>
            <button
                class="btn btn-primary-brutal rounded-0 d-none d-md-block px-4 py-2 fs-6"
            >
                Connect
            </button>
        </div>
    </nav>
</template>
