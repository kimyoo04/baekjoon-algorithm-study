using System;
using System.Text;

/* N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 * 
 * 첫째 줄에 수의 개수 N 이 주어진다. 
 * 둘째 줄부터 N 개의 줄에는 수가 주어진다. 
 * 이 수는 절댓값이 1,000,000 보다 작거나 같은 정수이다. 수는 중복되지 않는다.
 * 
 * 출력 
 * 첫째줄부터 N개의 줄에 오름차순으로 정렬한 결과를 한줄에 하나씩 출력한다.
 * 
 * 시간 제한. 문제
 */

namespace ArrayNumber_Two
{
    class Program
    {
        static void Main()
        {
            StringBuilder builder = new StringBuilder();
            int N = int.Parse(Console.ReadLine());

            int[] NumArray = new int[N];

            for (int i = 0; i < N; i++)
            {
                NumArray[i] = int.Parse(Console.ReadLine());

            }

            Array.Sort(NumArray);

            for (int i = 0; i < N; i++)
            {
                builder.Append(NumArray[i] + "\n");

            }

            Console.WriteLine(builder);

        }
    }

}