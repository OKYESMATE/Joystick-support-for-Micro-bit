//% color=#00AACC icon="\uf11b"
namespace Joystick {
    // 1. Declare variables inside the namespace so they are accessible to functions here
    let oldX = 0
    let oldY = 0
    let initialized = false

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

    //% block="has the joystick moved?"
    export function hasStickMoved(): boolean {
        // 2. Initialize oldX/oldY the very first time this is called
        if (!initialized) {
            oldX = pins.analogReadPin(AnalogPin.P0)
            oldY = pins.analogReadPin(AnalogPin.P1)
            initialized = true
        }

        let currentX = pins.analogReadPin(AnalogPin.P0)
        let currentY = pins.analogReadPin(AnalogPin.P1)
        
        // Calculate movement (sensitivity threshold of 5)
        let moved = (Math.abs(oldX - currentX) > 5 || Math.abs(oldY - currentY) > 5);
        
        // Update old values for the next check
        if (moved) {
            oldX = currentX;
            oldY = currentY;
        }
        
        return moved;
    }
}
