"use server";

import { redirect } from "next/navigation";

async function page() {
  redirect(`/es`);
}

export default page;
