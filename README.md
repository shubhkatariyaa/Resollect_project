# Project Documentation: Resollect Portfolio project

## Overview
This project is a Loan Portfolio Management Dashboard developed using **React.js** and **Tailwind CSS**. It provides a structured interface for managing loan and borrower details, offering filtering, table customization, document uploads, and user profile management.

## Technologies Used
- **React.js** (Frontend development)
- **Tailwind CSS** (Styling)

## Features
### Sidebar Navigation
- The sidebar contains multiple sections for easy navigation.
- Includes a **Portfolio** section where loan and borrower data can be filtered and managed.
- A **Document Upload** section to upload and view documents related to loans.

### Portfolio Section
- A filter section at the top allows filtering data based on:
  - **State**
  - **Region**
  - **Sanction Amount**
  - **Other relevant loan parameters**
- A **Select Column** option allows users to choose which columns to display in the table.
- A **More Filters** option for additional filtering based on specific column values.
- **Loan Number Search Bar** to quickly search loan details.

### Table View
- Displays loan and borrower details with different columns.
- Shows **10 entries per page** with pagination controls (Next/Previous buttons).
- The table dynamically updates based on selected filters.

### User Profile Section
- Located at the **top-right corner** of the page (not in the sidebar navigation).
- Displays user-related information.

### Document Upload Section
- Found in the sidebar navigation.
- Allows users to upload relevant documents.
- Uploaded documents are listed for review.

## Functional Aspects
- **React Hooks** (e.g., `useState`, `useEffect`) are used for state management and data handling.
- **Dynamic Filtering** to refine table content based on user-selected criteria.
- **Pagination** to efficiently display data in batches of 10 entries per page.
- **Customizable Table View** to let users decide which columns they want to see.

## Conclusion
This Loan Portfolio Management Dashboard provides an intuitive and efficient way to manage loan and borrower data with extensive filtering and document handling capabilities. React.js and Tailwind CSS ensure a smooth, responsive, and modern user experience.



# Installation & Setup

## Clone the repository:

- <a href="https://github.com/shubhkatariyaa/Resollect_project/tree/main">Resollect Project</a>
- cd resollect-dashboard

## Install dependencies:

- npm install

## Start the development server:

- npm start

**[Note : If you download the project as a ZIP file and extract it, it may create a subfolder with the same name. For example, if the file is named my_dashboard.zip, it might extract into a folder named my_dashboard. In this case, navigate inside the extracted folder using: cd my_dashboard  ]**

## Access the application:
- <a href="http://localhost:3000">Local Host</a> in your browser.


![image alt](https://github.com/shubhkatariyaa/Resollect_project/blob/6d46c7d4c8f0b2a48d7f17103ff99b3ba4dfc4cf/portfolio%20page.png)
#### image 1 :Portfolio page

![image alt](https://github.com/shubhkatariyaa/Resollect_project/blob/6d46c7d4c8f0b2a48d7f17103ff99b3ba4dfc4cf/profile%20section.png)
#### image 2 :Profile Section
