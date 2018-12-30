const isFunc = (func) => typeof func === 'function';
const isPromise = (obj) => Promise.resolve(obj) == obj;

const validators = {
    // Reference: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript for email regex.
    isEmail: (message, value) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value)) ? null : message;
    },
    len: (len, message, value) => (value ? value.length : 0) <= len ? null : message ,
    isRequired: (message, value) => !!value ? null : message
}

const titleCase = str =>
     str.replace(
        /\w\S*/g,
        (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

class Validator {
    constructor() {
        this._fields = {};
    }
  
    async validate(obj) {
        obj = obj || {};
        let validation = {};
        
        for(let f in this._fields) {
            const error  = await this._fields[f].validate(obj[f]);
            if(error) {
                validation[f] = error;
            }
        }

        return {
            isValid: !Object.keys(validation).length,
            errors: validation
        };
    }

    field(name) {
        const fieldValidator = new FieldValidator(name);
        this._fields[name] = fieldValidator;
        return fieldValidator;
    }
}

class FieldValidator {
    constructor(name) {
        this._name = name;
        this._validators = [];
    }

    len(len, messageCb) {
        const cb = isFunc(messageCb) ?
            messageCb :
            (name, len) => `${titleCase(name)} has exceeded max length of ${len} characters.`;

        this._validators.push(validators.len.bind(null, len, cb(this._name, len)));
        return this;
    }
    
    isRequired(messageCb) {
        const cb = isFunc(messageCb) ?
            messageCb :
            name => `${titleCase(name)} is a required field.`;
        this._validators.push(validators.isRequired.bind(null, cb(this._name)));
        return this;
    }

    isEmail(messageCb) {
        const cb = isFunc(messageCb) ?
            messageCb :
            name => `${titleCase(name)} is not an email.`;
        this._validators.push(validators.isEmail.bind(null, cb(this._name)));
        return this;
    }
    
    custom(customValidator, messageCb) {
        const cb = isFunc(messageCb) ?
        messageCb :
        name => `${titleCase(name)} is not not valid.`;

        const validator = async (message, value) => {
            const validate = customValidator(value);
            const result = isPromise(validate) ? await validate : validate;
            if(result) { 
                return null;
            }
            else {
                return message;
            }
        };

        this._validators.push(validator.bind(null, cb(this._name)));
        return this;
    }

    async validate(value) {
        for(let v of this._validators) {
            const error = v(value);

            if(isPromise(error)) {
                await error;
            }
            
            if(error) {
                return error;
            }
        }

        return null;
    }
}

module.exports = {
    Validator,
    titleCase
}