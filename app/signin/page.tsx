import { getClient, hasValidSanityConfig } from "@/sanity/lib/client";
import { signInPageQuery, type SignInPageResult } from "@/sanity/lib/queries";
import SignInPageContent from "@/components/SignInPageContent";

export default async function SignInPage() {
  let data: SignInPageResult = null;

  if (hasValidSanityConfig()) {
    const client = getClient(false);
    data = await client.fetch<SignInPageResult>(signInPageQuery);
  }

  return <SignInPageContent data={data} />;
}
