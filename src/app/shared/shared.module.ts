import { NgModule } from '@angular/core';
import { MaterialModule } from '../MaterialComponents/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

const sharedModules = [
    MaterialModule,
    CommonModule,
    FormsModule,
    FlexLayoutModule,

];

@NgModule({
    imports: [ sharedModules ],
    exports: [ sharedModules ]
})
export class SharedModule {

}