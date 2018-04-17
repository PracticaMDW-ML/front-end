import { Component, ViewChild, OnInit } from '@angular/core';

@Component({
    templateUrl: `bookRoom.component.html`,
    styleUrls: ['bookRoom.component.css']
})

export class BookRoomComponent implements OnInit {

    static URL = 'bookRoom';

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

