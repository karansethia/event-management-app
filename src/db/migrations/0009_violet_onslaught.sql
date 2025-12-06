CREATE TYPE "public"."subsciption_status" AS ENUM('active', 'cancelling', 'pending payment', 'inactive');--> statement-breakpoint
CREATE TABLE "subscription_events" (
	"id" serial PRIMARY KEY NOT NULL,
	"event_id" text,
	"event_payload" jsonb NOT NULL,
	"email" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "members" ADD COLUMN "subsciption_status" "subsciption_status" NOT NULL;--> statement-breakpoint
ALTER TABLE "members" ADD COLUMN "next_invoice_date" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "members" ADD COLUMN "can_send_email" boolean DEFAULT true;