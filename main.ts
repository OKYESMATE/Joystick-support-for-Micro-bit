//% color=#00AACC icon="\uf11b"
namespace JoystickInput {

    //% block="read analog pin %pin"
    //% pin.defl=AnalogPin.P0
    export function readAnalog(pin: AnalogPin): number {
        return pins.analogReadPin(pin)
    }

    //% block="read digital pin %pin"
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
}
