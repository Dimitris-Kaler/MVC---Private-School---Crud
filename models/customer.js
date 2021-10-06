class Customer {
    constructor(id, first_name, last_name, telephone, description) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.telephone = telephone
        this.description = description
    }

    get id() {
        return this._id
    }
    set id(value) {
        this._id = value
    }

    get first_name() {
        return this._first_name
    }
    set first_name(value) {
        this._first_name = value
    }
    get last_name() {
        return this._last_name
    }
    set last_name(value) {
        this._last_name = value
    }
    get telephone() {
        return this._telephone
    }
    set telephone(value) {
        this._telephone = value
    }
    get description() {
        return this._description
    }
    set description(value) {
        this._description = value
    }
}








module.exports = Customer