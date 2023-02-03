input.onButtonPressed(Button.A, function () {
    Test_Variable_1 += 1
    Test_Variables_12 += 1
    Show_Test_VariableScore()
})
input.onButtonPressed(Button.AB, function () {
    Test_Variable_2 = 0
    Test_Variable_1 = 0
    Test_Variables_12 = 0
})
function Show_Test_VariableScore () {
    OLED.clear()
    OLED.writeNumNewLine(Test_Variable_1)
    OLED.newLine()
    OLED.writeNumNewLine(Test_Variable_2)
    OLED.newLine()
    OLED.drawLoading(Test_Variables_12)
}
input.onButtonPressed(Button.B, function () {
    Test_Variable_2 += 1
    Test_Variables_12 += 1
    Show_Test_VariableScore()
})
let Test_Variable_2 = 0
let Test_Variables_12 = 0
let Test_Variable_1 = 0
OLED.init(128, 64)
