# Order Management Dashboard

> Created by **Maram** for Tuniform

A full-stack order management system built with Next.js, shadcn/ui, and MySQL for Tuniform.

## Features

- 📊 **Dashboard**: View all orders in a clean table format
- ➕ **Add Orders**: Create new orders using a modal form
- 🏠 **Home Page**: Welcome page with Tuniform branding
- 📱 **Responsive Design**: Works on desktop and mobile devices
- 🎨 **Modern UI**: Built with shadcn/ui components

## Tech Stack

- **Frontend**: Next.js 14 (App Router), TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: MySQL
- **Form Handling**: React Hook Form with Zod validation
- **Icons**: Lucide React

## Prerequisites

Before running this project, make sure you have:

- Node.js 18.18.0+ installed
- MySQL database running
- Git installed

## Installation & Setup

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Maram121/order-management-dashboard.git
cd order-management-dashboard
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`

### 3. Database Setup

Create a MySQL database and run the SQL script in \`scripts/create-tables.sql\`:

\`\`\`sql
CREATE DATABASE order_management;
USE order_management;

CREATE TABLE orders (
  id INT AUTO_INCREMENT PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Optional: Insert sample data
INSERT INTO orders (customer_name, email) VALUES
('John Doe', 'john@example.com'),
('Jane Smith', 'jane@example.com'),
('Bob Johnson', 'bob@example.com');
\`\`\`

### 4. Environment Variables

Create a \`.env.local\` file in the root directory:

\`\`\`
DATABASE_URL="mysql://DB_USER:DB_PASSWORD@localhost:3306/order_management"
\`\`\`

DB_USER=your_mysql_username
DB_PASSWORD=your_mysql_password



### 5. Run the Application

\`\`\`bash
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Usage

### Navigation
- **Home**: Welcome page with Tuniform branding
- **Dashboard**: View and manage orders

### Adding Orders
1. Go to the Dashboard page
2. Click "Add New Order" button
3. Fill in customer name and email
4. Click "Create Order"

### Viewing Orders
- All orders are displayed in a table on the Dashboard
- Shows ID, customer name, email, and creation date
- Orders are sorted by creation date (newest first)

## Project Structure

\`\`\`
src/
├── app/
│   ├── api/orders/          # API routes for orders
│   ├── dashboard/           # Dashboard page
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with sidebar
│   └── page.tsx             # Home page
├── components/
│   ├── ui/                  # shadcn/ui components
│   ├── add-order-modal.tsx  # Add order modal component
│   ├── app-sidebar.tsx      # Sidebar navigation
│   └── orders-table.tsx     # Orders table component
│   └── footer.tsx           # Footer component
├── hooks/
│   └── use-mobile.ts        # Mobile detection hook
├── lib/
│   ├── db.ts               # Database connection
│   └── utils.ts            # Utility functions
├── types/
│   └── order.ts            # TypeScript types
└── scripts/
    └── create-tables.sql   # Database schema
\`\`\`

## API Endpoints

- \`GET /api/orders\` - Fetch all orders
- \`POST /api/orders\` - Create a new order

## Testing

### Test Cases
- ✅ Create order with valid data
- ✅ Form validation for required fields
- ✅ Email format validation
- ✅ Order list refresh after creation
- ✅ Responsive design on mobile/desktop

## Deployment

This project can be deployed on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- Railway
- DigitalOcean

Make sure to:
1. Set up your production database
2. Configure environment variables
3. Update database connection settings

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is created by Maram for Tuniform's technical assessment.

## Author

**Maram** - Full Stack Developer  
Created for Tuniform's technical assessment  
© 2025 All rights reserved
