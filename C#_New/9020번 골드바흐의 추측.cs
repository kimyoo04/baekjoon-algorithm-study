using System;
using System.Text;  // StringBuilder ���� ����

class GoldVahe
{
	/// <summary>
	/// Ŭ���� �ȿ��� �Լ���, ������ �ʿ信 ���� �پ��ϰ� ������ �� �ִ�. 
	/// </summary>

	static void Main()
	{
		//�ν��Ͻ� ���� (���ǵ� Ŭ������ ����ϱ� ���� Ŭ������ ��ü�� �����ϴ� ����
		//Ŭ������	�ν��Ͻ��� / Ŭ������ �̸��� �ڷ����� �̸�ó�� ���Ǵ� ��.

		/* 
         * 'StringBuilder' = ������ �� ���� string�� �޸� ���氡���� ���ڿ��� ��Ÿ���µ� ����ϴ� Ŭ����
         * string ��ü�� ���� ����Ǹ� �޸𸮿��� ���� �������� ������ ���ο� ���������� ���������, 
         * StringBuilder ��ü�� ���� ���� ������� �ʰ� �� �޸𸮿��� ���� ����, �߰�, ���� �˴ϴ�. 
         */

		StringBuilder builder = new StringBuilder();  // �ν��Ͻ��� �����ϰ� ����, Ŭ���� �ȿ� ���ǵ��� �Լ��� ����� �� �ִ�. 
		bool[] sieve = new bool[10001];

		//0,1 �� ���ܴϱ� 2���� 10001  ������ �ϴµ� 2���� ������ 2�ǹ���� ��ü�� true�� �Ǵ°���... 10001������...

		for (int i = 2; i < 10001; i++) // �����佺 �׳׽��� ü 
		{
			if (sieve[i] == false)
			{
				for (int j = i + i; j < 10001; j += i) // i�� �����ü true.
				{
					sieve[j] = true;
				}
			}
		}

		int testcase = int.Parse(Console.ReadLine());

		for (int i = 0; i < testcase; i++)
		{
			int N = int.Parse(Console.ReadLine()); // ���ڿ� ǥ���� �ش��ϴ� 32��Ʈ ��ȣ �ִ� ������ ��ȯ�Ѵ�.
			int Num1 = N / 2;
			int Num2 = N / 2;

			// �� �� �Ҽ��� ��찡 �� �� while ������ ������. break(�ݺ����� ����)
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