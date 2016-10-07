/**
 * Created by foxjazz on 9/30/16.
 */
import { NgModule } from '@angular/core';
import { LoginComponent } from './index';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        LoginComponent
    ],
    imports: [ FormsModule, HttpModule ],
    exports: [
        LoginComponent
    ]
})
export class LoginModule {
}
