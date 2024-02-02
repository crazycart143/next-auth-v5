"use server";

import { redirect } from "next/navigation";

export async function send() {
  console.log("Message Sent!");
}

export async function navigate(data: FormData) {
  redirect(`/posts/${data.get("id")}`);
}
