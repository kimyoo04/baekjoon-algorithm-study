#어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 
#그 수를 한수라고 한다. 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
# N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오.

#--------------------------------------------------------------------------------------------

#imput 
#첫째 줄에 1,000보다 작거나 같은 자연수 N이 주어진다.

#--------------------------------------------------------------------------------------------

#output
#첫째줄에 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력한다.

#-------------------------------------------------------------------------------------------
#a = input()
#b = list(a)
#b_1 = map(int,b)
#b1 = b_1.pop(0)
#b2 = b_1.pop(-1)
#c1 = b1 - b2

#print(c1)
 
#-------------------------------------------------------------------------------------------
"""
num = int(input())

hansu = 0
for i in range(1, num+1):
    num_list = list(map(int, str(i)))
    if i < 100:
        hansu += 1  # 100보다 작으면 모두 한수
    elif num_list[0]-num_list[1] == num_list[1]-num_list[2]:
        hansu += 1  # x의 각 자리가 등차수열이면 한수
print(hansu)
//
"""

def hansu(num) :
    hansu_cnt = 0
    for i in range(1, num+1):
        num_list = list(map(int,str(i)))
        if i < 100:
            hansu_cnt += 1  # 100보다 작으면 모두 한수
        elif num_list[0]-num_list[1] == num_list[1]-num_list[2]:
            hansu_cnt += 1  # x의 각 자리가 등차수열이면 한수
    return hansu_cnt

num = int(input())
print(hansu(num))