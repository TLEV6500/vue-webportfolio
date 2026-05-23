import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // 1. Only allow POST requests
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method Not Allowed" });
    }

    const { name, email, message, token } = req.body;
    const secretKey = process.env.RECAPTCHA_V3_SECRET_KEY;

    try {
        // 2. Verify the reCAPTCHA token with Google using native fetch
        const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;
        const recaptchaRes = await fetch(googleVerifyUrl, { method: "POST" });
        const recaptchaData = await recaptchaRes.json();

        // Google recommends a score threshold of 0.5
        if (!recaptchaData.success || recaptchaData.score < 0.5) {
            return res.status(403).json({ error: "Bot activity detected." });
        }

        // 3. Configure Nodemailer (Example using Gmail)
        // Note: If using Gmail, you MUST use an "App Password", not your normal password
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_APP_PASSWORD,
            },
        });

        // 4. Draft the email
        const mailOptions = {
            from: process.env.EMAIL_USER, // Your email
            to: process.env.EMAIL_USER, // Send it to yourself
            replyTo: email, // If you hit "reply", it goes to the client
            subject: `New Portfolio Inquiry from ${name}`,
            text: `You have received a new transmission.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };

        // 5. Send it
        await transporter.sendMail(mailOptions);

        return res
            .status(200)
            .json({ success: true, message: "Transmission sent!" });
    } catch (error) {
        console.error("Backend Error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}
