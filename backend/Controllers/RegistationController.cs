using employeeMngmentSysytem_full_stack_.Model;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace employeeMngmentSysytem_full_stack_.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RegistationController : ControllerBase
    {
        private readonly userDbContext dbContext;

        public RegistationController(userDbContext dbContext)
        {
            this.dbContext = dbContext; 
        } 

       
        [HttpPost]  
        public IActionResult saveRegistation([FromBody] user User)
        {
            dbContext.Users.Add(User);  
            dbContext.SaveChanges();

            return Ok(User);
        }
        [HttpPost("login")]
        public IActionResult Login([FromBody] Login login)
        {
            var user = dbContext.Users
                .FirstOrDefault(x => x.Email == login.Email && x.Password == login.Password);

            return Ok(user);
        }
        [HttpGet]
        public IActionResult GetEmployeeList()
        {
            var users = dbContext.Users.ToList();
            return Ok(users);
        }
    }
}
