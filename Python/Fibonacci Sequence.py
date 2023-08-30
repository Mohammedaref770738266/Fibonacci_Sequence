count = int(input("enter the number you want to show\n"))
if count<=0:
    print("the number smaller than zero")
else:
    num =[0,1]
    first =0
    last =1
    i=0
    while i<count-2:
        last +=first
        num.append(last)
        first = (first-last) * -1
        i+=1

    for number in num:
        print(number)