namespace backendAPI.Models
{
    public class PostRequest
    {
        public string Title { get; set; } = null!;
        public string Body { get; set; } = null!;

        public string imgUrl { get; set; } = null!;
    }
}
