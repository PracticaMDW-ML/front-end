import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpService } from './http.service';
import { NgModule } from '@angular/core';
import { CrudComponent } from './crud.component';

import {
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatTableModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpModule,
        MatButtonModule,
        MatCardModule,
        MatDialogModule,
        MatIconModule,
        MatInputModule,
        MatSortModule,
        MatTableModule,
    ],
    declarations: [
      CrudComponent
    ],
    exports: [
      CrudComponent
    ],
    entryComponents: [],
    providers: [
        HttpService,
    ]
})
export class CoreModule { }
