

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run the following commands:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

## Backend Integration

For the backend, we have the option to use either **SQL Server** or **NoSQL** databases. In this case, since the data is relatively small, **JSON data** is being used for quick responses.

### Backend Steps:
1. **Convert Excel to JSON**: The data from the backend is converted from Excel format to JSON for faster processing and response.
2. **Database Connection**: Depending on the use case, you can either use a SQL Server or a NoSQL database. The current implementation uses JSON data for simplicity.
3. **Translation or Error Handling**: The backend provides translations or error messages, which will be processed and sent to the frontend.


### Show More / Show Less Buttons:
- **Show More**: Allows users to see more content or translations beyond the initial set of data.
- **Show Less**: Allows users to collapse the view and see only the initial content.



## Further Modifications

- **Dropdown for Language Filter**: This feature will be implemented to allow users to select their preferred language for the content.




