using System;    // 여러 namespace를 연결하는 것. 외부 namespace를 연결. 


//N개의 수가 주어졌을때, 이를 오름차순으로 정렬하는 프로그램 작성 

/*INPUT = 1 <= N <= 1000 둘째줄부터 N개의 줄에는 수 주어진다.
 * 이 수는 절댓값이 1000보다 작거나 같은 정수이다. 
 * 수는 중복 되지 않는다.
 * 
 * OUTPUT = 첫째줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한줄에 하나씩 출력한다. 
 * 첫번째줄의 N은 제외하고. 
 * 
 */

namespace ArrayNumber  // ArrayNumber 프로젝트명 
{
    class Program
    {
        static void Main(string[] args)
        {
            /*List를 만든다. Generic이나 구조체로 간주되며 <> 사이에 자료형을 선언해야한다.
            List<int> Nlist = new List<int>();

            배열(array)은 하나의 자료가 아닌 '일련의 자료'를 저장하기 위해 사용하는 자료구조다. 
            같은 자료형을 가지는 여러변수들의 집합을 배열. 
            
            자료형[] 배열명 = new 자료형[크기];
            
            인스턴스 만들 때 처럼 new 를 사용한다. 
            배열명[index] 로 확인. index는 항상 0부터 시작.

            1.일련의 자료를 한번에 저장하는 방식 
            ex) int [] studentIDs = new int[5] { 1, 2, 3, 4, 5 );
            
            2. 원하는 값을 원하는 장소에 저장하는 방식. 
            ex) int [] studentIDs = new int [5];
                studentIDs[0] = 55;

            */

            // 줄 수를 input으로 받는다.
            int numberindex = int.Parse(Console.ReadLine());

            // int를 담을 배열을 만들어준다. 
            int[] arr = new int[numberindex];

            // 수를 배열에 담다.
            for (int i = 0; i < numberindex; i++)
            {
                int N = int.Parse(Console.ReadLine());
                arr[i] = N;

            }


            // 배열 안의 오름차순 정렬.
            // array는 1차원 배열의 요소를 정렬하는 메소드이며, 정렬 시에 내성정렬라는 정렬 알고리즘을 사용한다.
            // 내성정렬은 퀵정령의 장점을 갖고 있으면서 최악의 시나리오인 O(n^2)이 안나오도록 해결하기 위해 만들어진 알고리즘이며 모든 상황에서 O(nlogn)의 시간복잡도를 가진다.(퀵정렬→힙정렬로 전환하며 정렬)
            Array.Sort(arr);

            // OUTPUT 출력.
            foreach (int i in arr)
            {
                Console.WriteLine(i);
            }

        }
    }
}