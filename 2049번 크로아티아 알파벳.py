"변수 설정"
"판별 할 수 있는 set 구성"

cabc = {'c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='}

sr = input()

def word(sr) :
    word_cnt = 0
    for i in range(1, sr+1):
        sr_list= list(sr)
        if sr_list[i]=="d" or "c" or "l" or "n" or "s" or "z":
            if {sr_list[i]+sr_list[i+1]+sr_list[i+2]}.isdisjoint(cabc):
                word_cnt += 1
            elif {sr_list[i]+sr_list[i+1]}.isdisjoint(cabc):
                word_cnt += 1
        elif sr_list[i]!="d" or "c" or "l" or "n" or "s" or "z":
            word_cnt += 1
    return word_cnt

print(word(sr))

