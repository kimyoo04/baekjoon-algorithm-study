using System;
using System.Text;  // StringBuilder 쓰기 위함

class GoldVahe
{
	/// <summary>
	/// 클래스 안에는 함수든, 변수든 필요에 따른 다양하게 조합할 수 있다. 
	/// </summary>

	static void Main()
	{
		//인스턴스 생성 (정의된 클래스를 사용하기 위해 클래스의 객체를 생성하는 행위
		//클래스명	인스턴스명 / 클래스의 이름이 자료형의 이름처럼 사용되는 것.

		/* 
         * 'StringBuilder' = 변경할 수 없는 string과 달리 변경가능한 문자열을 나타내는데 사용하는 클래스
         * string 객체는 값이 변경되면 메모리에서 이전 참조값을 버리고 새로운 참조값으로 변경되지만, 
         * StringBuilder 객체는 참조 값이 변경되지 않고 힙 메모리에서 값이 삽입, 추가, 제거 됩니다. 
         */

		StringBuilder builder = new StringBuilder();  // 인스턴스를 생성하고 나면, 클래스 안에 정의도니 함수를 사용할 수 있다. 
		bool[] sieve = new bool[10001];

		//0,1 은 제외니까 2부터 10001  전까지 하는데 2부터 넣으면 2의배수는 전체가 true가 되는거지... 10001전까지...

		for (int i = 2; i < 10001; i++) // 에라토스 테네스의 체 
		{
			if (sieve[i] == false)
			{
				for (int j = i + i; j < 10001; j += i) // i의 배수전체 true.
				{
					sieve[j] = true;
				}
			}
		}

		int testcase = int.Parse(Console.ReadLine());

		for (int i = 0; i < testcase; i++)
		{
			int N = int.Parse(Console.ReadLine()); // 문자열 표현을 해당하는 32비트 부호 있는 정수로 변환한다.
			int Num1 = N / 2;
			int Num2 = N / 2;

			// 둘 다 소수인 경우가 될 때 while 구문은 끝난다. break(반복문의 종료)
			while (true)
			{
				if (sieve[Num1] == false && sieve[Num2] == false)
				{
					builder.Append(Num1 + " " + Num2 + "\n");
					break;
				}
				Num1--;
				Num2++;
			}

		}
		Console.WriteLine(builder);
	}

}