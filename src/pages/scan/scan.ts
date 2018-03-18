import { Component, OnInit } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

import { PopoverPage } from '../about-popover/about-popover';

@Component({
    selector: 'page-scan',
    templateUrl: 'scan.html'
})
export class ScanPage implements OnInit {
    private barcodeData: any;
    private showCard: boolean = false;

    constructor(public popoverCtrl: PopoverController,
                private barcodeScanner: BarcodeScanner,) { }

    ngOnInit() {

    }

    presentPopover(event: Event) {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({ ev: event });
    }

    scan() {
        this.barcodeScanner.scan().then(barcodeData => {
            console.log('barcodeData', barcodeData);
            this.showCard = true;
            this.barcodeData = barcodeData;
        }, (err) => {
            console.log('error while scanning code', err);
        });
    }
}