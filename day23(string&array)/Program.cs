//1dimensional array
using System;
using System.IO;
using System.Text;

//Console.WriteLine("example of 1 dimensional array \n");
//string[] products =
//{
//    "Laptop",
//    "TV",
//    "Keyboard",
//    "mouse"
//};
//foreach (string product in products)
//{
//    Console.WriteLine(product);
//}


//2dimensional array
//    //int[,] numbers;
//Console.WriteLine("example for 2 dimensional array \n");
//int[,] numbers = new int[3, 3]
//{
//    { 10, 20, 30 },
//    { 40, 50, 60 },
//    { 70, 80, 90 }
//};
//for (int i = 0; i < numbers.GetLength(0); i++)
//{
//    for (int j = 0; j < numbers.GetLength(1); j++)
//    {
//        Console.Write($"the number is:{numbers[i, j] + ""}\n");
//    }
//    Console.WriteLine();
//}


////3 dimensional array
//Console.WriteLine("example for 3 dimensional array");
//int[,,] num= new int[2, 3, 3]
//{
//   {
//        { 10, 20, 30 },
//        { 40, 50, 60 },
//        { 70, 80, 90 }
//   },
//   {
//        { 10, 20, 30 },
//        { 40, 50, 60 },
//        { 70, 80, 90 }
//   }
//};
//Console.WriteLine($"the number in [0,2,1] is:{num[0,2, 1]} \n");
//Console.WriteLine($"the number in [1,0,0] is:{num[1,0, 0]} \n");
//Console.WriteLine($"the number in [0,2,0] is:{num[0,2, 0]} \n");

//array methods
//Console.WriteLine("Array methods");



//int[] numbers = { 10, 20, 30, 40 };

//Console.WriteLine($"the length of array:{numbers.Length} \n");


//Array.Sort(numbers);
//Console.WriteLine(" \n the sort of array is: \n");
//foreach (int number in numbers)
//{
//    Console.Write(number + " ");
//}

//Array.Reverse(numbers);
//Console.WriteLine(" \nthe reverse of array is: \n");
//foreach (int number in numbers)
//{
//    Console.Write(number + " ");
//}







//string concatenation
Console.WriteLine("example for string concatenation and interpolation \n");
string firstName = "Arthi";
string lastName = "SP";
int age = 21;
string fullName = firstName + " " + lastName;

Console.WriteLine($"MY Name is:{fullName} and I am {age} year old. \n");

////string methods
//Console.WriteLine("string methods \n");
//string value = "Apple";
//Console.WriteLine($"the name in Uppercase:{value.ToUpper()} \n");
//Console.WriteLine($"the name in Lowercase:{value.ToLower()} \n");
//Console.WriteLine($"the name in Contains:{value.Contains("p")} \n");
////substring method

//string name = "Arthi";

//string result = name.Substring(0, 3);

//Console.WriteLine($"example for substring:{result}");

////stringbuilder
//Console.WriteLine("stringBuilder \n");

//StringBuilder sb = new StringBuilder();

//sb.Append("Hello");
//sb.Append(" ");
//sb.Append("Arthi");

//Console.WriteLine(sb);





////jagged array
//Console.WriteLine("example for jagged array");
//int[][] eg =new int[3][];
//eg[0]=new int[] { 10, 20 };
//eg[1] = new int[] { 20 };
//eg[2] = new int[] { 10 };
//Console.WriteLine($"the number in [0][1]:{eg[0][1]} \n");
//Console.WriteLine($"the number in [1][1]:{eg[1][0]} \n");
////namespace string_array
////{
////    internal class Program
////    {
////        static void Main(string[] args)
////        {
////            Console.WriteLine("Hello, World!");
////        }
////    }
////}
