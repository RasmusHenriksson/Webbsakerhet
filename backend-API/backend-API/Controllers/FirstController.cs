using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace backend_API.Controllers
{
    [EnableCors("restricted")]
    [Route("api/[controller]")]
    [ApiController]
    public class FirstController : ControllerBase
    {

        [HttpGet]
        [Route("test1")]
        public IActionResult Test1()
        {
            return new OkObjectResult(JsonConvert.SerializeObject(new { message = "test1" }));
        }

        [HttpGet]
        [Route("test2")]
        public IActionResult Test2()
        {
            return new OkObjectResult(JsonConvert.SerializeObject(new { message = "test2" }));
        }
    }
}
