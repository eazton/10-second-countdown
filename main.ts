input.onButtonPressed(Button.A, function () {
    basic.showNumber(10)
    basic.pause(0)
    basic.showNumber(9)
    basic.pause(100)
    basic.showNumber(8)
    basic.pause(100)
    basic.showNumber(7)
    basic.pause(100)
    basic.showNumber(6)
    basic.pause(100)
    basic.showNumber(5)
    basic.pause(100)
    basic.showNumber(4)
    basic.pause(100)
    basic.showNumber(3)
    basic.pause(100)
    basic.showNumber(2)
    basic.pause(100)
    basic.showNumber(1)
    for (let index = 0; index < 10; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showString("GO")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("PRESSATOSTARTCOUNTDOWNPRESSA+BTOCLEARDISPAY")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString("NDL")
})
