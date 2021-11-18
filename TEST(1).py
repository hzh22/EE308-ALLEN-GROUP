import random

def szys(f,n1,n2):
    sym = ['＋', '－', '×', '÷']#Defining an array of quadratic operations
    result = 0

    if f == 0:  # addition
        result = n1 + n2

    elif f == 1:  # subtraction
        result = n1 - n2
        result = round((n1 - n2), 2)
    elif f == 2:  # multiplication
        result = n1 * n2
        result = round((n1 * n2), 2)
    elif f == 3:  # division
            # Use the round function to retain one decimal place

            n1 = round(n1,2)

            n2 = round(n2,2)
            result = round((n1 / n2),2)
    return result



sym = ['＋', '－', '×', '÷']

print( "Please enter your grade?")
a = int(input())
print('Please enter the number of questions?')
n = int(input())

score = 0
con = 0
for i in range(0,n):
    if ((a == 1) or (a == 2)):
        n1 = random.randint(1, 100)

        n2 = random.randint(1, 100)

        f = random.randint(0,1)
        szys(f, n1, n2)
    elif ((a == 3) or (a == 4)):
        n1 = random.randint(1, 100)

        n2 = random.randint(1, 100)

        f = random.randint(0,3)
        szys(f, n1, n2)
    elif ((a == 5) or (a == 6)):
        # Fractional cases
        n1 = random.uniform(1, 100)
        n1 = round(n1, 2)
        n2 = random.uniform(1, 100)
        n2 = round(n2, 2)
        f = random.randint(0,3)
        szys(f, n1, n2)
    #print algorithm
    print(n1, sym[f], n2, '= ', end='')
    # Enter calculation results
    j = input()
    if((a== 5)or(a== 6)):
        s = float(j)
    else:
        s = int(j)
    #Judgement results
    result = szys(f,n1,n2)
    if s == result:
        print('right')
        con += 1
    else:
        print('error.，the answer is', result)
#Calculate total score
score = con/n *100
print("your score is ",score)