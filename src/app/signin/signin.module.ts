import { NgModule } from '@angular/core';
import { SignInComponent } from './index';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        SignInComponent
    ],
    imports: [ FormsModule, HttpModule ],
    exports: [
        SignInComponent
    ]
})
export class SignInModule {
}
