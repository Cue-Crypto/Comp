const form = document.getElementById("videoForm");
const loading = document.getElementById("loading");
const result = document.getElementById("result");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Show loading animation
  loading.classList.remove("hidden");
  result.classList.add("hidden");

  setTimeout(() => {
    // Simulate AI video generation delay
    loading.classList.add("hidden");
    result.classList.remove("hidden");
  }, 3000); // simulate 3-second "generation"
});
