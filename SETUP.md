# E-Commerce Application Setup Guide

## Environment Variables Setup

To get the application fully working, you need to configure the following environment variables in your `.env` file:

### Required for Authentication (Clerk)

1. Go to [Clerk Dashboard](https://dashboard.clerk.com)
2. Create a new application
3. Copy the following keys to your `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

### Optional (for full functionality)

```env
# Database (MongoDB)
MONGODB_URI=mongodb://localhost:27017/ecommerce

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Inngest (for background jobs)
INNGEST_SIGNING_KEY=your_signing_key
INNGEST_EVENT_KEY=your_event_key
```

## Quick Start

1. Copy `.env` file and add your Clerk keys
2. Run `npm install` to install dependencies
3. Run `npm run dev` to start the development server
4. Visit `http://localhost:3000`

## Features Now Working

✅ **Authentication**: Sign up and login with Clerk
✅ **Cart Functionality**: Add to cart, view cart, update quantities
✅ **Seller Dashboard**: Add products (with form validation)
✅ **API Endpoints**: RESTful API for products, cart, orders
✅ **Order Placement**: Complete order flow with address selection
✅ **Responsive Design**: Works on mobile and desktop

## Testing the Application

1. **Sign Up/Login**: Click "Sign In" in the navbar to authenticate
2. **Browse Products**: View products on homepage and all-products page
3. **Add to Cart**: Click "Add to Cart" on any product card
4. **View Cart**: Click cart icon in navbar to see cart items
5. **Seller Dashboard**: Sign in and click "Seller Dashboard" to add products
6. **Place Order**: Add items to cart and complete checkout process

## Thunder Client Testing

The application now has proper API endpoints that can be tested with Thunder Client:

- `GET /api/products` - Get all products
- `POST /api/products` - Add new product (requires authentication)
- `GET /api/cart` - Get cart items (requires authentication)
- `POST /api/cart` - Add to cart (requires authentication)
- `POST /api/orders` - Place order (requires authentication)
- `GET /api/auth` - Check authentication status

Make sure to include proper authentication headers when testing protected endpoints.
