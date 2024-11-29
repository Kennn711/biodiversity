//Filter Category
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const boxContainer = document.querySelector(".box-container");

  // Cek apakah ada filter yang dipilih sebelumnya di localStorage
  const lastFilter = localStorage.getItem("selectedFilter");

  // Jika tidak ada filter yang dipilih atau filter selain 'all', setel filter ke 'all'
  if (!lastFilter || lastFilter !== "all") {
    localStorage.setItem("selectedFilter", "all");
  }

  // Apply active class to the correct button based on the saved filter
  filterButtons.forEach((button) => {
    if (
      button.getAttribute("data-filter") ===
      localStorage.getItem("selectedFilter")
    ) {
      button.classList.add("active");
    }
  });

  // Apply the correct filter to the boxes and layout change
  const filter = localStorage.getItem("selectedFilter");
  if (filter !== "all") {
    boxContainer.classList.add("filtered");
  } else {
    boxContainer.classList.remove("filtered");
  }

  document.querySelectorAll(".box").forEach((box) => {
    if (filter === "all") {
      // Show all boxes when 'All' is selected
      box.classList.add("show");
      box.style.display = "block";
    } else if (box.classList.contains(filter)) {
      // Only show boxes that match the selected filter
      box.classList.add("show");
      box.style.display = "block";
    } else {
      // Hide boxes that do not match the selected filter
      box.classList.remove("show");
      box.style.display = "none";
    }
  });

  // Add event listeners for button clicks
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Remove active class from all buttons
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      // Add active class to clicked button
      button.classList.add("active");

      // Get filter value
      const filter = button.getAttribute("data-filter");
      localStorage.setItem("selectedFilter", filter); // Store the selected filter

      // Show/Hide boxes based on filter
      document.querySelectorAll(".box").forEach((box) => {
        if (filter === "all") {
          box.classList.add("show");
          box.style.display = "block";
        } else if (box.classList.contains(filter)) {
          box.classList.add("show");
          box.style.display = "block";
        } else {
          box.classList.remove("show");
          box.style.display = "none";
        }
      });

      // If filter is not 'all', apply flex layout to box container
      if (filter !== "all") {
        boxContainer.classList.add("filtered");
      } else {
        boxContainer.classList.remove("filtered");
      }
    });
  });
});

//Open Chabot
document.addEventListener("DOMContentLoaded", () => {
  const exploreButtons = document.querySelectorAll(".box button");
  const chatbotCard = document.querySelector(".chatbot-card");
  const closeButton = document.querySelector(".chatbot-header .close-btn");

  exploreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chatbotCard.classList.add("show"); // Show the chatbot card
    });
  });

  closeButton.addEventListener("click", () => {
    chatbotCard.classList.remove("show"); // Hide the chatbot card
  });
});

//Function Send Message
function sendMessage() {
  const inputField = document.getElementById("chatbotInput");
  const chatbotBody = document.getElementById("chatbotBody");
  const userMessage = inputField.value.trim();

  if (userMessage !== "") {
    // Create a chat bubble for user message
    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.innerText = userMessage;
    chatbotBody.appendChild(userBubble);

    // Clear the input field
    inputField.value = "";

    // Simulate chatbot response after a short delay
    setTimeout(() => {
      const botBubble = document.createElement("div");
      botBubble.className = "chat-bubble bot";
      chatbotBody.appendChild(botBubble);

      // Generate bot response and animate it
      typeWriterEffect(botBubble, generateBotResponse(userMessage));
    }, 500);

    // Scroll to the latest message
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

// Function to generate chatbot response
function generateBotResponse(userMessage) {
  if (userMessage.toLowerCase().includes("hello")) {
    return "Hi there! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (userMessage.toLowerCase().includes("what is sino?")) {
    return "inspired by the Japanese movie Naruto, which has a character named Sino, he has the power to control insects.";
  } else {
    return "I'm here to help with any questions you have!";
  }
}

// Typing effect function
function typeWriterEffect(element, text, speed = 50) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += `<span>${text[i]}</span>`;
      i++;
    } else {
      clearInterval(typingInterval); // Stop typing effect
    }
  }, speed);
}

// Function to toggle the chatbot visibility
function toggleChatbot() {
  const chatbotCard = document.querySelector(".chatbot-card");
  chatbotCard.classList.toggle("show");
}
