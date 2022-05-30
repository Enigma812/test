import { IEngine } from './engine.interface';
import { IWheel } from './wheel.interface';

export class Car {
    public velocity: number;

    private engine: IEngine;
    private wheels: IWheel[];

    constructor(providedEngine: IEngine, providedWheels: IWheel[] /* wheel1: IWheel, wheel2: IWheel, wheel3: IWheel, wheel4: IWheel */) {
        this.engine = providedEngine;
        this.wheels = providedWheels;
        this.velocity = 0;
        // this.wheels = [ 
        //     wheel1,
        //     wheel2,
        //     wheel3,
        //     wheel4
        // ]
    }

    public go(oil: number): void {
        const energy = this.engine.ignite(oil);
        const energyPerWheel = energy / 4;
        let wheelsVelocity: number[] = [];
        // const velocity1 = this.wheels[0].spin(energyPerWheel);
        // const velocity2 = this.wheels[1].spin(energyPerWheel);
        // const velocity3 = this.wheels[2].spin(energyPerWheel);
        // const velocity4 = this.wheels[3].spin(energyPerWheel);
        // const wheelsVelocity: number[] = [ velocity1, velocity2, velocity3, velocity4 ];


        // let minVelocity: number = this.wheels.length === 0
        //     ? 0
        //     : Number.MAX_VALUE;
        
        // for(let i = 0; i < this.wheels.length; i = i + 1 /* i++ */) {
        //     wheelsVelocity[i] = this.wheels[i].spin(energyPerWheel);
        //     if (wheelsVelocity[i] < minVelocity) {
        //         minVelocity = wheelsVelocity[i];
        //     }
        // }

        const wheelVelocities = this.wheels.map((wheel) => wheel.spin(energyPerWheel));
        this.velocity = wheelVelocities.reduce((min, velocity) => velocity < min ? velocity : min, Number.MAX_VALUE);;
    }
} 