CREATE TYPE "public"."member_type" AS ENUM('unpaid', 'silver', 'gold');--> statement-breakpoint
ALTER TABLE "members" ADD COLUMN "member_type" "member_type";