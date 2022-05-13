interface Person {
    id: number;
    name: string;
    alive: boolean;

    say(what: string): string
}

function main(): number {
    const camelCase = ''; // переменные
    const PascalCase = '';  // типы (объекты, интерфэйсы и пр.)
    const snake_case = ''; // Глобальные констаты: AUTH_TOKEN
    // const kebab-case = '';

    // old style
    var bool: boolean = true; // true | false
    var n: number = 42;
    var s: string = `I'm sayng "Hello!!!"`;

    // new style
    const str: string = s;
    let num: number;
    num = 56;

    const sum: number = 23 + 45 + 78;
    const sqr: number = sum * sum;

    // возможно, но не рекомендуется
    // мутация переменных - bad practice
    let res: number;
    res = 23 + 45 + 78;
    res = res * res;

    // Arrays
    const numbers: number[] = [0, 8];
    const strings: string[] = ['Hello', 'bye', 'fuck off!!!'];

    const hello = strings[0];
    const secondNumber = numbers[1]; // 0, 1, ... n-1

    // мутация
    numbers.push(0, 1, 2);

    // хороший тон
    const newNumbers = numbers.concat(0, 1, 2);

    // Object
    const emptyObject: any = {};
    // мутация
    emptyObject.s = 'itrtyruyt';

    const obj: Person = {
        id: 4245546,
        name: 'Ivan',
        alive: true,

        say(what: string): string { return 'Hello, ' + what; }
    };
    // errors
    // obj.name = 42 -> name: string
    // obj.age -> .age does not exist
    // мутации
    obj.name = 'Eugen';
    //
    const newObj = {
        ...obj,
        name: 'Eugen'
    };

    // conditions
    const con: number = 42;
    if(con < 100) {
        // true branch
        console.log('less 100');
    } else if(con > 50) {
        // optional coindition
        console.log('more 50');
    } else {
        // false branch
        console.log('else');
    }

    let humanName: string = '';
    // humanName = ...
    switch (humanName) {
        case 'Ivan':
            console.log('Hello senior');
            break;
        case 'Eugen':
            console.log('Hello junior');
            break;
        default:
            console.log('Fuck off!!!');
            break;
    }

    // loops
    let count: number = 1;
    while(count <= 10) {
        console.log('Fuck off!!!');
        count = count + 1;
        if(count === 21) {
            break;
        }
    }

    do {
        console.log('Fuck off!!!');
        count = count + 1;
        if(count === 21) {
            break;
        }
    } while(count <= 20);

    for(let i = 1; i <= 10; i++) {
        console.log('Fuck off!!!');
    }

    for(let i = 1, j = 0; i <= 10; i++, j++) {
        console.log('Fuck off!!!');
    }

    for(;;) {
        console.log('Fuck off!!!');
        if(count === 21) {
            break;
        }
    }








    return 0;
}