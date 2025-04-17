function toggleGoal(el) {
  el.classList.toggle('selected');
  const selectedGoals = Array.from(document.querySelectorAll('.goal-card.selected')).map(e => e.textContent.trim());
  document.getElementById('marketingGoals').value = selectedGoals.join(', ');
}

const form = document.querySelector("form");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const formData = new FormData(form);

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset(); 
      successMessage.style.display = "block"; 
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 5000); 
    } else {
      alert("Oops! Something went wrong.");
    }
  })
  .catch(error => {
    alert("Error submitting the form.");
    console.error(error);
  });
});
