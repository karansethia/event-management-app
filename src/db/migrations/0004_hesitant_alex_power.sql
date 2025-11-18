CREATE TABLE "members" (
	"name" text NOT NULL,
	"business_name" varchar(400) NOT NULL,
	"business_address" text NOT NULL,
	"business_type" text NOT NULL,
	"business_description" text
);
--> statement-breakpoint
ALTER TABLE "account" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "session" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "user" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "verification" ALTER COLUMN "id" SET DATA TYPE text;