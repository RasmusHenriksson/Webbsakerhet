using Microsoft.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(x =>
{
    x.AddDefaultPolicy(policy =>
    {
        policy.AllowAnyHeader();
        policy.AllowAnyMethod();
        policy.AllowAnyOrigin();
    });

    x.AddPolicy("restricted", policy =>
    {
        policy.WithOrigins("http://localhost:3000");
        policy.WithMethods("POST", "GET", "PUT", "DELETE");
        policy.WithHeaders(HeaderNames.ContentType, "x-custom-header");
    });

});

var app = builder.Build();

app.UseCors();

app.UseSwagger(); 
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();
