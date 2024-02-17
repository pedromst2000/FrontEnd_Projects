"""
This module is used to format arithmetic problems in a vertical format.
"""

def arithmetic_arranger(arithProblems, isDisplayed=False) :

    """
    This function is used to format arithmetic problems in a vertical format.
    
    Parameters:
    *arithProblems: A list of arithmetic problems in strings to be formatted.
    isDisplayed: A boolean value to determine if the answer should be displayed.
    
    Returns:
    A string of the formatted arithmetic problems.
    
    Samples:
    arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"])
    
    Returns:
                32      3801      45      123
            + 698   -    2    + 43    +  49
            -----   ------    ----    -----      
   if True ->  7303     3799      88      172
    
    if False will not display the answer.
    """

    firstLine = ""
    secondLine = ""
    thirdLine = ""
    resultLine = ""

    if len(arithProblems) > 5:
        return "Error: Too many problems."

    for problem in arithProblems:
        problem = problem.split()
        firstNum = problem[0]
        operator = problem[1]
        secondNum = problem[2]

        if operator not in ['+', '-']:
            return "Error: Operator must be '+' or '-'."

        if not firstNum.isdigit() or not secondNum.isdigit():
            return "Error: Numbers must only contain digits."

        if len(firstNum) > 4 or len(secondNum) > 4:
            return "Error: Numbers cannot be more than four digits."

        if operator == '+':
            result = str(int(firstNum) + int(secondNum))
        else:
            result = str(int(firstNum) - int(secondNum))

        length = max(len(firstNum), len(secondNum)) + 2
        firstLine += firstNum.rjust(length) + '    '
        secondLine += operator + secondNum.rjust(length - 1) + '    '
        thirdLine += '-' * length + '    '
        resultLine += result.rjust(length) + '    '    

    firstLine = firstLine.rstrip()
    secondLine = secondLine.rstrip()
    thirdLine = thirdLine.rstrip()
    resultLine = resultLine.rstrip()

    if isDisplayed:
        return f'{firstLine}\n{secondLine}\n{thirdLine}\n{resultLine}'
    else:
        return f'{firstLine}\n{secondLine}\n{thirdLine}'

print(arithmetic_arranger(["32 + 8", "1 - 3801", "9999 + 9999", "523 - 49"], True))
print(arithmetic_arranger(["32 + 698", "3801 - 2", "45 + 43", "123 + 49"]))
