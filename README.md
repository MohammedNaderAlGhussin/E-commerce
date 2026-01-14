# 🛒 Kaufra - Modern Full-Stack E-Commerce Platform

Kaufra is a high-performance, feature-rich E-commerce solution built with the latest **Next.js 15/16** App Router. It leverages a robust stack including **Prisma**, **PostgreSQL**, and **Auth.js v5** to deliver a seamless shopping experience from product discovery to secure checkout with Stripe and PayPal.

---

## 🚀 Key Features

### 🛍️ Core E-Commerce

* **Dynamic Product Catalog:** Advanced filtering by category, price range, and ratings with real-time URL state synchronization.
* **Search Engine:** Full-text search functionality integrated with the PostgreSQL backend.
* **Shopping Cart:** Persistent cart logic supporting both Guest users (session-based) and Authenticated users (database-persisted), with seamless merging upon login.
* **Multi-Step Checkout:** Structured flow covering shipping address, payment method selection, and order review.

### 🔐 Authentication & Security

* **NextAuth.js v5 (Auth.js):** Implementation using **JWT and Cookies**.
* **Bcrypt Encryption:** Secure password hashing for local credentials.
* **Protected Routes:** Robust middleware and server-side checks for user profiles and admin-only areas.

### 🛡️ Admin Dashboard

* **Resource Management:** Full CRUD operations for products, users, and orders.
* **Data Visualization:** Sales analytics and order trends powered by **Recharts**.
* **Image Management:** Integrated file uploads via **Uploadthing**.

### 🎨 UI/UX

* **Theming:** Native **Dark and Light mode** support via `next-themes`.
* **Responsive Design:** Mobile-first approach using **Tailwind CSS** and **ShadCN UI**.
* **Form Handling:** Type-safe form management with **React Hook Form** and **Zod** validation.

---

## 🛠️ The Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 15/16 (App Router), React 19 |
| **Language** | TypeScript |
| **Database** | PostgreSQL (Hosted on Vercel/Neon) |
| **ORM** | Prisma |
| **Authentication** | Auth.js v5 (NextAuth) |
| **Styling** | Tailwind CSS, ShadCN UI, Lucide React |
| **Payments** | Stripe & PayPal SDKs |
| **Validation** | Zod |
| **Emails** | React Email & Resend |

---

## 📂 Project Structure

```text
app/
 ├─ (auth)/
 │   ├─ sign-in/
 │   ├─ sign-up/
 │   ├─ layout.tsx
 │   └─ Password.tsx
 │
 ├─ (root)/
 │   ├─ cart/
 │   ├─ order/
 │   ├─ payment-method/
 │   ├─ place-order/
 │   ├─ product/
 │   ├─ search/
 │   ├─ shipping-address/
 │   ├─ layout.tsx
 │   └─ page.tsx
 │
 ├─ admin/
 │   ├─ orders/
 │   ├─ overview/
 │   ├─ products/
 │   ├─ users/
 │   │   └─ [id]/
 │   ├─ page.tsx
 │   ├─ layout.tsx
 │   └─ main-nav.tsx
 │
 └─ api/
     ├─ auth/ [...nextauth]
     ├─ uploadthing
     └─ webhooks
│── user/               # User-specific routes (Orders, Profile)
├── components/             # Reusable UI components
│   ├── admin/              # Admin-specific components
│   ├── shared/             # General purpose components (Header, Footer, ProductCard)
│   └── ui/                 # ShadCN UI primitive components
├── db/                     # Prisma schema and database seed files
├── hooks/                  # Custom React hooks
├── lib/                    # Core logic and utilities
│   ├── actions/            # Server Actions (Product, Cart, Order, User)
│   ├── validators/         # Zod schemas for data integrity
│   └── utils.ts            # Formatting and helper functions
├── public/                 # Static assets
└── types/                  # Global TypeScript definitions

```

---

## 🔑 Authentication Architecture

Kaufra utilizes **Auth.js v5** with a **JWT strategy** stored in secure, HTTP-only cookies.

* **Session-Cart Merging:** When a guest user adds items to their cart and subsequently logs in, the `jwt` callback in `auth.ts` triggers logic to merge the guest session cart with the user's database-persisted cart.
* **Route Guards:** Access is controlled via `middleware.ts` and the `authorized` callback, ensuring that:
* `/admin` is strictly reserved for users with the `admin` role.
* `/shipping-address` and `/user/*` require an active session.



---

## 🏆 Achievements & Challenges

### 🥇 Achievements

* **Full Type Safety:** Achieved end-to-end type safety from the database (Prisma) to the UI (Zod + React Hook Form).
* **Performance Optimization:** Leveraged Next.js Server Components to minimize client-side JavaScript bundle sizes.
* **Dual Payment Integration:** Successfully implemented both Stripe and PayPal, providing users with flexible checkout options.
* **Complex State Management:** Built a robust cart system that handles complex edge cases like stock availability and guest-to-user transitions.

### 🧗 Challenges

* **React 19 Compatibility:** Navigating the transition to Next.js 15/16 and React 19 required using `--legacy-peer-deps` for certain third-party libraries that hadn't yet updated their peer dependencies.
* **Server Actions Logic:** Transitioning from traditional API routes to **Server Actions** required a mindset shift regarding error handling and optimistic UI updates.
* **Database Concurrency:** Ensuring that cart updates and stock decrements remain consistent during high-traffic simulations.

---

## 🛠️ Getting Started

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/kaufra.git

```


2. **Install dependencies:**
```bash
npm install --legacy-peer-deps

```


3. **Environment Variables:**
Create a `.env` file based on `.env.example` and fill in your PostgreSQL URL, Auth Secret, Stripe, and PayPal keys.
4. **Database Setup:**
```bash
npx prisma generate
npx prisma db push
npx prisma db seed

```


5. **Run the development server:**
```bash
npm run dev

```



---

*Developed by the Kaufra Team - 2024/2025*

---

**Would you like me to refine any specific section, such as adding more detail to the payment webhook logic or the specific Prisma models?**