<script setup>
import { ref } from "vue";
import { useReCaptcha } from "vue-recaptcha-v3";
import profilePic from "../assets/profile_pic.png";

// 1. Define the reactive state for your form inputs
// These automatically bind to your <input v-model="..."> elements
const name = ref("");
const email = ref("");
const message = ref("");

// 2. Initialize the reCAPTCHA composable
const { executeRecaptcha, recaptchaLoaded } = useReCaptcha();

// 3. Handle the form submission
const handleTransmission = async (evt) => {
    // Note: Because you used @submit.prevent in the template,
    // Vue automatically prevents the default page reload.
    // evt is implicitly passed, but we don't strictly need to check it here.

    console.log("Initiating transmission sequence...");

    try {
        // --- RECAPTCHA LOGIC ---
        // Ensure the Google script is loaded
        await recaptchaLoaded();

        // Execute the invisible check. 'contact' is the action label for your admin dashboard.
        const token = await executeRecaptcha("contact");

        if (!token) {
            alert("Security clearance failed. Please try again.");
            return;
        }

        // --- GATHER FORM DATA ---
        // We pull the current .value from our refs to build the JSON payload
        const payload = {
            name: name.value,
            email: email.value,
            message: message.value,
            token: token, // Attach the Google token for backend verification
        };

        console.log("Transmitting payload...", payload);

        // --- SEND REQUEST TO VERCEL API ---
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Failed to send message.");
        }

        // --- CLEANUP ON SUCCESS ---
        // Reset the form fields
        name.value = "";
        email.value = "";
        message.value = "";

        alert("Transmission sent successfully.");
    } catch (error) {
        console.error("Error:", error);
        alert(
            error.message ||
                "An unexpected error occurred during transmission.",
        );
    }
};
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
                        <form @submit.prevent="handleTransmission">
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >What is your name?</label
                                >
                                <input
                                    type="text"
                                    v-model="name"
                                    class="form-control form-control-brutal"
                                    placeholder="A successful name (yours)"
                                    required
                                />
                            </div>
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >Digital Address</label
                                >
                                <input
                                    type="email"
                                    v-model="email"
                                    class="form-control form-control-brutal"
                                    placeholder="email@success.com"
                                    required
                                />
                            </div>
                            <div class="mb-5">
                                <label class="form-label-brutal"
                                    >The Mission Scope</label
                                >
                                <textarea
                                    v-model="message"
                                    class="form-control form-control-brutal"
                                    rows="4"
                                    placeholder="Tell me about your project or inquiry..."
                                    required
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

                            <p
                                class="text-on-surface-variant text-small mt-3 mb-0 text-center"
                                style="opacity: 0.5"
                            >
                                This site is protected by reCAPTCHA and the
                                Google
                                <a
                                    href="https://policies.google.com/privacy"
                                    class="text-on-surface-variant"
                                    >Privacy Policy</a
                                >
                                and
                                <a
                                    href="https://policies.google.com/terms"
                                    class="text-on-surface-variant"
                                    >Terms of Service</a
                                >
                                apply.
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
