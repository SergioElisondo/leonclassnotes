try:
    for x in range (1, int(input("Please enter a value above 1: "))):
        if x%3 == 0 and x%5 == 0:
            print (str(x) + " Cat Tail")
        elif x%2 == 0:
            print (str(x) + " Cat")
        elif x%5 == 0:
            print (str(x) + " Tail")
        else:
            print (x)
except:
    print ("That's not a whole number bruh... re-run the program!")
