import { FormGroup } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

export class FormChangeValueValidator {

    private _originalValue: string;
    private _lastNotify: boolean;
  
    private changeValuesSubject = new BehaviorSubject<boolean>(true);
    public changeValues$ = this.changeValuesSubject.asObservable();
  
    private validatorErrorsSubject = new BehaviorSubject<boolean>(false);
    public validatorErrors$ = this.validatorErrorsSubject.asObservable();
  
    constructor(private _form: FormGroup) {
      if (this._form.pristine) {
        this._originalValue = this.getValueForm();
      }
  
      this._form.valueChanges.subscribe(changedValue => {
        if (this._form.dirty) {
          const currentValue = this.getValueForm();
  
          if (this._originalValue !== currentValue) {
            if (this.changeValuesSubject && (this._lastNotify == null || this._lastNotify === true)) {
              this.changeValuesSubject.next(false);
              this._lastNotify = false;
            }
          } else {
            if (this.changeValuesSubject) {
              this.changeValuesSubject.next(true);
            }
            this._form.markAsPristine();
            this._lastNotify = true;
          }
        }
      });
  
      this._form.statusChanges.subscribe(status => {
        if (status === 'INVALID') {
          this.validatorErrorsSubject.next(true);
        } else if (status === 'VALID') {
          this.validatorErrorsSubject.next(false);
        }
      });
  
      this.changeValuesSubject.next(true);
    }
  
    markIntact() {
      this._originalValue = JSON.stringify(this._form.value);
  
      if (this.changeValuesSubject) {
        this.changeValuesSubject.next(true);
        this._form.markAsPristine();
      } else {
        this._form.markAsPristine();
      }
      this._lastNotify = true;
    }
  
    markAsDirty() {
      this._form.markAsDirty();
      this.changeValuesSubject.next(false);
      this._lastNotify = false;
    }
  
    restoreValues() {
      const value = JSON.parse(this._originalValue);
      this._form.patchValue(value);
      this.markIntact();
    }
  
    private getValueForm(): string {
      return JSON.stringify(this._form.getRawValue()).replace(/null/g, '""');
    }
  
  }
  