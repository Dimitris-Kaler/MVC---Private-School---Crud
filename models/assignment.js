class Assignment {
    constructor(id, title, description, max_oral_mark, max_total_mark, sub_date_time) {
        this.id = id
        this.title = title
        this.description = description
        this.max_oral_mark = max_oral_mark
        this.max_total_mark = max_total_mark
        this.sub_date_time = sub_date_time
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
    get description() {
        return this._description
    }
    set description(value) {
        this._description = value
    }
    get max_oral_mark() {
        return this._max_oral_mark
    }
    set max_oral_mark(value) {
        this._max_oral_mark = value
    }
    get max_total_mark() {
        return this._max_total_mark
    }
    set max_total_mark(value) {
        this._max_total_mark = value
    }
    get sub_date_time() {
        return this._sub_date_time
    }
    set sub_date_time(value) {
        this._sub_date_time = value
    }

    toString() {
        return `Assignment:{title:${this.title},description:${this.description},max_oral_mark:${this.max_oral_mark},max_total_mark:${this.max_total_mark},sub_date_time:${this.sub_date_time}`
    }

}




module.exports = Assignment