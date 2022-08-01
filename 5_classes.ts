class TypeScript {
    version: string

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: TypeScript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string
//     readonly numberOfWheels: number = 4
//
//     constructor(model: string) {
//         this.model = model
//     }
// }

class Car {
    readonly numberOfWheels: number = 4
    constructor(readonly model: string) {}
}

// =====

class Animal {
    protected voice: string = ''
    public color: string = 'black'

    constructor() {
        this.go()
    }

    private go() {
        console.log('go!')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat()
cat.setVoice('test')
console.log(cat.color)

// ====
abstract class Component {
    abstract name: string
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    name: string = 'default';

    info(): string {
        return "this is info";
    }

    render(): void {
        console.log('component on render')
    }

}

const app = new AppComponent()
app.render()