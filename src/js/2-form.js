const formData = {
    email: "",
    message: ""
}

const LOCAL_KEY = "feedback-form-state";

const form = document.querySelector(".feedback-form");

form.addEventListener("submit", handleSubmit);
form.addEventListener("input", onUserInput);

function handleSubmit(event) {
    event.preventDefault();

    if (!formData.email || !formData.message) {
        return alert("Fill please all fields")
    }
    console.log(formData);

    localStorage.removeItem(LOCAL_KEY);

    formData.email = "";
    formData.message = "";

    form.elements.email.value = "";
    form.elements.message.value = "";
}

function onUserInput(event) {
    const fieldName = event.target.name;
    formData[fieldName] = event.target.value;
    const json = JSON.stringify(formData);
    localStorage.setItem(LOCAL_KEY, json);
}

const saveData = localStorage.getItem(LOCAL_KEY);

if (saveData) {
    const parseData = JSON.parse(saveData);

    formData.email = parseData.email;
    formData.message = parseData.message;

    form.elements.email.value = formData.email;
    form.elements.message.value = formData.message;
}