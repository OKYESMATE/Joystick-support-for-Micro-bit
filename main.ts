let oldX = 0
let oldY = 0

//% color=#00AACC icon="\uf11b"
namespace JoyBit {

    
    //% block="read analog pin %pin"
    //% pin.defl=AnalogPin.P0
    export function readAnalog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="read button pin %pin"
    //% pin.defl=DigitalPin.P2
    export function readButton(pin: DigitalPin): boolean {
        return pins.digitalReadPin(pin) == 1
    }

    //% block="read joystick X from %pin"
    //% pin.defl=AnalogPin.P0
    export function joystickX(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="read joystick Y from %pin"
    //% pin.defl=AnalogPin.P1
    export function joystickY(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }
    //% block="Has the joy stick moved?"
    export function hasStickMoved(): boolean {
        
        let currentX = pins.analogReadPin(AnalogPin.P0)
        let currentY = pins.analogReadPin(AnalogPin.P1)
        
        // Calculate movement
        let moved = (Math.abs(oldX - currentX) > 5 || Math.abs(oldY - currentY) > 5);
        
        // Update old values for the next check
        oldX = currentX;
        oldY = currentY;
        
        return moved;
    }

    oldX = pins.analogReadPin(AnalogPin.P0)
    oldy = pins.analogReadPin(AnalogPin.P1)
}
