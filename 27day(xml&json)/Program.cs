//json example
using System;
using System.Text.Json;
using System.Xml.Linq;
class Program
{
    static void Main()
    {
        var student = new
        {
            Name = "Arun",
            Age = 21,
            City = "Chennai"
        };
        string json = JsonSerializer.Serialize(student);
        Console.WriteLine("example for json \n");
        Console.WriteLine(json);
    }
}

//xml example

using System.Xml.Linq;

class Program
{
    static void Main()
    {
        XElement product = new XElement("Product",
            new XElement("Name", "Laptop"),
            new XElement("Price", 45000),
            new XElement("Brand", "Dell")
        );
        Console.WriteLine("example for xml\n");
        Console.WriteLine(product);
    }
}

//example for itextsharp
using System;
using System.IO;
using iTextSharp.text;
using iTextSharp.text.pdf;

class Program
{
    static void Main()
    {
        iTextSharp.text.Document document =
            new iTextSharp.text.Document();

        PdfWriter.GetInstance(
            document,
            new FileStream("invoice.pdf", FileMode.Create)
        );

        document.Open();

        document.Add(new Paragraph("INVOICE"));
        document.Add(new Paragraph("----------------"));
        document.Add(new Paragraph("Product: Keyboard"));
        document.Add(new Paragraph("Quantity: 2"));
        document.Add(new Paragraph("Price: Rs. 1500"));
        document.Add(new Paragraph("Total: Rs. 3000"));

        document.Close();

        Console.WriteLine("Invoice PDF created successfully \n");
    }
}

