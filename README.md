# OlxClone

OlxClone is a web application that allows users to buy and sell items from other sellers. It provides a platform for users to list their items for sale, browse listings from other sellers, and make purchases.

## Features

- **User Authentication:** Users can sign up for an account, log in, and log out.
- **Create Listings:** Sellers can create listings for items they want to sell, including details such as title, description, price, and images.
- **Browse Listings:** Users can browse listings from other sellers, view item details, and filter listings based on various criteria.
- **Chat with Seller:** Users can communicate with sellers through a built-in chat feature, enabling negotiation and discussion of item details.
- **Negotiate Price:** Buyers and sellers can negotiate prices and terms directly through the chat feature.
- **Mark Item as Sold:** Sellers can mark their items as sold once they are no longer available for purchase.
- **Set Up Profile:** Users can set up their profiles and manage listings.
- **Add Items to Favorites:** Users can save listings to their favorites for quick access and future reference.
- **Real-time Updates:** The application utilizes Firebase's real-time database to provide instant updates on listings, purchases, and user interactions.

## Technologies Used

- **Frontend:** React.js
- **Backend:** Firebase (Authentication, Firestore, Realtime Database)
- **Hosting:** Firebase Hosting

## Installation

To run the OlxClone project locally, follow these steps:

1. Clone the repository:



```
git clone https://github.com/your-username/OlxClone.git

```

2. Navigate to the project directory:

```
cd OlxClone


```

3. Install dependencies:

```
npm install

```


4. Set up Firebase:

- Create a Firebase project in the Firebase Console.
- Enable Firebase Authentication, Firestore, and Realtime Database.
- Copy your Firebase configuration (apiKey, authDomain, projectId, etc.).
- Replace the Firebase configuration in the project's code with your own. You will get the same from firebase console itself. Copy paste it in the `.env` file in the root folder.

  Example `.env` file:

  ```
  REACT_APP_API_KEY=your-api-key
  REACT_APP_AUTH_DOMAIN=your-auth-domain
  REACT_APP_PROJECT_ID=your-project-id
  REACT_APP_STORAGE_BUCKET=your-storage-bucket
  REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
  REACT_APP_APP_ID=your-app-id
  REACT_APP_DATABASE_URL=your-database-url
  ```

5. Start the development server:



```
npm start

```

6. Open your web browser and navigate to `http://localhost:3000` to view the application.

## Contributing

Contributions to OlxClone are welcome! If you encounter any bugs, have feature requests, or would like to contribute to the project, please open an issue or submit a pull request.


