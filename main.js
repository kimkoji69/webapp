// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {

  // Handle "Order Now" buttons
  const orderButtons = document.querySelectorAll(".btn-order");
  orderButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you! Your order request has been noted. We will contact you soon.");
      // Future: redirect to order form page
      // window.location.href = "order-form.html";
    });
  });

  // Handle "Read More" buttons
  const readButtons = document.querySelectorAll(".btn-read");
  readButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("This would take you to the full blog post. Coming soon!");
      // Future: redirect to blog post page
      // window.location.href = "blog-post.html";
    });
  });

  // Handle "Join/Sign Up" buttons
  const joinButtons = document.querySelectorAll(".btn-join");
  joinButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for your interest! Please fill the contact form to get involved.");
      window.location.href = "contact.html"; // redirect to contact page
    });
  });

  // Handle "Donate Now" buttons
  const donateButtons = document.querySelectorAll(".btn-donate");
  donateButtons.forEach(button => {
    button.addEventListener("click", () => {
      alert("Thank you for your support! Redirecting to the donation page.");
      window.location.href = "donate.html"; // future donation page
    });
  });

});