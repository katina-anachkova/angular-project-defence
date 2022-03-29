import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if(!/.{6,}@gmail\.(bg|com)/.test(value)){
        return {
            email: true,
        }
    }

    return null
}

