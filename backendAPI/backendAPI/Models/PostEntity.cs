using System.ComponentModel.DataAnnotations;

namespace backendAPI.Models
{
    public class PostEntity
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; } = null!;
        [Required]
        public string Body { get; set; } = null!;

        public string imgUrl { get; set; } = null!;
    }
}
