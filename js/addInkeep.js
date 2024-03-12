// Get the button element
const inkeepButton = document.getElementById("inkeepButton");

// Create a new div element to hold the Inkeep modal and set its id and position
const inkeepDiv = document.createElement("div");
inkeepDiv.id = "inkeepModal";
inkeepDiv.style.position = "absolute";
document.body.appendChild(inkeepDiv);

const handleClose = () => {
  inkeepWidget.render({
    ...config,
    isOpen: false,
  });
};

const handleOpen = () => {
  inkeepWidget.render({
    ...config,
    isOpen: true,
  });
}

const config = {
  componentType: "CustomTrigger", // required
  targetElement: inkeepDiv, // required
  properties: {
    isOpen: false, // required
    onClose: handleClose, // required
    onOpen: undefined,
    baseSettings: {
      apiKey: "YOUR_API_KEY", // required
      integrationId: "YOUR_INTEGRATION_ID", // required
      organizationId: "YOUR_ORGANIZATION_ID", // required
      primaryBrandColor: "#26D6FF",
      organizationDisplayName: "Inkeep",
      //... optional base settings
    },
    modalSettings: {
      // optional InkeepModalSettings
    },
    searchSettings: {
      // optional InkeepSearchSettings
    },
    aiChatSettings: {
      // optional InkeepAIChatSettings
      // botAvatarSrcUrl: "/img/inkeep-logo.svg",
      quickQuestions: [
        "Example question 1?",
        "Example question 2?",
        "Example question 3?",
      ],
    },
  },
};

// Embed the widget using the `Inkeep.embed()` function.
const inkeepWidget = Inkeep().embed(config);

// Add event listener to open the Inkeep modal when the button is clicked
inkeepButton.addEventListener("click", handleOpen);