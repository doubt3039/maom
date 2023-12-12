def gold():
    n=int(input())
    today=[4783, 4800, 4740, 4850]
    yesterday=[4780,4785,4722, 4825]
    print("today city",today.index(min(today)),"has least gold rate")
    diff=[today[i]-yesterday[i] for i in range(n)]
    tommorow=[]
    s=0
    for k in diff:
        if k<=0:
            tommorow.append(round(today[s]-(yesterday[s]*0.15),2))
        elif k>0:
            tommorow.append(round(today[s]+(yesterday[s]*0.05),2))
        s+=1


    nt=list(tommorow)
    for u in tommorow:
        print("city",tommorow.index(u),"predicted value",u)

    for ind in range(len(nt)):
        min_index = ind
        for j in range(ind + 1, len(nt)):
            if nt[j] < nt[min_index]:
                min_index = j
        nt[ind], nt[min_index] = nt[min_index],nt[ind]
    
    print()

    print("acending order of cities acording to predicted gold values :")
    
    for f in nt:
        print("city",tommorow.index(f),"has predicted value of",f)
gold()