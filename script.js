function toggleGoal(el) {
  el.classList.toggle('selected');
  const selectedGoals = Array.from(document.querySelectorAll('.goal-card.selected')).map(e => e.textContent.trim());
  document.getElementById('marketingGoals').value = selectedGoals.join(', ');
}

const form = document.querySelector("form");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset(); // Clear the form
      successMessage.style.display = "block"; // Show success message
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000); // Hide after 5 seconds
    } else {
      alert("Oops! Something went wrong.");
    }
  })
  .catch(error => {
    alert("Error submitting the form.");
    console.error(error);
  });
});
