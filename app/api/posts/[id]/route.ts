import { NextResponse } from "next/server";
import { cookies, headers } from "next/headers";

export async function DELETE(
  res: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const headerList = headers();
  const type = headerList.get("Content-type");

  const cookiesList = cookies();
  const cookie = cookiesList.get("Cookie_1");

  return NextResponse.json({ id, type, cookie });
}
