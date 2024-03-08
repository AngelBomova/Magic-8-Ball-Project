function shakeMagic8Ball() {
    const messages = [
        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Yes",
        "No",
        "Ask again later",
        "Cannot predict now",
        "Don't count on it",
        "Most likely",
        "Outlook not so good",
        "Yes, definitely",
        "No, definitely not",

        "Honestly IDK",
        "Honestly IDK",
        "Honestly IDK",
        "Honestly IDK",
        "Honestly IDK",
        "😵",
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    const answerElement = document.getElementById("answer");
    const whiteSectionElement = document.querySelector(".white-section");
    const windowElement = document.querySelector(".window");
    const containerElement = document.querySelector(".container");

    containerElement.classList.add("deciding");
    windowElement.classList.add("shake-animation");

    setTimeout(() => {
        answerElement.textContent = messages[randomIndex];
        
        
        answerElement.style.top = `${whiteSectionElement.offsetTop}px`;
        answerElement.style.left = `${whiteSectionElement.offsetLeft}px`;

        windowElement.classList.remove("shake-animation");
        containerElement.classList.remove("deciding");
    }, 500);
}
