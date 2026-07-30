async function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (!prompt.trim()) {
    result.innerHTML = "⚠️ पहले अपना वीडियो आइडिया लिखें।";
    return;
  }

  result.innerHTML = "⏳ AI Script बना रहा है...";

  try {
    const response = await fetch("/.netlify/functions/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.error) {
      result.innerHTML = "❌ " + data.error;
      return;
    }

    const text =
      data.candidates?.[0]?.content?.parts?.[0]?.text ||
      "कोई उत्तर नहीं मिला।";

    result.innerHTML = `
      <h3>🎬 AI Script</h3>
      <pre style="white-space:pre-wrap;">${text}</pre>
    `;

  } catch (err) {
    result.innerHTML = "❌ Error: " + err.message;
  }
}
