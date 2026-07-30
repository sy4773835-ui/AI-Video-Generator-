async function generateVideo() {
  const prompt = document.getElementById("prompt").value;
  const result = document.getElementById("result");

  if (!prompt.trim()) {
    result.innerHTML = "<p>⚠️ कृपया पहले अपना वीडियो आइडिया लिखें।</p>";
    return;
  }

  result.innerHTML = "<p>⏳ AI सोच रहा है...</p>";

  // अभी Demo
  setTimeout(() => {
    result.innerHTML = `
      <h3>🎬 AI Video Plan</h3>
      <p><b>Idea:</b> ${prompt}</p>
      <p>✅ अगले स्टेप में Gemini AI जोड़ेंगे, जिससे Script अपने आप बनेगी।</p>
    `;
  }, 1500);
}
