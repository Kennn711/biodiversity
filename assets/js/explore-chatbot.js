// FILTER BUTTON EXPLORE //
const insectDetails = {
  Ladybug:
    "Ladybugs are small, colorful beetles known for their red or orange bodies with black spots. They are beneficial insects that help control aphid populations.",
  DragonFly:
    "Dragonflies are large, agile insects with long, slender bodies and two pairs of wings. They are skilled predators, primarily feeding on other flying insects like mosquitoes.",
  Spider:
    "Spiders are arachnids with eight legs, known for spinning webs to catch prey. They play a crucial role in controlling insect populations.",
  Mantis:
    "Mantis is a predatory insect known for its distinctive prayer-like posture and skilled hunting abilities, preying on various insects and playing a key role in natural pest control.",
  Springtail:
    "Springtails are tiny, soil-dwelling insects known for their ability to jump using a specialized appendage, playing a vital role in decomposing organic matter.",
  Housefly:
    "Houseflies are common insects known for spreading diseases, feeding on waste, and playing a role in organic matter decomposition.",
  Termite:
    "Termites are social insects that feed on wood and plant matter, playing key roles in decomposition and nutrient recycling but often causing structural damage.",
  Earthwombs:
    "Earthworms are decomposers that break down organic matter, enriching the soil and improving its structure for plant growth.",
  Honeybee:
    "Honeybees are social insects known for producing honey and pollinating plants, vital for ecosystems and agriculture.",
  Monarch:
    "Monarch butterflies are iconic migratory insects known for their vibrant orange wings and long journeys across North America.",
  Hoverfly:
    "Hoverflies are pollinating insects resembling bees or wasps, known for their ability to hover in mid-air and their ecological role in controlling pests.",
  Lacewing:
    "Lacewing is a predatory insect known for its delicate, translucent wings and its role in controlling pest populations by feeding on aphids, caterpillars, and other harmful insects.",
};

function handleExploreClick(insectName) {
  const chatbotBody = document.getElementById("chatbotBody");
  const detail = insectDetails[insectName];

  chatbotBody.innerHTML = "";

  if (detail) {
    const botBubble = document.createElement("div");
    botBubble.className = "chat-bubble bot";
    chatbotBody.appendChild(botBubble);

    chatbotBody.scrollTop = chatbotBody.scrollHeight;

    typeWriterEffect(botBubble, `${insectName}: ${detail}`);
  } else {
    alert("No details available for this insect.");
  }
}

function typeWriterEffect(element, text) {
  let i = 0;
  element.innerHTML = "";
  const typingSpeed = 100;

  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, typingSpeed);
    }
  }

  type();
}

document.querySelectorAll(".box button").forEach((button) => {
  button.addEventListener("click", function () {
    const insectName =
      this.closest(".box").querySelector(".subjudul").innerText;
    handleExploreClick(insectName);
  });
});

// FILTER BUTTON CATEGORY
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const boxContainer = document.querySelector(".box-container");

  const lastFilter = localStorage.getItem("selectedFilter");

  if (!lastFilter || lastFilter !== "all") {
    localStorage.setItem("selectedFilter", "all");
  }

  filterButtons.forEach((button) => {
    if (
      button.getAttribute("data-filter") ===
      localStorage.getItem("selectedFilter")
    ) {
      button.classList.add("active");
    }
  });

  const filter = localStorage.getItem("selectedFilter");
  if (filter !== "all") {
    boxContainer.classList.add("filtered");
  } else {
    boxContainer.classList.remove("filtered");
  }

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

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.getAttribute("data-filter");
      localStorage.setItem("selectedFilter", filter);

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

      if (filter !== "all") {
        boxContainer.classList.add("filtered");
      } else {
        boxContainer.classList.remove("filtered");
      }
    });
  });
});

// OPEN CHATBOT
document.addEventListener("DOMContentLoaded", () => {
  const exploreButtons = document.querySelectorAll(".box button");
  const chatbotCard = document.querySelector(".chatbot-card");
  const closeButton = document.querySelector(".chatbot-header .close-btn");

  exploreButtons.forEach((button) => {
    button.addEventListener("click", () => {
      chatbotCard.classList.add("show");
    });
  });

  closeButton.addEventListener("click", () => {
    chatbotCard.classList.remove("show");
  });
});

