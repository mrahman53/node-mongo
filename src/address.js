/**
 * Created by mrahman on 7/19/17.
 */

"use strict";
class Address{

    constructor(houseNumber,streetName,city,zipCode,country){
        this._houseNumber = houseNumber;
        this._streetName = streetName;
        this._city = city;
        this._zipCode = zipCode;
        this._country = country;
    }
    get houseNumber() {
        return this._houseNumber;
    }

    set houseNumber(value) {
        this._houseNumber = value;
    }

    get streetName() {
        return this._streetName;
    }

    set streetName(value) {
        this._streetName = value;
    }

    get city() {
        return this._city;
    }

    set city(value) {
        this._city = value;
    }

    get zipCode() {
        return this._zipCode;
    }

    set zipCode(value) {
        this._zipCode = value;
    }

    get country() {
        return this._country;
    }

    set country(value) {
        this._country = value;
    }
}