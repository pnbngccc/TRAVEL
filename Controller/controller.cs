using Microsoft.AspNetCore.Mvc;
using System.Data;
using Microsoft.Data.SqlClient;

[Route("api/[controller]")]
[ApiController]
public class UsersController : ControllerBase
{
    private readonly string connectionString = "Your_Connection_String";

    [HttpPost("save")]
    public IActionResult Save([FromBody] User user)
    {
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand("INSERT INTO Users (Name, Email) VALUES (@Name, @Email)", connection))
            {
                command.Parameters.AddWithValue("@Name", user.Name);
                command.Parameters.AddWithValue("@Email", user.Email);
                command.ExecuteNonQuery();
            }
        }
        return Ok("Data saved successfully");
    }

    [HttpGet]
    public IActionResult GetAll()
    {
        var users = new List<User>();
        using (SqlConnection connection = new SqlConnection(connectionString))
        {
            connection.Open();
            using (SqlCommand command = new SqlCommand("SELECT * FROM Users", connection))
            {
                using (SqlDataReader reader = command.ExecuteReader())
                {
                    while (reader.Read())
                    {
                        users.Add(new User
                        {
                            Id = reader.GetInt32(0),
                            Name = reader.GetString(1),
                            Email = reader.GetString(2)
                        });
                    }
                }
            }
        }
        return Ok(users);
    }
}