// SEND MESSAGE CHATBOT
function sendMessage() {
  const inputField = document.getElementById("chatbotInput");
  const chatbotBody = document.getElementById("chatbotBody");
  const userMessage = inputField.value.trim();

  if (userMessage !== "") {
    const userBubble = document.createElement("div");
    userBubble.className = "chat-bubble user";
    userBubble.innerText = userMessage;
    chatbotBody.appendChild(userBubble);

    inputField.value = "";

    setTimeout(() => {
      const botBubble = document.createElement("div");
      botBubble.className = "chat-bubble bot";
      chatbotBody.appendChild(botBubble);

      typeWriterEffect(botBubble, generateBotResponse(userMessage));
    }, 500);

    chatbotBody.scrollTop = chatbotBody.scrollHeight;
  }
}

// KEYPRESS TOMBOL ENTER
document
  .getElementById("chatbotInput")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendMessage();
    }
  });

function generateBotResponse(userMessage) {
  if (userMessage.toLowerCase().includes("hello")) {
    return "Hi there! How can I assist you today?";
  } else if (userMessage.toLowerCase().includes("bye")) {
    return "Goodbye! Have a great day!";
  } else if (userMessage.toLowerCase().includes("what is sino?")) {
    return "inspired by the Japanese movie Naruto, which has a character named Shino, he has the power to control insects.";
  } else if (userMessage.toLowerCase().includes("what is biodiversity?")) {
    return "Biodiversity is vital for ecosystem stability and provides services like air purification, water filtration, and soil fertility. It includes all living organisms, from the smallest microbes to large animals and plants.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are the main types of biodiversity?")
  ) {
    return "Species diversity is the variety of different species in an area, Genetic diversity refers to the variation of genes within a species, Ecosystem diversity includes the range of different habitats and ecological processes.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("how does climate change affect biodiversity?")
  ) {
    return "For instance, coral reefs are dying due to ocean warming (coral bleaching). Animals unable to adapt to rapid climate shifts may lose their habitats or food sources.";
  } else if (
    userMessage.toLowerCase().includes("what is insect biodiversity?")
  ) {
    return "Insects are the most diverse group of organisms on Earth, representing about 80% of all known species. They are found in nearly every habitat, playing critical roles in pollination, decomposition, and food webs.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("why are insects important for biodiversity?")
  ) {
    return "Insects are the most diverse group of organisms on Earth, representing about 80% of all known species. They are found in nearly every habitat, playing critical roles in pollination, decomposition, and food webs.";
  } else if (
    userMessage.toLowerCase().includes("what are pollinator insects?")
  ) {
    return "Common pollinators include bees, butterflies, moths, and some beetles. These insects are crucial for the reproduction of many plants, including food crops.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what threats do pollinator insects face?")
  ) {
    return "For example, the widespread use of neonicotinoid pesticides has been linked to the decline in bee populations worldwide.";
  } else if (
    userMessage.toLowerCase().includes("what are decomposer insects?")
  ) {
    return "Examples include dung beetles, termites, and certain fly species. They play a vital role in maintaining soil fertility and cleaning up dead material.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("how do decomposer insects benefit ecosystems?")
  ) {
    return "Dung beetles bury animal feces, enhancing soil aeration and nutrient availability, while maggots help decompose dead animals.";
  } else if (userMessage.toLowerCase().includes("what are predator insects?")) {
    return "Ladybugs, for instance, feed on aphids, protecting plants from damage. Dragonflies consume mosquitoes, benefiting humans by reducing disease vectors.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("how do predator insects help agriculture?")
  ) {
    return "Predators like lacewings and wasps protect crops by eating harmful pests, making them important allies in integrated pest management.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("can one insect belong to more than one category?")
  ) {
    return "This versatility highlights the complex roles insects play in ecosystems, contributing to their resilience.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("how do humans depend on these insect categories?")
  ) {
    return "Without these insects, food production would decline, ecosystems would become imbalanced, and waste would accumulate.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("how can we protect these insect categories?")
  ) {
    return "For instance, planting wildflowers supports pollinators, leaving natural areas undisturbed benefits decomposers, and avoiding overuse of pesticides allows predators to thrive.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are ladybugs, and how do they benefit plants?")
  ) {
    return "Ladybugs are small, colorful beetles with red or orange bodies and black spots. They help control aphid populations by eating them. A ladybug can consume up to 50 aphids a day. This natural pest control reduces the need for pesticides.";
  } else if (
    userMessage
      .toLowerCase()
      .includes(
        "what are dragonflies, and what role do they play in controlling pests?"
      )
  ) {
    return "Dragonflies are large, agile insects with long, slender bodies and two pairs of wings. They are skilled predators, primarily feeding on other flying insects like mosquitoes. Their presence helps control pest populations naturally.";
  } else if (
    userMessage
      .toLowerCase()
      .includes(
        "what are spiders, and how do they help control insect populations?"
      )
  ) {
    return "Spiders are arachnids with eight legs, known for spinning webs to catch prey. They play a crucial role in controlling insect populations by capturing and feeding on various insects.";
  } else if (
    userMessage
      .toLowerCase()
      .includes(
        "what are springtails, and what role do they play in ecosystems?"
      )
  ) {
    return "Springtails are tiny, soil-dwelling insects known for their ability to jump using a specialized appendage. They play a vital role in decomposing organic matter, helping recycle nutrients back into the soil.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are houseflies, and how do they impact the environment?")
  ) {
    return "Houseflies are common insects known for spreading diseases and feeding on waste. They also play a role in decomposing organic matter, helping break down decaying substances in the environment.";
  } else if (
    userMessage
      .toLowerCase()
      .includes(
        "what are hoverflies, and what role do they play in ecosystems?"
      )
  ) {
    return "Hoverflies are pollinating insects that resemble bees or wasps. They are known for their ability to hover in mid-air and play an ecological role in controlling pests by feeding on aphids and other harmful insects.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are termites, and what is their impact on ecosystems?")
  ) {
    return "Termites are social insects that feed on wood and plant matter. They play a key role in decomposition and nutrient recycling, but they can also cause structural damage to buildings by consuming wood.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are monarch butterflies, and what makes them unique?")
  ) {
    return "Monarch butterflies are iconic migratory insects known for their vibrant orange wings. They are unique for their long journeys across North America, migrating thousands of miles to find suitable breeding grounds.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("what are honeybees, and why are they important?")
  ) {
    return "Honeybees are social insects known for producing honey and pollinating plants. They are vital for ecosystems and agriculture because they help pollinate many crops, supporting food production and biodiversity.";
  } else if (
    userMessage.toLowerCase().includes("what is the mantis known for?")
  ) {
    return "The mantis is known for its distinctive prayer-like posture, skilled hunting abilities, and role in natural pest control by preying on various insects.";
  } else if (
    userMessage.toLowerCase().includes("why is the mantis a predator?")
  ) {
    return "The mantis is a predator because it hunts insects using sharp reflexes, powerful forelegs to grasp prey, and excellent camouflage to ambush its targets effectively.";
  } else if (
    userMessage.toLowerCase().includes("what are lacewings known for?")
  ) {
    return "Lacewings are known for their delicate, lace-like wings and their larvae, which are effective predators of pests like aphids.";
  } else if (
    userMessage
      .toLowerCase()
      .includes("why are lacewings beneficial to gardens?")
  ) {
    return "Lacewings are beneficial to gardens because their larvae feed on harmful pests, such as aphids and mites, helping to control infestations naturally.";
  } else {
    return "I'm here to help with any questions you have!";
  }
}

function typeWriterEffect(element, text, speed = 50) {
  let i = 0;
  const typingInterval = setInterval(() => {
    if (i < text.length) {
      element.innerHTML += `<span>${text[i]}</span>`;
      i++;
    } else {
      clearInterval(typingInterval);
    }
  }, speed);
}

function toggleChatbot() {
  const chatbotCard = document.querySelector(".chatbot-card");
  chatbotCard.classList.toggle("show");
}
