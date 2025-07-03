import { useState } from "react";
import { FormField } from "../Common/FormField";
import { useRouter } from "next/router";

type FormData = {
  logo: File | null;
  appName: string;
  contactEmail: string;
  supportPhone: string;
  language: "en" | "es" | "fr";
  timezone: string;
  dateFormat: "MM/DD/YYYY" | "DD/MM/YYYY";
  maintenanceMode: boolean;
};

const ConfigurationForm = () => {
  const router = useRouter();

  const [formData, setFormData] = useState<FormData>({
    logo: null,
    appName: "",
    contactEmail: "",
    supportPhone: "",
    language: "en",
    timezone: "Asia/Kolkata",
    dateFormat: "MM/DD/YYYY",
    maintenanceMode: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type, checked, files } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: files && files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSave = () => {
    alert(`Configuration saved successfully for ${formData.appName}!`);
    router.push("/"); // Redirect to home page after saving
  };

  return (
    <form
      className="space-y-4 text-[#403d39] w-full"
      onSubmit={(e) => e.preventDefault()}
    >
      <div className="mb-4">
        <label className="block mb-1 font-semibold">Logo</label>
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleChange}
          className="w-full border rounded p-2"
        />
      </div>

      <FormField
        label="App Name"
        name="appName"
        value={formData.appName}
        onChange={handleChange}
        placeholder="MyApp"
      />

      <FormField
        label="Contact Email"
        name="contactEmail"
        type="email"
        value={formData.contactEmail}
        onChange={handleChange}
        placeholder="support@example.com"
      />

      <FormField
        label="Support Phone"
        name="supportPhone"
        type="tel"
        value={formData.supportPhone}
        onChange={handleChange}
        placeholder="+91 1234567890"
      />

      <FormField
        label="Language"
        name="language"
        type="select"
        value={formData.language}
        options={["en-us", "en-uk", "en-in"]}
        onChange={handleChange}
      />

      <FormField
        label="Timezone"
        name="timezone"
        type="select"
        value={formData.timezone}
        options={[
          "Asia/Kolkata",
          "America/New_York",
          "Europe/London",
          "Asia/Tokyo",
          "Australia/Sydney",
        ]}
        onChange={handleChange}
      />

      <FormField
        label="Maintenance Mode"
        name="maintenanceMode"
        type="checkbox"
        checked={formData.maintenanceMode}
        onChange={handleChange}
      />

      <button
        onClick={handleSave}
        className="bg-[#b5651d] text-white px-4 py-2 rounded"
      >
        Save Configuration
      </button>
    </form>
  );
};
export default ConfigurationForm;
