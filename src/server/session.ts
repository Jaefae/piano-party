import { cookies } from "next/headers";
import { getSession } from "./auth";

export async function getCurrentUser() {
  const token = (await cookies()).get("session")?.value;
  if (!token) return null;
  return await getSession(token);
}
