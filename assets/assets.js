import logo from "./logo.svg";
import search_icon from "./search_icon.svg";
import user_icon from "./user_icon.svg";
import cart_icon from "./cart_icon.svg";
import add_icon from "./add_icon.svg";
import order_icon from "./order_icon.svg";
import instagram_icon from "./instagram_icon.svg";
import facebook_icon from "./facebook_icon.svg";
import twitter_icon from "./twitter_icon.svg";
import box_icon from "./box_icon.svg";
import product_list_icon from "./product_list_icon.svg";
import menu_icon from "./menu_icon.svg";
import arrow_icon from "./arrow_icon.svg";
import increase_arrow from "./increase_arrow.svg";
import decrease_arrow from "./decrease_arrow.svg";
import arrow_right_icon_colored from "./arrow_right_icon_colored.svg";
import my_location_image from "./my_location_image.svg";
import arrow_icon_white from "./arrow_icon_white.svg";
import heart_icon from "./heart_icon.svg";
import star_icon from "./star_icon.svg";
import redirect_icon from "./redirect_icon.svg";
import star_dull_icon from "./star_dull_icon.svg";
import upload_area from "./upload_area.png";
import checkmark from "./checkmark.png";

export const assets = {
  logo,
  search_icon,
  user_icon,
  cart_icon,
  add_icon,
  order_icon,
  instagram_icon,
  facebook_icon,
  twitter_icon,
  box_icon,
  product_list_icon,
  menu_icon,
  arrow_icon,
  increase_arrow,
  decrease_arrow,
  arrow_right_icon_colored,
  my_location_image,
  arrow_icon_white,
  heart_icon,
  star_icon,
  redirect_icon,
  star_dull_icon,
  upload_area,
  checkmark,
};

export const BagIcon = () => {
  return (
    <svg
      className="w-5 h-5 text-gray-800"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9 10V6a3 3 0 0 1 3-3v0a3 3 0 0 1 3 3v4m3-2 .917 11.923A1 1 0 0 1 17.92 21H6.08a1 1 0 0 1-.997-1.077L6 8h12Z"
      />
    </svg>
  );
};

export const CartIcon = () => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.75 0.75H3.75L5.76 10.7925C5.82858 11.1378 6.01643 11.448 6.29066 11.6687C6.56489 11.8895 6.90802 12.0067 7.26 12H14.55C14.902 12.0067 15.2451 11.8895 15.5193 11.6687C15.7936 11.448 15.9814 11.1378 16.05 10.7925L17.25 4.5H4.5M7.5 15.75C7.5 16.1642 7.16421 16.5 6.75 16.5C6.33579 16.5 6 16.1642 6 15.75C6 15.3358 6.33579 15 6.75 15C7.16421 15 7.5 15.3358 7.5 15.75ZM15.75 15.75C15.75 16.1642 15.4142 16.5 15 16.5C14.5858 16.5 14.25 16.1642 14.25 15.75C14.25 15.3358 14.5858 15 15 15C15.4142 15 15.75 15.3358 15.75 15.75Z"
        stroke="#4b5563"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <rect width="18" height="18" fill="white" />
      </defs>
    </svg>
  );
};

export const BoxIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M10 21v-9m3-4H7.5a2.5 2.5 0 1 1 0-5c1.5 0 2.875 1.25 3.875 2.5M14 21v-9m-9 0h14v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8ZM4 8h16a1 1 0 0 1 1 1v3H3V9a1 1 0 0 1 1-1Zm12.155-5c-3 0-5.5 5-5.5 5h5.5a2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);

export const HomeIcon = () => (
  <svg
    className="w-5 h-5 text-gray-800"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
    />
  </svg>
);

