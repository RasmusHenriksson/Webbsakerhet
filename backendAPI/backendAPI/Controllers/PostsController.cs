using backendAPI.Data;
using backendAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;
using System.Text.RegularExpressions;
using System.Web;

namespace backendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]  
    public class PostsController : ControllerBase
    {
        private readonly DataContext _context;
        private string[] _tagsAllowed = new string[] { "<b>", "</b>", "<i>", "</i>"};
        public PostsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<IActionResult> GetPosts()
        {
            List<PostEntity> Comments = await _context.Posts.ToListAsync();
            foreach(var comment in Comments)
            {
                comment.Body = HttpUtility.HtmlEncode(comment.Body);
            }

            foreach(var tag in _tagsAllowed)
            {
                var encodedTag = HttpUtility.HtmlEncode(tag);
                foreach(var comment in Comments)
                {
                    comment.Body = comment.Body.Replace(encodedTag, tag);
                }
            }
            return Ok(Comments);
        }
        [HttpPost]
        [Authorize]
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

              string encodedContent = HttpUtility.HtmlEncode(postEntity.Body);

                foreach(var tag in _tagsAllowed)
                {
                    var encodedTag = HttpUtility.HtmlEncode(tag);
                    encodedContent = encodedContent.Replace(encodedTag, tag);
                }

                postEntity.Body = encodedContent;

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
