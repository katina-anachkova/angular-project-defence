import { AbstractControl, ValidationErrors } from "@angular/forms";

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!/.{6,}@gmail\.(bg|com)/.test(value)) {
        return {
            email: true,
        }
    }

    return null
}

export function passwordMatch(passwordFormControl: AbstractControl) {
    return (repassFormControl: AbstractControl) => {
        if (passwordFormControl.value !== repassFormControl.value)
            return {
                passwordMatch: true
            }
            return null
    }
}