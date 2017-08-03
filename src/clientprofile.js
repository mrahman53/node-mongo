/**
 * Created by mrahman on 7/19/17.
 */
"use strict";
import {Address} from './address.js';

let address = new Address();

export class ClientProfile{
    constructor(phone, address, delivery){
        this._phone = phone;
        this._address = address;
        this._delivery = delivery;
    }

    getPhone(){
        return this._phone;
    }
    setPhone(phone){
        this._phone = phone;
    }
    get address() {
        return this._address;
    }
    set address(value) {
        this._address = value;
    }
    get delivery() {
        return this._delivery;
    }
    set delivery(value) {
        this._delivery = value;
    }
}