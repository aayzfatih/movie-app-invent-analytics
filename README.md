## Project Setup
To run this project locally, follow these steps:

1. Clone this repository to your local machine.  
2. Navigate to the project directory using `cd my-project.`  
3. Install the necessary dependencies by running `npm install`.  
4. Copy the `.env.example` file and rename it to `.env`, then add your API key inside this file.  
5. Start the project by running `npm start`. 


## Environment Variables
To run the project, you need to create a .env file that contains sensitive information like API keys. Follow these steps:  

1. Copy the `.env.example` file and rename it to `.env`.  
2. Open the `.env` file and add your API key.  
3. Do not add the `.env` file to version control (add it to .gitignore).   



## API Keys
This project uses the OMDb API to fetch movie information. Visit the (https://www.omdbapi.com/) url page to obtain your API key.  

After obtaining your API key, add it to the .env file.  


## Features
- List movies with name, release date, and IMDb ID. 
- Pagination to display 10 movies per page. 
- Search movies by name. 


## Technologies Used
- React  
- Redux Toolkit
- TypeScript
- Tailwind CSS

