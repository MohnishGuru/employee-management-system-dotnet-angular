using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace employeeMngmentSysytem_full_stack_.Model
{
    [Table("Users")]
    public class user
    {
        [Key]   
        public int UserId { get; set; }

        [Required, MaxLength(50)]
        public string FirstName { get; set; }

        [Required, MaxLength(50)]
        public string LastName { get; set; }

        [Required, MaxLength(100)]
        public string Email { get; set; }

        [Required, MaxLength(255)]
        public string Password { get; set; }

        [Required, MaxLength(10)]
        public string Mobile { get; set; }

        [Required, MaxLength(10)]
        public string Gender { get; set; }
    }
}
