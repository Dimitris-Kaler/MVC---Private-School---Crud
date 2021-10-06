class Student {
    constructor(id, first_name, Last_name, date_of_birth, tuition_fees) {
        this.id = id
        this.first_name = first_name;
        this.Last_name = Last_name;
        this.date_of_birth = date_of_birth
        this.tuition_fees = tuition_fees
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
    get Last_name() {
        return this._Last_name
    }
    set Last_name(value) {
        this._Last_name = value
    }
    get date_of_birth() {
        return this._date_of_birth
    }
    set date_of_birth(value) {
        this._date_of_birth = value
    }
    get tuition_fees() {
        return this._tuition_fees
    }
    set tuition_fees(value) {
        this._tuition_fees = value
    }
    tostring() {
        return (`Student{ id:${this.id},first name:${this.first_name},last name:${this.Last_name},birth date:${this.date_of_birth},tuition fees:${this.tuition_fees}`)
    }
}





module.exports = Student