import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { registerPageQuery, type RegisterPageResult } from "@/sanity/lib/queries";
import RegisterPageContent from "@/components/RegisterPageContent";

export default async function RegisterPage() {
  let data: RegisterPageResult = null;

  if (hasValidSanityConfig()) {
    const client = getClient(false);
    data = await client.fetch<RegisterPageResult>(registerPageQuery);
  }

  return <RegisterPageContent data={data} />;
}
