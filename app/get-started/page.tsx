import GetStartedFlow from "@/components/GetStartedFlow";

export const metadata = {
  title: "Get Started | Wagerbird",
  description: "Create your account and get instant access to premium picks.",
};

export default async function GetStartedPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string }>;
}) {
  const { plan = "core" } = await searchParams;
  const validPlans = ["starter", "core", "advanced"];
  const selectedPlan = validPlans.includes(plan) ? plan : "core";

  return (
    <main className="get-started-page">
      <div className="get-started-wrapper">
        <h1 className="get-started-title">Create Your Account</h1>
        <p className="get-started-subtitle">
          Sign up and pay securely — all in one step.
        </p>
        <GetStartedFlow plan={selectedPlan} />
      </div>
    </main>
  );
}
