export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass)
    }
    init() {
        this.events()
    }

    events() {
        if (!this.form) return
        this.form.addEventListener('submit', e => {
            e.preventDefault()
            this.validate(e)
        })
    }

    validate(e) {
        const el = e.target
        const emailInput = el.querySelector('input[name="email"]')
        const passwordInput = el.querySelector('input[name="password"]')

        let error = false

        if (!this.validateEmail(emailInput.value)) {
            emailInput.style.borderColor = 'red'
            error = true
        } else {
            emailInput.style.borderColor = ''
        }

        if (passwordInput.value.length < 3 || passwordInput.value.length > 50) {
            passwordInput.style.borderColor = 'red'
            error = true
        } else {
            passwordInput.style.borderColor = ''
        }

        if (!error) el.submit()
    }

    validateEmail(email) {
        const re = /\S+@\S+\.\S+/
        return re.test(email)
    }
}