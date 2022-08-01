var rect1 = {
    id: '12',
    size: {
        width: 23,
        height: 41
    },
    color: '#fff'
};
var rect2 = {
    id: '13',
    size: {
        width: 12,
        height: 5
    },
    color: '#e01d1d'
};
rect2.color = 'green';
//rect2.id = 'green'
var rect3 = {};
var rect4 = {};
var rect5 = {
    id: '123',
    size: {
        width: 14,
        height: 5
    },
    getArea: function () {
        return this.size.width * this.size.height;
    }
};
console.log(rect5.getArea());
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2rem',
    borderRadius: '5px'
};
