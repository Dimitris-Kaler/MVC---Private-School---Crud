class Course {
    constructor(id, title, stream, type, start_date, end_date) {
        this.id = id;
        this.title = title;
        this.stream = stream;
        this.type = type;
        this.start_date = start_date;
        this.end_date = end_date
    }
    get id() {
        return this._id
    }
    set id(value) {
        this._id = value
    }
    get title() {
        return this._title
    }
    set title(value) {
        this._title = value
    }
    get stream() {
        return this._stream
    }
    set stream(value) {
        this._stream = value
    }
    get type() {
        return this._type
    }
    set type(value) {
        this._type = value
    }
    get start_date() {
        return this._start_date
    }
    set start_date(value) {
        this._start_date = value
    }
    get end_date() {
        return this._end_date
    }
    set end_date(value) {
        this._end_date = value
    }

    toString() {
        (`Course{ id:${this.id},title:${this.title},stream:${this.stream},type:${this.type},start date:${this.start_date},end date:${this.end_date}`)
    }
}




module.exports = Course