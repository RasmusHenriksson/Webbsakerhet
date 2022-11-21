using backendAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace backendAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<PostEntity> Posts { get; set; }
    }
}
