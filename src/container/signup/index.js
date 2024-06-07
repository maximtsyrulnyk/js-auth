import {Form, REG_EXP_EMAIL, REG_EXP_PASSWORD} from '../../script/form'

class SignupForm extends Form {
    FIELD_NAME = {
        EMAIL: 'email',
        PASSWORD: 'password',
        PASSWOD_AGAIN: 'passwordAgain',
        ROLE: 'role',
        IS_CONFIRM: 'isConfirm',
    }
    FIELD_ERROR = {
        IS_EMPTY: 'Введіть значення в поле',
        IS_BIG: 'Дуже довге значення, приберіть зайве',
        EMAIL: 'Введіть коректне значення e-mail адреси',
        PASSWORD: 'Пароль повинен складатися з не менше ніж 8 символів, включаючи хоча б одну цифру, малу та велику літеру',
        PASSWOD_AGAIN: 'Ваш другий пароль не збігається з першим',
        NOT_CONFIRM: 'Ви не погоджуєтесь з правилами',
        ROLE: 'Ви не обрали роль',
    }

    validate = (name, value) => {
        if(String(value).length < 1) {
            return this.FIELD_ERROR.IS_EMPTY 
        }
        if(String(value).length > 20) {
            return this.FIELD_ERROR.IS_BIG
        }
        if(name === this.FIELD_NAME.EMAIL) {
            if(!REG_EXP_EMAIL.test(String(value))) {
                return this.FIELD_ERROR.EMAIL
            }
        }
        if(name === this.FIELD_NAME.PASSWORD) {
            if(!REG_EXP_PASSWORD.test(String(value))) {
                return this.FIELD_ERROR.PASSWORD
            }
        }
        if(name === this.FIELD_NAME.PASSWOD_AGAIN) {
            if(String(value) !== this.value[this.FIELD_NAME.PASSWORD]) {
                return this.FIELD_ERROR.PASSWOD_AGAIN
            }
        }
        if(name === this.FIELD_NAME.ROLE) {
            if(isNaN(value)) {
                return this.FIELD_ERROR.ROLE
            }
        }
        if(name === this.FIELD_NAME.IS_CONFIRM) {
            if(Boolean(value) !== true) {
                return this.FIELD_ERROR.NOT_CONFIRM
            }
        }
        
    }
    submit = () => {
        this.checkDisabled()

        console.log(this.value)
    }
}

window.signupForm = new SignupForm()

