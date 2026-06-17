let form = document.getElementById('form');
let textArea = document.getElementById('textarea');
let button = document.getElementById('button');
let loadingMessage = document.getElementById('loading');
let errorMessage = document.getElementById('error');
let successMessage = document.getElementById('success');

async function handleFormSubmit(event) {
    event.preventDefault();
    disable(button);
    disable(textArea);
    show(loadingMessage);
    hide(errorMessage);

    try{
        await submitForm(textArea.value);
        hide(form);
        show(successMessage);
    }
    catch (error) {
        show(errorMessage);
        errorMessage.textContent = error.message;
    } finally {
        hide(loadingMessage);
         enable(button);
         enable(textArea);
    }
}

function handleTextareaChange() {
    if (textArea.value.length == 0) { 
        disable(button);
    } else {
       enable(button);
    }
}

function disable(el) {
    el.disabled = true;
}

function enable(el) {
    el.disabled = false;
}

function hide(el) {
    el.style.display = 'none';
}

function show(el) {
    el.style.display = 'block';
}

function submitForm(ans) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(ans.toLowerCase() === 'dhaka') {
                resolve();
            } else {
                reject(new Error('Incorrect answer, Try again!'));
            }
        }, 1500);
    })
}

 form.addEventListener('submit', handleFormSubmit);

textArea.addEventListener('input', handleTextareaChange);