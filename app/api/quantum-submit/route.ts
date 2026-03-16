import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_API_WRITE_TOKEN ?? process.env.SANITY_API_VIEWER_TOKEN;

const writeClient =
  projectId && token
    ? createClient({
        projectId,
        dataset,
        apiVersion: "2024-01-01",
        useCdn: false,
        token,
      })
    : null;

export async function POST(request: Request) {
  if (!writeClient) {
    return NextResponse.json(
      { error: "Submission service unavailable. Missing Sanity configuration." },
      { status: 503 }
    );
  }

  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      tierOfInterest,
      capitalCommitment,
      primaryMarkets,
    } = body as {
      firstName?: string;
      lastName?: string;
      email?: string;
      phone?: string;
      tierOfInterest?: string;
      capitalCommitment?: string;
      primaryMarkets?: string;
    };

    if (!email?.trim()) {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    const doc = await writeClient.create({
      _type: "quantumSubmission",
      firstName: (firstName ?? "").trim() || undefined,
      lastName: (lastName ?? "").trim() || undefined,
      email: email.trim(),
      phone: (phone ?? "").trim() || undefined,
      tierOfInterest: (tierOfInterest ?? "").trim() || undefined,
      capitalCommitment: (capitalCommitment ?? "").trim() || undefined,
      primaryMarkets: (primaryMarkets ?? "").trim() || undefined,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true, id: doc._id });
  } catch (err) {
    console.error("[quantum-submit]", err);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." },
      { status: 500 }
    );
  }
}
