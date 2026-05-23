<script setup>
import notebookLmLogo from "../assets/notebooklm-logo.svg";
import obsidianLogo from "../assets/obsidian-logo.png";
</script>

<template>
    <!-- About Section | #tools -->
    <section id="tools" class="py-5 px-4 px-md-5">
        <div class="container-fluid">
            <div class="row g-5">
                <div class="col-lg-4">
                    <span
                        class="text-65crem ls-40crem font-display text-primary fw-bold tracking-widest text-uppercase d-block mb-3"
                    >
                        Personal Toolkit
                    </span>
                    <h2 class="display-5 fw-bold mb-4 tracking-tighter">
                        A life-long learner.
                    </h2>
                    <p class="text-on-surface-variant fs-5 mb-5">
                        My philosophy is simple: master the foundations, then
                        break the rules. I treat my development environment and
                        my coffee bar with the same level of obsessive
                        engineering.
                    </p>
                    <div class="d-flex gap-4">
                        <font-awesome-icon
                            icon="fa-solid fa-terminal"
                            class="text-primary cursor-pointer"
                        ></font-awesome-icon>
                        <font-awesome-icon
                            icon="fa-solid fa-coffee"
                            class="text-primary cursor-pointer"
                        ></font-awesome-icon>
                        <font-awesome-icon
                            icon="fa-solid fa-object-group"
                            class="text-primary cursor-pointer"
                        ></font-awesome-icon>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="row g-4 justify-content-end">
                        <div class="col-md-6">
                            <div
                                class="about-card h-100 d-flex flex-column justify-content-between gap-1"
                            >
                                <div class="icon-container">
                                    <font-awesome-icon
                                        icon="fa-solid fa-book-open"
                                        class="text-primary cursor-pointer"
                                    />
                                </div>
                                <h4 class="text-uppercase tracking-widest fs-5">
                                    Current Learning Tools
                                </h4>
                                <span class="logo-group">
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Calibre_logo_SVG_version.svg/250px-Calibre_logo_SVG_version.svg.png"
                                            alt="calibre logo"
                                            title="Calibre E-Book Management Software"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://cdn.brandfetch.io/idmp1jw9T-/w/400/h/400/theme/dark/icon.jpeg?c=1dxbfHSJFAPEGdCLU4o5B"
                                            alt="affine logo"
                                            title="AFFiNE Knowledge Management Software"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            :src="notebookLmLogo"
                                            alt="notebooklm logo"
                                            title="NotebookLM AI Notebook"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            :src="obsidianLogo"
                                            alt="obsidian logo"
                                            title="Obsidian Bi-Directional Markdown Notes"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/165225155?s=280&v=4"
                                            alt="zen browser logo"
                                            title="Zen Browser"
                                        />
                                    </div>
                                </span>
                                <p
                                    class="text-on-surface-variant small mb-0 mt-1"
                                >
                                    Used to learn much about music, math,
                                    learning, and computer science.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-card h-100">
                                <div class="icon-container">
                                    <font-awesome-icon
                                        icon="fa-solid fa-coffee"
                                    />
                                </div>
                                <h4
                                    class="text-uppercase tracking-widest fs-5 mb-3"
                                >
                                    Current Obsession
                                </h4>
                                <span class="logo-group">
                                    <div class="logo-container">
                                        <img
                                            src="https://raw.githubusercontent.com/graphefruit/Beanconqueror/refs/heads/develop/assets/icon-only.png"
                                            alt="beanconqueror logo"
                                            title="Beanconqueror Brewing Tracker"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Affinity_%28App%29_Logo.svg/1280px-Affinity_%28App%29_Logo.svg.png?_=20251103223217"
                                            alt="affinity logo"
                                            title="Affinity Design Studio"
                                        />
                                    </div>

                                    <div class="logo-container">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/165225155?s=280&v=4"
                                            alt="zen browser logo"
                                            title="Zen Browser"
                                        />
                                    </div>
                                </span>
                                <p
                                    class="text-on-surface-variant small mb-0 mt-1"
                                >
                                    Brewing the best moka pot coffee, designing
                                    visually pleasing posters, textures, and
                                    graphics, and collecting knowledge.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-card h-100">
                                <div class="icon-container">
                                    <font-awesome-icon
                                        icon="fa-solid fa-rocket"
                                        class="text-primary"
                                    />
                                </div>
                                <h4
                                    class="text-uppercase tracking-widest fs-5 mb-3"
                                >
                                    Next Milestones
                                </h4>
                                <span class="logo-group">
                                    <div class="logo-container">
                                        <img
                                            src="https://cdn.brandfetch.io/idyYvrz1wi/w/399/h/399/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1771005438436"
                                            alt="zuitt logo"
                                            title="Zuitt Coding Bootcamp"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVuBJbWcDeQuwSgx1oUf8W7FPq6cAD0IvZ4g&s"
                                            alt="arcanys logo"
                                            title="Arcanys (dream company)"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://cdn.brandfetch.io/id44tJQbVE/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1759066682254"
                                            alt="accenture logo"
                                            title="Accenture (dream company)"
                                            class="p-1"
                                        />
                                    </div>
                                </span>
                                <p
                                    class="text-on-surface-variant small mb-0 mt-1"
                                >
                                    Mustering the confidence, experience, and
                                    skills to become a
                                    <em>professional developer</em>, a
                                    <em>polymath</em> (an expert of many
                                    things), and a coffee entrepreneur.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="about-card h-100">
                                <div class="icon-container">
                                    <font-awesome-icon
                                        icon="fa-solid fa-wrench"
                                        class="text-primary cursor-pointer"
                                    />
                                </div>
                                <h4
                                    class="text-uppercase tracking-widest fs-5 mb-3"
                                >
                                    Current Dev Tools
                                </h4>
                                <span class="logo-group">
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/960px-HTML5_logo_and_wordmark.svg.png?_=20170517184425"
                                            alt="html logo"
                                            title="HTML"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://coywolf.com/wp-content/uploads/2024/11/official-css-logo.webp"
                                            alt="css logo"
                                            title="CSS"
                                            class="scale-200"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
                                            alt="js logo"
                                            title="JavaScript"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Typescript.svg/1280px-Typescript.svg.png"
                                            alt="ts logo"
                                            title="TypeScript"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAoi28pO98bspZibnka355uS8R3fv7WQjTKw&s"
                                            alt="astro logo"
                                            title="Astro"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://images.seeklogo.com/logo-png/44/1/bun-logo-png_seeklogo-443204.png"
                                            alt="bun logo"
                                            title="Bun"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/9/94/Cloudflare_Logo.png"
                                            alt="cloudflare logo"
                                            title="Cloudflare"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://cdn.brandfetch.io/idMNEQh7-0/theme/dark/symbol.svg?c=1bxid64Mup7aczewSAYMX&t=1687779047045"
                                            alt="tailwind logo"
                                            title="TailWind"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://cmscritic.com/ms-content/uploads/2025/05/sanity-logo-icon.png?format=auto&width=32"
                                            alt="sanity logo"
                                            title="Sanity"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://assets.streamlinehq.com/image/private/w_300,h_300,ar_1/f_auto/v1/icons/1/cloudinary-icon-ug0qqy8ms6ozyzy6cntbll.png/cloudinary-icon-hz05evx1htrghud89kpab4.png?_a=DATAiZiuZAA0"
                                            alt="cloudinary logo"
                                            title="Cloudinary"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://avatars.githubusercontent.com/u/18489846?v=4&s=50"
                                            alt="lit logo"
                                            title="Lit Web Components"
                                        />
                                    </div>

                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1280px-Kotlin_Icon.png?_=20210501145042"
                                            alt="kotlin logo"
                                            title="Kotlin"
                                            class="p-1"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Godot_icon.svg/1280px-Godot_icon.svg.png?_=20170822201738"
                                            alt="godot logo"
                                            title="Godot"
                                        />
                                    </div>
                                    <div class="logo-container">
                                        <img
                                            src="https://media.licdn.com/dms/image/v2/C560BAQEQ1Fjc8YgDnw/company-logo_200_200/company-logo_200_200/0/1678909671714/zeddotdev_logo?e=2147483647&v=beta&t=v-LC04GdgMvkirdYLPyBuHjakWZhzDBeqrIPmF73wEU"
                                            alt="zed logo"
                                            title="Zed IDE"
                                        />
                                    </div>
                                    <div class="logo-container bg-dark">
                                        <img
                                            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/android-studio-icon.png"
                                            alt="android studio logo"
                                            title="Android Studio IDE"
                                        />
                                    </div>
                                    <div class="logo-container bg-dark">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8-ARTvzefefw2BBZ92fvUbVhxIg8fdxS8Fw&s"
                                            alt="penpot logo"
                                            title="Penpot Design Studio"
                                            class="scale-120"
                                        />
                                    </div>
                                </span>
                                <p
                                    class="text-on-surface-variant small mb-0 mt-1"
                                >
                                    Currently immersed in the web ecosystem, I
                                    want to build great digital systems and
                                    experiences.
                                </p>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="connect-card">
                                <h4
                                    class="display-6 fw-bold text-uppercase tracking-widest mb-4"
                                >
                                    Connect Digitally
                                </h4>
                                <div class="d-flex flex-column gap-3">
                                    <a
                                        href="https://github.com/TLEV6500"
                                        class="connect-link"
                                        >Github
                                        <font-awesome-icon
                                            class="fs-4"
                                            icon="fa-solid fa-square-arrow-up-right"
                                        />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/tim-leobert-villacin-2484b0226/"
                                        class="connect-link"
                                        >LinkedIn
                                        <font-awesome-icon
                                            class="fs-4"
                                            icon="fa-solid fa-square-arrow-up-right"
                                        />
                                    </a>
                                    <a
                                        href="https://x.com/TimLeoVil"
                                        class="connect-link"
                                        >Twitter
                                        <font-awesome-icon
                                            class="fs-4"
                                            icon="fa-solid fa-square-arrow-up-right"
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
