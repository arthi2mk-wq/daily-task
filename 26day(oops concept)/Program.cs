//encapsulation
class BankAccount
{
    private double balance;
    public void Deposit(double amount)
    {
        if (amount > 0)
        {
            balance += amount;
        }
    }
    public double GetBalance()
    {
        return balance;
    }
}
class Program
{
    static void Main()
    {
        BankAccount account = new BankAccount();

        account.Deposit(5000);
        Console.WriteLine("example for encapsulation \n");

        Console.WriteLine("Balance: " + account.GetBalance());
    }
}

//abstraction

abstract class Vehicle
{
    public abstract void Start();
}
class Car : Vehicle
{
    public override void Start()
    {
        Console.WriteLine("example for abstraction \n");
        Console.WriteLine("Car starts using the engine. \n");
    }
}
class Program
{
    static void Main()
    {
        Car car = new Car();
        car.Start();
    }
}

//inheritance

class Animal
{
    public void Eat()
    {
        Console.WriteLine("Animal is eating.\n");
    }
}
class Dog : Animal
{
    public void Bark()
    {
        Console.WriteLine("example for inheritance \n");
        Console.WriteLine("Dog is barking.");
    }
}
class Program
{
    static void Main()
    {
        Dog dog = new Dog();
        dog.Eat();
        dog.Bark();
    }
}

//method overriding

class Calculator
{
    public int Add(int a, int b)
    {
        return a + b;
    }

    public int Add(int a, int b, int c)
    {
        return a + b + c;
    }
    public double Add(double a, double b)
    {
        return a + b;
    }
}
class Program
{
    static void Main()
    {
        Console.WriteLine("example for method overriding \n");
        Calculator calc = new Calculator();

        Console.WriteLine(calc.Add(10, 20));

        Console.WriteLine(calc.Add(10, 20, 30));

        Console.WriteLine(calc.Add(10.5, 20.5));

    }
}

//composition

class Engine
{
    public void Start()
    {
        Console.WriteLine("example for composition \n");
        Console.WriteLine("Engine starts.\n");
    }
}
class Car
{
    private Engine engine;
    public Car()
    {
        engine = new Engine();
    }
    public void StartCar()
    {
        engine.Start();
        Console.WriteLine("Car starts.\n");
    }
}
class Program
{
    static void Main()
    {
        Car car = new Car();

        car.StartCar();
    }
}