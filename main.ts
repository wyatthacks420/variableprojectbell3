input.onButtonPressed(Button.A, function () {
    projectVariable += 1
    basic.showNumber(projectVariable,100)
})
input.onButtonPressed(Button.AB, function () {
    projectVariable = 0
    basic.showNumber(projectVariable, 100)
})
input.onButtonPressed(Button.B, function () {
    projectVariable += -1
    basic.showNumber(projectVariable, 100)
})
let projectVariable = 0
music.setVolume(255)
projectVariable = 0
