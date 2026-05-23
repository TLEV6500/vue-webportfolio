<script setup>
import profilePic from "../assets/profile_pic.png";
</script>

<template>
    <!-- Contact Section -->
    <section
        id="contact"
        class="py-5 px-4 px-md-5 bg-surface-high position-relative overflow-hidden"
    >
        <div class="bg-text-tlev">TLEV</div>
        <div class="container-fluid position-relative z-1">
            <div class="row g-5">
                <div class="col-lg-6">
                    <h2 class="display-2 fw-bold mb-5 tracking-tighter lh-1">
                        Let’s build something
                        <div class="text-primary">well-crafted.</div>
                    </h2>

                    <div class="d-flex align-items-center gap-4 mb-5">
                        <div
                            class="position-relative square-80px bg-surface-low border border-outline-variant overflow-hidden"
                        >
                            <img
                                :src="profilePic"
                                alt="Tim Profile"
                                class="position-absolute bottom-0 img-fluid w-100 grayscale object-fit-cover"
                                referrerpolicy="no-referrer"
                            />
                        </div>
                        <div>
                            <p
                                class="text-75crem font-display fw-bold text-uppercase tracking-widest mb-1"
                            >
                                Tim Leobert E. Villacin
                            </p>
                            <p
                                class="text-60crem text-on-surface-variant text-uppercase tracking-widest"
                            >
                                Philippines, Earth (UTC +8)
                            </p>
                        </div>
                    </div>

                    <div class="row gy-5">
                        <div class="col-12">
                            <p class="form-label-brutal mb-2">
                                Electronic Mail
                            </p>
                            <p class="display-6 fw-bold text-primary mb-0">
                                timleo.vil@gmail.com
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="form-label-brutal mb-2">
                                Version Control
                            </p>
                            <p class="fs-4 fw-medium mb-0">
                                <a
                                    href="https://github.com/TLEV6500"
                                    class="text-decoration-none text-primary contact-link"
                                    >github/TLEV6500</a
                                >
                            </p>
                        </div>
                        <div class="col-sm-6">
                            <p class="form-label-brutal mb-2">Network</p>
                            <p class="fs-4 fw-medium mb-0">
                                <a
                                    href="https://www.linkedin.com/in/tim-leobert-villacin-2484b0226/"
                                    class="text-decoration-none text-primary contact-link"
                                >
                                    linkedin/tim-leobert-villacin
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="contact-form-container">
                        <form action="#" onsubmit="return false;">
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >What is your name?</label
                                >
                                <input
                                    type="text"
                                    class="form-control form-control-brutal"
                                    placeholder="A successful name (yours)"
                                />
                            </div>
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >Digital Address</label
                                >
                                <input
                                    type="email"
                                    class="form-control form-control-brutal"
                                    placeholder="email@success.com"
                                />
                            </div>
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >The Mission Scope</label
                                >
                                <textarea
                                    class="form-control form-control-brutal"
                                    rows="4"
                                    placeholder="Tell me about your project or inquiry..."
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                class="btn btn-primary-brutal rounded-0 w-100 py-4 fs-5 d-flex align-items-center justify-content-center gap-3"
                            >
                                Send Transmission
                                <font-awesome-icon
                                    icon="fa-solid fa-paper-plane"
                                    class="w-5 h-5"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
