////check directory
//using System.IO;
//string path = @"C:\Users\DELL\OneDrive\Pictures\Screenshots";

//if (Directory.Exists(path))
//{
//    Console.WriteLine("The directory exists.\n");
//}
//else
//{
//    Console.WriteLine("The directory does not exist.");
//}


////filetream

//using System;
//using System.IO;
//using System.Text;

//class Program
//{
//    static void Main()
//    {
//        string path = "D:/Training/DAYS/first.txt";

//        if (Directory.Exists(path))
//        {
//            Console.WriteLine("file exists \n");
//        }
//        else
//        {
//            var fs = File.Create(path);
//            fs.Close();
//            Console.WriteLine("file created \n");
//        }
//        FileStream demo = new FileStream("first.txt", FileMode.OpenOrCreate);
//        string msg = "hello! hi";
//        byte[] data = Encoding.UTF8.GetBytes(msg);
//        demo.Write(data, 0, data.Length);
//        demo.Seek(0, SeekOrigin.Begin);
//        demo.Flush();
//        demo.Dispose();
//        demo.Close();
//        Console.WriteLine("data written successfully \n");
//    }
//}

////stream writer

//using System;
//using System.IO;

//class Program
//{
//    static void Main()
//    {
//        using (StreamWriter writer = new StreamWriter("first.txt"))
//        {
//            writer.WriteLine("Name: Arthi \n");
//            writer.WriteLine("Age: 21 \n");
//            writer.WriteLine("Department: CSE \n");

//        }

//        Console.WriteLine("Data written successfully.\n");
//    }
//}

////streamreader

//using System;
//using System.IO;

//class Program
//{
//    static void Main()
//    {
//        using (StreamReader reader =
//               new StreamReader("first.txt"))
//        {
//            int value;
//            while ((value = reader.Read()) != -1)
//            {
//                char c = (char)value;
//                Console.Write(c);
//            }
//            //{
//            //    string data = reader.ReadToEnd();

//            //    Console.WriteLine(data);

//        }

//    }
//}


////subdirectories

//using System;
//using System.IO;

//class Program
//{
//    static void Main()
//    {
//        string[] folders =
//            Directory.GetDirectories(@"C:\Users\DELL");

//        foreach (string folder in folders)
//        {
//            Console.WriteLine(folder);
//        }
//    }
//}

//create file

using System;
using System.IO;

class Program
{
    static void Main()
    {
        File.Create(@"D:\Training\demo.txt");

        Console.WriteLine("File created");
    }
}
