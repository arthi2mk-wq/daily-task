//conditional statement
//if condition

Console.WriteLine("Example of if statement \n");
double total = 5000;
double withdraw = 2000;
Console.WriteLine($"total amount is:{total} \n");
Console.WriteLine($"withdraw amount is:{withdraw} \n");
if (total > withdraw)
{
    Console.WriteLine("withdraw successfully \n");

}
double balance = total - withdraw;

Console.WriteLine($"Now,your balance is: {balance} \n");

//else coditional
Console.WriteLine("Example of else statement \n");
int mark = 78;
Console.WriteLine($"Your mark is:{mark} \n");
if (mark >= 35)
{
    Console.WriteLine("congrats,you passed this exam \n");
}
else
{
    Console.WriteLine("you failed this exam \n");
}

//else-if statement
Console.WriteLine("example for else-if statement \n");
Console.WriteLine("check the grade of student \n");
 mark = 80;
Console.WriteLine($"your mark is:{mark} \n");
if (mark >= 90)
{
    Console.WriteLine("A Grade");
}
else if (mark >= 75)
{
    Console.WriteLine("B Grade");
}
else if (mark >= 50)
{
    Console.WriteLine("C Grade");
}
else
{
    Console.WriteLine("Fail");
}


//switch statement
Console.WriteLine("example for switch statement \n");
Console.WriteLine("check the student department \n");
string department = "CSE";
Console.WriteLine($"Your department:{department} \n");
switch (department)
{
    case "CSE":
        Console.WriteLine("Computer science department \n");
        break;
    case "IT":
        Console.WriteLine("Information Technology department \n");
        break;
    case "MECH":
        Console.WriteLine("Mechanical departmant \n");
        break;
    default:
        Console.WriteLine("Department not found \n");
        break;
}

//for loop
Console.WriteLine(" for loop example \n");
for (int i = 0; i < 10; i++)
{
    Console.WriteLine($"transaction number is:{i:d3} \n");
}

//using break statement
//for loop
Console.WriteLine("example for break statement \n");
for (int i = 0; i < 10; i++)
{


    if (i == 5)
    {

        break;

    }
    Console.WriteLine($"transaction number is:{i:d3} \n");
}

//using continue statement
//for loop
Console.WriteLine("example for continue statement \n");
for (int i = 0; i < 10; i++)
{


    if (i == 5)
    {

        continue;

    }
    Console.WriteLine($"transaction number is:{i:d3} \n");
}

//forEach loop
Console.WriteLine("foreach example \n");
string[] products =
{
    "laptop",
    "Tv",
    "keyboard",
    "mouse"
};
foreach (string product in products)
{
    Console.WriteLine($"The product is:{product} \n");
}


//while loop
Console.WriteLine("example for while loop \n");
int attempts = 0;
string userpassword = "";

string password = "1234";
while (attempts < 3)
{
    Console.WriteLine("enter your password \n");

    userpassword = Console.ReadLine();
    if (userpassword == password)
    {
        Console.WriteLine("login successfully \n");
        break;
    }
    attempts++;
    Console.WriteLine("wrong password,try again \n");

}
if (attempts == 3)
{
    Console.WriteLine("account locked \n");
}


//dowhile loop
Console.WriteLine("example for dowhile loop \n");

int num = 0;
do
{
    Console.WriteLine($"the number:{num} \n");
    num++;
} while (num < 5);


//ternary operation
Console.WriteLine("example for ternary operation \n");
int age = 20;
Console.WriteLine("check the person is eligible to vote \n");
Console.WriteLine($"Age is:{age} \n");
Console.WriteLine(age >= 18 ? "Eligible" : "Not Eligible");

string result = age >= 18 ? "Eligible" : "Not Eligible";
Console.WriteLine(result);
