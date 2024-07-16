import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
  } catch (err) {
    console.log(err);

    return NextResponse.json(
      { message: "Something went wrong", ok: false },
      { status: 500 }
    );
  }
}
