//using Microsoft.Data.SqlClient;

//string connectionString =
//    "Server=localhost;" +
//    "Database=HospitalDB;" +
//    "Trusted_Connection=True;" +
//    "TrustServerCertificate=True;";

//SqlConnection connection = new SqlConnection(connectionString);

//connection.Open();

//Console.WriteLine("Connected successfully!");

//connection.Close();

////sql command

//using Microsoft.Data.SqlClient;

//string connectionString =
//    "Server=localhost;" +
//    "Database=CompanyDB;" +
//    "Trusted_Connection=True;" +
//    "TrustServerCertificate=True;";

//using SqlConnection connection = new SqlConnection(connectionString);

//connection.Open();

//string query = "SELECT * FROM Employees";

//using SqlCommand command = new SqlCommand(query, connection);

//command.ExecuteNonQuery();

//Console.WriteLine("Query executed \n");

////executescalar

//using Microsoft.Data.SqlClient;

//string connectionString =
//    "Server=localhost;" +
//    "Database=CompanyDB;" +
//    "Trusted_Connection=True;" +
//    "TrustServerCertificate=True;";

//using SqlConnection connection = new SqlConnection(connectionString);

//connection.Open();

//string query = "SELECT COUNT(*) FROM Employees";

//using SqlCommand command = new SqlCommand(query, connection);

//int count = (int)command.ExecuteScalar();

//Console.WriteLine("Total employees: " + count);

//using parameter

using Microsoft.Data.SqlClient;

string connectionString =
    "Server=localhost;" +
    "Database=CompanyDB;" +
    "Trusted_Connection=True;" +
    "TrustServerCertificate=True;";

using SqlConnection connection = new SqlConnection(connectionString);

connection.Open();

string query = "SELECT * FROM Employees WHERE Id = @Id";

using SqlCommand command = new SqlCommand(query, connection);

command.Parameters.AddWithValue("@Id", 2);

using SqlDataReader reader = command.ExecuteReader();

while (reader.Read())
{
    Console.WriteLine(reader["Id"]);
    Console.WriteLine(reader["Name"]);
    Console.WriteLine(reader["Age"]);
    Console.WriteLine(reader["Salary"]);
}
