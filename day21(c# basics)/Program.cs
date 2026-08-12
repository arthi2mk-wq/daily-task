using System.Security.Cryptography;

//arithematic operation

//Console.WriteLine("example for arithematic operation \n");
//int a = 10;
//int b= 11;
//Console.WriteLine($"Addition of {a} and {b} is  {a + b}  \n");
//Console.WriteLine($"Subtraction of {a} and {b} is  {a - b}  \n");
//Console.WriteLine($"Division of {a} and {b} is  {a / b}  \n");
//Console.WriteLine($"Multiplication of {a} and {b} is  {a * b} \n ");

////variable
//Console.WriteLine("example for variable \n");
//string firstName = "John";
//string lastName = "S";

//string fullName = firstName + " " + lastName;
//int age = 21;
//bool isstudent = true;
//string dep = "CSE";

//Console.WriteLine($"My Name is {fullName} ,I am  {age} years old \n");
//Console.WriteLine($"check student is present: {isstudent} \n" );
//Console.WriteLine($"department is {dep} \n ");

////value type
//Console.WriteLine("example for value type \n");
//int y = 10;
//int c = y;
//Console.WriteLine($"value of c & y is {c},{y} before modify \n ");
//c = 30;
//Console.WriteLine($"value of c & y is {c},{y} \n");

//implicit conversion
//eg1
//Console.WriteLine("example for implict conversion \n");
//int number = 25;
//double result = number;
//Console.WriteLine($"int {number} is convert into double:{result} \n");


////eg2
//char letter = 'W';
//int num = (char)number;
//Console.WriteLine($"letter {letter} is convert into integer:{num}");

////explicit conversion
//Console.WriteLine("example for explict conversion \n");
//double number1 = 55.7;
//int result1 = (int)number1;
//Console.WriteLine($"the double {number1} is convert into integer:{result1} \n");

////assignment operation

//Console.WriteLine("example for assignment operation \n");

//int Incre = 10;
//Console.WriteLine($"value before increment:{Incre} \n");

//Incre += 5;
//Console.WriteLine($"value after increment by 5:{Incre} \n");
//int decre = 10;
//decre -= 5;
//Console.WriteLine($"value after decrement by 5:{decre} \n");

//logical operation

//Console.WriteLine("example for logical operation \n");
//int mark = 76;
//bool student = true;
//Console.WriteLine("to find mark is grater than 38 and student is present \n ");
//Console.WriteLine(mark >= 38 && student);
//Console.WriteLine("to find mark is not equal 38 \n ");
//Console.WriteLine(mark != 38);
//Console.WriteLine("to find mark is less than 38  or student is present \n ");
//Console.WriteLine(mark <= 18 || student);

//Console.WriteLine(++mark);

//terenary operation

//Console.WriteLine("check student is pass or fail using terinary operation\n");
//string r1 = mark >= 18 ? "pass" : "Fail";
//Console.WriteLine(r1);
//comparision operation

//Console.WriteLine($"example for comparision operation \n");
//Console.WriteLine($"compare the values:{mark == 30}\n");
//Console.WriteLine($"check the value is greater than 20{mark >= 20}\n");
//Console.WriteLine(mark != 36);









using System;

namespace details
{
    class Employee
    {
        public string name;
        public int age;
        public int salary;
    }
    class calculation
    {
        public int a;
        public int b;
    }
    class Program
    {
    static void Main()
        {
            Employee e1 = new Employee();
            e1.name = "ram";
            e1.age = 20;
            e1.salary = 17000;
            Employee e2 = new Employee();
            e2.name = "john";
            e2.age = 17;
            e2.salary = 20000;
            Console.WriteLine($"employee1 \n Name:{e1.name} \n,Age: {e1.age},salary:{e1.salary} \n");
            Console.WriteLine($"employee2 \n Name:{e2.name} \n,Age: {e2.age} \n");

        //    //arithematic operation
        //    calculation c1 = new calculation();
        //c1.a = 10;
        //c1.b = 20;
        //Console.WriteLine($"Add:{c1.a + c1.b}");
        //Console.WriteLine($"Sub:{c1.a - c1.b}");
        //Console.WriteLine($"Mul:{c1.a * c1.b}");
        //Console.WriteLine($"Div:{c1.b / c1.a}");



    }
}
}