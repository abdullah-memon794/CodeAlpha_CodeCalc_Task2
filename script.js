let str = "";
const inputField = document.querySelector('.input');
const buttons = document.querySelectorAll('.btn');

buttons.forEach((btn) => {

    btn.addEventListener('click', (e) => {

        const value = e.target.innerText;

        if (value === '=') {
            try {
                if (str.trim() !== "") {
                    str = eval(str).toString();
                    inputField.value = str;
                }
            } catch (error) {
                inputField.value = "Error";
                str = "";
            }

        } else if (value === 'C') {
            str = "";
            inputField.value = "";

        } else if (value === '%') {
            try {
                str = (eval(str) / 100).toString();
                inputField.value = str;
            } catch {
                inputField.value = "Error";
                str = "";
            }
            
        } else {
            str += value;
            inputField.value = str;
        }
    });
});
