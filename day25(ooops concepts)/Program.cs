using System;
////class example

//class Student
//{
//    string name;
//    int age;

//    public void Display()
//    {
//        Console.WriteLine("class example \n");
//        Console.WriteLine("name:" + name);
//        Console.WriteLine("age:" + age);

//    }
//    static void Main()
//    {
//        Student s = new Student();
//        s.name = "ravi";
//        s.age = 23;
//        s.Display();
//    }
//}

////object example

//class Car
//{
//    public string brand;
//    public void Drive()
//    {
//        Console.WriteLine("object example \n");
//        Console.WriteLine(brand + " is driving");
//    }
//    static void Main()
//    {
//        Car car1 = new Car();
//        car1.brand = "toyota";
//        car1.Drive();
//        Console.ReadLine();
//    }
//}



//class Car
//{
//    public string brand;
//    public void Drive()
//    {
//        Console.WriteLine(brand + " is driving");
//    }
//}
//class Program
//{
//    static void Main()
//    {
//        Car car1 = new Car();
//        car1.brand = "Toyota";
//        car1.Drive();
//    }
//}

////constructor

//public class Dog
//{
//    public string name;
//    public string Color;
//    public Dog(string n, string c)
//    {
//        name = n;
//        Color = c;
//        Console.WriteLine($"Dog Name is:{name} and it is {Color}color \n");
//    }

//    public static void Main()
//    {
//        Console.WriteLine("constructor example \n");
//        Dog myDog = new Dog("fido", "black");
//        Dog a = new Dog("dobby", "white");

//    }
//}

////default constructor

//class Employee
//{
//    public string name;
//    public int age;

//    public Employee()
//    {
//        name = "ramesh";
//        age = 26;
//    }
//    public void Display()
//    {
//        Console.WriteLine("example for default constructor \n");
//        Console.WriteLine("name:" + name);
//        Console.WriteLine("age:" + age);
//    }
//    public static void Main()
//    {
//        Employee myEmployee = new Employee();
//        myEmployee.name = "arun";
//        myEmployee.age = 37;
//        myEmployee.Display();
//    }
//}

////set get
//class Student
//{
//    private string name;
//    public string Name
//    {
//        get
//        {
//            return name;
//        }
//        set
//        {
//            name = value;
//        }
//    }
//}
//class Program
//{
//    static void Main()
//    {
//        Console.WriteLine("set & get concepts \n");
//        Student student = new Student();
//        student.Name = "Arun";
//        Console.WriteLine(student.Name);
//    }
//}

//try,catch

class Program
{
    static void Main()
    {
        try
        {
            int a = 10;
            int b = 2;
            Console.WriteLine("Result:"+a / b);
        }
        catch (Exception ex)
        {
            Console.WriteLine("Error: " + ex.Message);
        }
        finally
        {
            Console.WriteLine("Finally block executed. \n");
        }
    }
}


