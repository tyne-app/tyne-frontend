import {AbstractControl} from '@angular/forms';

/**
 * DEPRECATED, IT NEED TO BE DELETED
 */
export class PasswordValidation {

    static MatchPassword(AC: AbstractControl) {
       const password = AC.get('newPassword').value; 
       const confirmPassword = AC.get('confirmPassword').value;
        if(password != confirmPassword) {
            AC.get('confirmPassword').setErrors( {MatchPassword: true} );
        } else {
            return null;
        }
    }
}