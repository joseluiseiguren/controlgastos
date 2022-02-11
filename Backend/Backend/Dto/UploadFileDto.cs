using Microsoft.AspNetCore.Http;

namespace Backend.Dto
{
    public class UploadFileDto
    {
        public string FileName { get; set; }

        public string LogContent { get; set; }
    }
}
