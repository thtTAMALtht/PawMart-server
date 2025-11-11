## 📂 Backend API Endpoints

### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/users` | Add a new user (if not exists) |

### Listings
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/listings` | Get all listings (query by email or category optional) |
| GET | `/listings/:id` | Get single listing by ID |
| POST | `/listings` | Add a new listing |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |
| GET | `/latest-listings` | Get latest 6 listings sorted by date |
| GET | `/search?search=<text>` | Search listings by name |

### Orders
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/orders` | Get all orders (query by email optional) |
| GET | `/orders/:id` | Get order by ID |
| POST | `/orders` | Create a new order |
| DELETE | `/orders/:id` | Delete an order |