//% color=#00AACC icon="\uf11b"
namespace Joy-Bit {

    let oldX = 0
    let oldY = 0
    
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

    export function hasStickMoved(): boolean {
        return (oldX != pins.analogReadPin(AnalogPin.P0) || oldY != pins.analogReadPin(AnalogPin.P1))
    }

    let oldX = pins.analogReadPin(AnalogPin.P0)
    let oldy = pins.analogReadPin(AnalogPin.P1)
}
