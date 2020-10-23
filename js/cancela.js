let LUZ = 0
basic.forever(function () {
    LUZ = input.lightLevel()
    if (LUZ == 255) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.showLeds(`
            . . # . .
            . # # . .
            . . # . .
            . . # . .
            . # # # .
            `)
    } else {
        pins.servoWritePin(AnalogPin.P0, 90)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
        control.waitMicros(4)
    }
})
