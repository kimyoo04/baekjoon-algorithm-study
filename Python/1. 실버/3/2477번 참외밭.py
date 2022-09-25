# 7
#4 50
#2 160
#3 30 
#1 60
#3 20
#1 100

melon_cnt = int(input())  # 참외수 
arr = [list(map(int, input().split())) for _ in range(6)]  #input 값 [[4, 50], [2, 160], [3, 30], [1, 60], [3, 20], [1, 100]]

#print(arr)

w = 0; w_idx = 0 # 가장 긴 가로변 길이, 인덱스 초기화
h = 0; h_idx = 0 # 가장 긴 세로변 길이, 인덱스 초기화 

for i in range(len(arr)):
    if arr[i][0] == 1 or arr[i][0] == 2: # 방향이 동, 서면 가로 
        if w < arr[i][1]:                # 가장 큰 값, 인덱스 찾기 
            w = arr[i][1]
            w_idx = i 
    elif arr[i][0] == 3 or arr[i][0] == 4: # 방향이 남, 북이면 세로
        if h < arr[i][1]:
            h = arr[i][1]
            h_idx = i                       #가장 큰 값들의 인덱스를 찾아내기

#print(w,h)   # 160, 50

# 가장 긴 가로변 양옆에 붙어있는 변 ( 세로변 )들의 차이: 뺄 사각형의 세로 

# 가장 긴 세로변 양옆에 붙어있는 변 ( 가로변 )들의 차이: 뺄 사격형의 가로 

subW = abs(arr[(w_idx-1) % 6][1] - arr[(w_idx+1) % 6][1])
subH = abs(arr[(h_idx-1) % 6][1] - arr[(h_idx+1) % 6][1]) 

print(subW,subH) # 20, 60

ans = ((w*h)-(subW * subH)) * melon_cnt

print(ans)


