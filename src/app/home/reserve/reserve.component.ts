import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    templateUrl: `reserve.component.html`,
    styleUrls: ['reserve.component.css']
})

export class ReserveComponent implements OnInit {

    static URL = 'reserve';

    date: Date = new Date();
    settings = {
        bigBanner: true,
        timePicker: true,
        format: 'dd-MM-yyyy hh:mm',
        defaultOpen: false
    };

    ngOnInit(): void {
    }

}