export const productsDummyData = [
  {
    _id: "67a1f4e43f34a77b6dde9144",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Women's Summer Dress",
    description:
      "Elegant yellow summer dress perfect for any occasion. Made with high-quality fabric, this dress offers comfort and style. Features a flattering fit and vibrant color that will make you stand out. Perfect for casual outings, parties, or special events.",
    price: 89.99,
    offerPrice: 69.99,
    image: [
      "https://images.pexels.com/photos/1055691/pexels-photo-1055691.jpeg",
    ],
    category: "Dresses",
    date: 1738667236865,
    __v: 0,
  },
  {
    _id: "67a1f52e3f34a77b6dde914a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Men's Casual T-Shirt",
    description:
      "Premium quality men's t-shirt crafted for comfort and style. Made with breathable cotton fabric, this t-shirt is perfect for everyday wear. Features a relaxed fit and modern design that pairs well with any outfit. Available in multiple colors.",
    price: 29.99,
    offerPrice: 24.99,
    image: [
      "https://images.pexels.com/photos/32717996/pexels-photo-32717996.jpeg",
    ],
    category: "Men",
    date: 1738667310300,
    __v: 0,
  },
  {
    _id: "67a1f5663f34a77b6dde914c",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Women's Denim Jeans",
    description:
      "Stylish women's jeans that combine comfort with contemporary fashion. Made with high-quality denim fabric, these jeans offer a perfect fit and durability. Features a flattering cut and versatile design that works for both casual and semi-formal occasions.",
    price: 79.99,
    offerPrice: 59.99,
    image: [
      "https://images.pexels.com/photos/32753087/pexels-photo-32753087.jpeg",
    ],
    category: "Women",
    date: 1738667366224,
    __v: 0,
  },
  {
    _id: "67a1f5993f34a77b6dde914e",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Winter Coat",
    description:
      "Warm and stylish winter coat designed to keep you cozy during cold weather. Features high-quality insulation and a fashionable design. Perfect for winter outings and everyday wear. Offers excellent protection against wind and cold while maintaining a chic appearance.",
    price: 149.99,
    offerPrice: 119.99,
    image: ["https://images.pexels.com/photos/54203/pexels-photo-54203.jpeg"],
    category: "Outerwear",
    date: 1738667417511,
    __v: 0,
  },
  {
    _id: "67a1f5ef3f34a77b6dde9150",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Classic Sneakers",
    description:
      "Comfortable and stylish sneakers perfect for everyday wear. Made with durable materials and featuring a modern design. These sneakers offer excellent support and comfort for all-day wear. Perfect for casual outings, sports, or daily activities.",
    price: 89.99,
    offerPrice: 69.99,
    image: [
      "https://images.pexels.com/photos/32752670/pexels-photo-32752670.jpeg",
    ],
    category: "Shoes",
    date: 1738667503075,
    __v: 0,
  },
  {
    _id: "67a1f70c3f34a77b6dde9156",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Summer Blouse",
    description:
      "Light and airy summer blouse perfect for warm weather. Made with breathable fabric and featuring a feminine design. This blouse offers comfort and style for any summer occasion. Pairs beautifully with jeans, skirts, or shorts.",
    price: 49.99,
    offerPrice: 39.99,
    image: [
      "https://images.pexels.com/photos/12626457/pexels-photo-12626457.png",
    ],
    category: "Tops",
    date: 1738667788883,
    __v: 0,
  },
  {
    _id: "67a1f7c93f34a77b6dde915a",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    name: "Designer Handbag",
    description:
      "Elegant designer handbag crafted with premium materials. Features a spacious interior and stylish design that complements any outfit. Perfect for work, shopping, or special occasions. Offers both functionality and fashion in one beautiful accessory.",
    price: 199.99,
    offerPrice: 159.99,
    image: [
      "https://images.pexels.com/photos/32747249/pexels-photo-32747249.jpeg",
    ],
    category: "Accessories",
    date: 1738667977644,
    __v: 0,
  },
];

export const userDummyData = {
  _id: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
  name: "Forever Customer",
  email: "customer@forever.com",
  imageUrl:
    "https://img.clerk.com/eyJ0eXBlIjoiZGVmYXVsdCIsImlpZCI6Imluc18ycnlnUnFiUDBYT2dEZ2h1ZmRXcGlpdWV5OXoiLCJyaWQiOiJ1c2VyXzJzWkZIUzFVSUl5c0p5RFZ6Q3BRaFVoVElodyJ9",
  cartItems: {},
  __v: 0,
};

export const orderDummyData = [];

export const addressDummyData = [
  {
    _id: "67a1e4233f34a77b6dde9055",
    userId: "user_2sZFHS1UIIysJyDVzCpQhUhTIhw",
    fullName: "Forever Customer",
    phoneNumber: "0123456789",
    pincode: 654321,
    area: "Fashion District, 123 Style Street, A Block",
    city: "New York",
    state: "New York",
    __v: 0,
  },
];
