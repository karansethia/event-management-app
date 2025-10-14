CREATE TABLE "blog_category_junction" (
	"blog_id" integer NOT NULL,
	"category_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "blogs" (
	"id" serial PRIMARY KEY NOT NULL,
	"blog_title" text NOT NULL,
	"blog_content" text NOT NULL,
	"author" varchar NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"hero_image" varchar(400) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"category_name" varchar NOT NULL,
	"category_slug" varchar NOT NULL,
	CONSTRAINT "categories_category_slug_unique" UNIQUE("category_slug")
);
--> statement-breakpoint
ALTER TABLE "blog_category_junction" ADD CONSTRAINT "blog_category_junction_blog_id_blogs_id_fk" FOREIGN KEY ("blog_id") REFERENCES "public"."blogs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "blog_category_junction" ADD CONSTRAINT "blog_category_junction_category_id_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."categories"("id") ON DELETE no action ON UPDATE no action;