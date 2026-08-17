////example for string
//List<string> products = new List<string>();
//Console.WriteLine("example for list \n");

//products.Add("Laptop \n");
//products.Add("Mouse \n");
//products.Add("Keyboard \n");

//Console.WriteLine("the products are \n");
//foreach (string product in products)
//{
//    Console.WriteLine(product);
//}

////list methods
//Console.WriteLine("example for list methods \n");
//List<int> numbers = new List<int>();

//Console.WriteLine("adding elements to the list");
//numbers.Add(10);    
//numbers.Add(20);
//numbers.Add(30);
//numbers.Add(40);
//numbers.Add(50);
//numbers.Add(60);
//foreach (int num in numbers)
//{
//    Console.WriteLine(num);
//}

//numbers.Insert(1, 15);
//numbers.Remove(20);
//numbers.RemoveAt(0);

//Console.WriteLine($"count of list is:{numbers.Count} \n");

////example for dictionary
//Console.WriteLine("example for dictionary \n");
//Dictionary<int, string> students =
//    new Dictionary<int, string>();

//students.Add(101, "Arthi");
//students.Add(102, "Priya");
//students.Add(103, "Kumar");
//foreach (var student in students)
//{
//    Console.WriteLine($"ID: {student.Key}, Name: {student.Value} \n");
//}

////contains method
//Console.WriteLine("check the student exists or not using dictionary \n");
//if (students.ContainsKey(101))
//{
//    Console.WriteLine("Student exists \n");
//}

////hashset

//HashSet<int> values = new HashSet<int>();

//values.Add(1);
//values.Add(2);
//values.Add(1);
//values.Add(3);
//values.Add(2);
//values.Add(11);
//values.Add(20);
//values.Add(21);
//values.Add(33);
//values.Add(42);

//Console.WriteLine("example for hashset \n");
//foreach (int number in values)
//{
//    Console.WriteLine(number);
//}

////linq example
//Console.WriteLine("example for linq");
//List<int> a = new List<int>
//{
//    10, 15, 20, 25, 30,40,56
//};
//var result = a.Where(n => n > 20);

//foreach (var num in result)
//{
//    Console.WriteLine($"the numbers :{num} \n" +$"");
//}


//example for trygetvalue

Dictionary<string, string> students = new Dictionary<string, string>();
Console.WriteLine("example for trygetvalue \n");

students.Add("S101", "Arthi");
students.Add("S102", "Priya");
students.Add("S103", "Kumar");

if (students.TryGetValue("S101", out string name))
{
    Console.WriteLine($"Student name: {name} \n");
}
else
{
    Console.WriteLine("Student not found \n");
}