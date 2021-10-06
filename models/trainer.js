

class Trainer {
    constructor(id, first_name, last_name, subject) {
        this.id = id
        this.first_name = first_name
        this.last_name = last_name
        this.subject = subject

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
    get subject() {
        return this._subject
    }
    set subject(value) {
        this._subject = value

    }
    toString() {
        return (`Trainer {id:${this.id},first name:${this.first_name},last name:${this.last_name},subject:${this.subject}`)
    }



}




module.exports = Trainer




