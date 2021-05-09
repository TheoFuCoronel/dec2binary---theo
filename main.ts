input.onButtonPressed(Button.A, function () {
    Input = Input - 1
    if (Input < 0) {
        Input = 0
    }
    basic.showNumber(Input,100)
})
function Find_Highest_2 () {
    while (Input > Highest_Power) {
        Highest_Power = Highest_Power * 2
    }
    if (Highest_Power > Input) {
        Highest_Power = Highest_Power / 2
    }
}
input.onButtonPressed(Button.B, function () {
    Input = Input + 1
    basic.showNumber(Input,100)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    Find_Highest_2()
    while (Highest_Power >= 1) {
        if (Input < Highest_Power) {
            Highest_Power = Highest_Power / 2
            Fill = true
        } else {
            Input = Input - Highest_Power
            Highest_Power = Highest_Power / 2
            led.plot(Plot_Number % 5, Plot_Number / 5)
            Fill = false
        }
        Plot_Number = Plot_Number + 1
    }
    if (Fill == true) {
        Fill_True = true
    }
})
let Fill_True = false
let Fill = false
let Highest_Power = 0
let Plot_Number = 0
let Input = 0
Input = 50
Highest_Power = 1
Plot_Number = 0
Fill = true
Fill_True = false
basic.forever(function () {
    if (Fill_True == true) {
        for (let index = Plot_Number; index <= 24; index++) {
            led.toggle(index % 5, index / 5)
        }
basic.pause(100)
    }
})
