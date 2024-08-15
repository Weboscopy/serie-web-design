const inputs = document.querySelectorAll("input")
const password = document.querySelector("#password")
const confirm_password = document.querySelector("#confirm_password")
const submitBtn = document.querySelector("button")


const initApp = () => {

    const expressions = {
        username: /^[A-Za-z\d]{5,10}$/,
        password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
        phone: /^(0|\+33)[1-9]([-.: ]?[0-9]{2}){4}$/,
    }

    const form = {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        phone: ""
    }

    function validate(field, regex) {
        if (field.name !== "confirm_password") {
            if (regex.test(field.value)) {
                field.parentElement.classList.remove("invalid")
                form[field.name] = field.value
            } else {
                field.parentElement.classList.add("invalid")
                form[field.name] = ""
            }
        }

        if (password.value !== confirm_password.value && (password.value !== "" || confirm_password.value !== "")) {
            confirm_password.parentElement.classList.add("invalid")
            form.confirm_password = ""
        } else {
            confirm_password.parentElement.classList.remove("invalid")
            form.confirm_password = confirm_password.value
        }


        if (Object.values(form).every(val => val !== "")) {
            submitBtn.disabled = false
        }

    }

    inputs.forEach(input => {
        input.addEventListener("keyup", (e) => {
            validate(e.target, expressions[e.target.attributes.name.value])
        })
    })

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault()
        if (Object.values(form).every(val => val !== "")) {
            console.log(form)
            document.querySelector("h2").classList.add("valid")
        }
    })

}

document.addEventListener("DOMContentLoaded", initApp)