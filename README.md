# Webbsakerhet

In this project we have a frontend using react and we have a backend-API folder using ASP.NET WEB-API.
We also use Entity Framework as a database cloud provider.
We also use Entity Framework as a database provider and if you don't have access to an image url you can further on upload images to a container over at Azures cloud provider.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

@@ -10,14 +10,15 @@ This project was bootstrapped with [Create React App](https://github.com/faceboo
- HTML
- CSS
- JavaScript
- EntityFrameWork
- Azure cloud provider

## INSTALLATION

inside the frontend application run :
`npm install`
(downloads the proper dependencies for this repository)

in the backend-API, create a new database table and pass in its connection string inside `SQL` in appsettings.
You also have to insert your Connectionstring from Azure's key vault inside the `StorageAccount` section.
run the following commands when it's done
`add-migration '(name)'`
`update-database`
@@ -30,7 +31,8 @@ Run the backend-API and wait for it to load, simultaneously in the vscode projec
Which runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
If you don't have access to an img-url you can also upload an image from your local directory and insert it into the images page!
To do so ,you have to insert your Connectionstring from Azure's key vault inside the `StorageAccount` section in the backendAPI (appsettings)
and it will be saved to your container at https://portal.azure.com/

:sparkles: To see the shared images, visit your microsoft azure resource page.
:sparkles: To see the shared images uploaded, visit your microsoft azure resource page.