import type { NextRequest } from "next/server";
import { handleSignIn } from "@logto/next/server-actions";
import { redirect } from "next/navigation";
import { logtoConfig } from "@mapstudio/lib/utils/logto-config";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  await handleSignIn(logtoConfig, searchParams);

  redirect("/");
}
