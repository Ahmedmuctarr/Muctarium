document.getElementById("contact-form").addEventListener("submit", async function (e) {
e.preventDefault();

const form = e.target;
const formData = new FormData(form);
const params = new URLSearchParams();

for (const [key, value] of formData.entries()) {
    params.append(key, value);
}

const submitBtn = form.querySelector("button[type='submit']");
submitBtn.disabled = true;
submitBtn.textContent = "Sending Email...";

// Replace with your own Google Apps Script Web App URL
const scriptURL = "https://script.google.com/macros/s/AKfycbyDcI0elu-OzROhYzQJmpCoctYIFKKypvvPBWZXrTRJZlFo-0_Xq8Cao8RLvi3ZKQERkA/exec";

try {
    const response = await fetch(scriptURL, {
    method: "POST",
    body: params,
    });

    const resultText = await response.text();
    CustomAlert.showPopup("✅ Message sent successfully!", "success");
    form.reset();
} catch (error) {
    CustomAlert.showPopup("❌ Failed to send message. Please try again.", "error");
}finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    }
});
