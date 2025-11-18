import { pgTable, serial, varchar, boolean, timestamp, text, integer } from "drizzle-orm/pg-core";

export const blogs = pgTable("blogs", {
  id: serial("id").primaryKey(),
  blog_title: text("blog_title").notNull(),
  blog_content: text("blog_content").notNull(),
  blog_slug: text("slug").notNull(),
  blog_excerpt: text("blog_excerpt").notNull(),
  author: varchar("author").notNull(),
  created_at: timestamp("created_at").notNull().defaultNow(),
  hero_image: varchar("hero_image", { length: 400 }).notNull()
})

export const categories = pgTable("categories", {
  id: serial("id").primaryKey(),
  category_name: varchar("category_name").notNull(),
  category_slug: varchar("category_slug").notNull().unique()
})

export const blogCatagoryJunction = pgTable("blog_category_junction", {
  blog_id: integer("blog_id").notNull().references(() => blogs.id),
  category_id: integer("category_id").notNull().references(() => categories.id),
})

// Member Schema
export const memberSchema = pgTable("members", {
  name: text("name").notNull(),
  business_name: varchar({length: 400 }).notNull(),
  business_address: text("business_address").notNull(),
  business_type: text("business_type").notNull(),
  business_description: text("business_description")
})

// Auth Schema
export const user = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
  emailVerified: boolean("email_verified").default(false).notNull(),
  image: text("image"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const session = pgTable("session", {
  id: text("id").primaryKey(),
  expiresAt: timestamp("expires_at").notNull(),
  token: text("token").notNull().unique(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
  ipAddress: text("ip_address"),
  userAgent: text("user_agent"),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
});

export const account = pgTable("account", {
  id: text("id").primaryKey(),
  accountId: text("account_id").notNull(),
  providerId: text("provider_id").notNull(),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  accessToken: text("access_token"),
  refreshToken: text("refresh_token"),
  idToken: text("id_token"),
  accessTokenExpiresAt: timestamp("access_token_expires_at"),
  refreshTokenExpiresAt: timestamp("refresh_token_expires_at"),
  scope: text("scope"),
  password: text("password"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const verification = pgTable("verification", {
  id: text("id").primaryKey(),
  identifier: text("identifier").notNull(),
  value: text("value").notNull(),
  expiresAt: timestamp("expires_at").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at")
    .defaultNow()
    .$onUpdate(() => /* @__PURE__ */ new Date())
    .notNull(),
});

export const authSchema = { user, session, account, verification }
