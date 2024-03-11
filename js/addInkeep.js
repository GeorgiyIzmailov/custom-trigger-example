const inkeepButton = document.getElementById("inkeepButton");

const inkeepDiv = document.createElement("div");
inkeepDiv.id = "inkeepModal";
inkeepDiv.style.position = 'absolute';
document.body.appendChild(inkeepDiv);

// Embed the widget using the `Inkeep.embed()` function.
const config = {
  componentType: "CustomTrigger",
  targetElement: inkeepDiv,
  properties: {
    onClose: undefined,
    onOpen: undefined,
    baseSettings: {
      apiKey: "YOUR_API_KEY",
      integrationId: "YOUR_INTEGRATION_ID",
      organizationId: "YOUR_ORGANIZATION_ID",
      primaryBrandColor: "#26D6FF", // your brand color, the widget color scheme is derived from this
      organizationDisplayName: "Inkeep",
      // ...optional settings
    },
    modalSettings: {
      // optional settings
    },
    searchSettings: {
      // optional settings
    },
    aiChatSettings: {
      // optional settings
      quickQuestions: [
        "Example question 1?",
        "Example question 2?",
        "Example question 3?",
      ],
    },
  },
};

const inkeepWidget = Inkeep().embed(config);

inkeepButton.addEventListener("click", () => {
  inkeepWidget.render({
    isOpen: true,
    ...config,
  });
});

inkeepButton.addEventListener("mouseup", () => {
  inkeepWidget.render({
    isOpen: false,
    ...config,
  });
});
