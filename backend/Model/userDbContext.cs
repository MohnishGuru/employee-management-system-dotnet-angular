using Microsoft.EntityFrameworkCore;

namespace employeeMngmentSysytem_full_stack_.Model
{
    public class userDbContext : DbContext
    {
        public userDbContext(DbContextOptions<userDbContext> options)
            : base(options)
        {
        }

        public DbSet<user> Users { get; set; }
    }
}
