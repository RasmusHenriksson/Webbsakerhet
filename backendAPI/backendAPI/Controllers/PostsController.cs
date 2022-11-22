using backendAPI.Data;
using backendAPI.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

namespace backendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]  
    public class PostsController : ControllerBase
    {
        private readonly DataContext _context;
        public PostsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            return new OkObjectResult(await _context.Posts.ToListAsync());
        }
        [HttpPost]
        public async Task<IActionResult> CreatePost(PostRequest post)
        {
            try
            {
                var postEntity = new PostEntity
                {
                    Title = post.Title,
                    Body = post.Body,
                    imgUrl = post.imgUrl
                };
                _context.Posts.Add(postEntity);
                 await _context.SaveChangesAsync();
                return new CreatedResult("https://localhost:7272/api/Posts", postEntity);
            }
            catch (Exception ex) 
            { 
                Debug.WriteLine(ex.Message);
            }
            return new BadRequestResult();

            
        }
    }
}
