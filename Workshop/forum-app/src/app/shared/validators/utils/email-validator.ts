import { AbstractControl, ValidatorFn } from '@angular/forms';

export function emailValidator(domains: string[]): ValidatorFn {
  return (control: AbstractControl) => {
    const pattern = `^[a-zA-Z0-9._%+-]+@gmail\.(${domains.join('|')}$)`;
    const regExp = new RegExp(pattern, 'i');
    const isValid = regExp.test(control.value);

    return isValid ? null : { emailValidator: true };
  };
}
