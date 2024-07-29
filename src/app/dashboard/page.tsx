import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const Page = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <div className="flex min-h-screen w-full bg-muted/40">
      secret dashboard page
    </div>
  );
};

export default Page;
