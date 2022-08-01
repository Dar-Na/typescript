interface Rectangle {
    readonly id: string
    color?: string
    size: {
        width: number
        height: number
    }
}

const rect1 : Rectangle = {
    id: '12',
    size: {
        width: 23,
        height: 41
    },
    color: '#fff'
}

const rect2 : Rectangle = {
    id: '13',
    size: {
        width: 12,
        height: 5
    },
    color: '#e01d1d'
}

rect2.color = 'green'
//rect2.id = 'green'

const rect3 = {} as Rectangle
const rect4 = <Rectangle>{}

// ====
interface RectangleWithArea extends Rectangle{
    getArea: () => number
}

const rect5: RectangleWithArea = {
    id: '123',
    size: {
        width: 14,
        height: 5
    },
    getArea(): number {
        return  this.size.width * this.size.height
    }
}

console.log(rect5.getArea())

interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock {
    time: Date = new Date();

    setTime(date: Date): void {
        this.time = date;
    }
}

// =====
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2rem',
    borderRadius: '5px'
}