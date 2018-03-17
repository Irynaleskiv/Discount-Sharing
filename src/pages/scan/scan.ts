import { Component, OnInit } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})
export class ScanPage implements OnInit {
    conferenceDate = '2047-05-17';

    constructor(public popoverCtrl: PopoverController,
                private barcodeScanner: BarcodeScanner,) { }

    ngOnInit() {

    }

    presentPopover(event: Event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    }

    scan() {
        this.barcodeScanner.scan().then((barcodeData) => {
            // this.barcodeScanner.encode(barcodeData.format, '111111').then((data) => {
            //     console.log('data', data);
            // });
            console.log('barcodeData', barcodeData);

        }, (err) => {
            console.log('err', err);
        });
    }
}