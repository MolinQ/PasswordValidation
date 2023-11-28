import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class Validator{

static PasswordValidator: ValidatorFn =
     (control: AbstractControl): ValidationErrors | null => {
        const controlValue = control.value;
        const Letters = /[a-zA-Z]/;
        const Numbers = /\d/;
        const Symbols = /[!@#$%^&*(),.?":{}|<>]/;
        let status = '';
        if (controlValue.length >= 8){
            if(Letters.test(controlValue) && Numbers.test(controlValue) && Symbols.test(controlValue)) 
            {
                status = 'strong'
            } else 
            
            if(Letters.test(controlValue) && Numbers.test(controlValue) 
            || Letters.test(controlValue) && Symbols.test(controlValue)
            || Numbers.test(controlValue) && Symbols.test(controlValue))
            {
                status = 'medium'
            } else 
            if(Letters.test(controlValue) || Numbers.test(controlValue) || Symbols.test(controlValue))
            {
                status = 'easy'
            }
            
        }

        return status ? { PasswordStatus: status } : null;
        
        };
    }