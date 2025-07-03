import { useEffect } from "react";
import { useRouter } from "next/router";
import ConfigurationForm from "@/components/Configure/ConfigurationForm";

export default function ConfigurePage() {
  const router = useRouter();

  useEffect(() => {
    if (localStorage.getItem("loggedIn") !== "true") {
      router.push("/");
    }
  }, [router]);

  return (
    <div className="flex flex-row gap-10 items-center max-w-2xl mx-auto my-10 p-8 bg-[#f8f5f2] shadow-xl rounded-3xl">
      <h1 className="text-3xl font-bold mb-6 text-[#252422]">
        App Configuration
      </h1>
      <ConfigurationForm />
    </div>
  );
}
