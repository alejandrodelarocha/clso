import React, { useState } from "react";
import { useLanguage } from "../../context/LanguageContext";

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiry: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success: boolean; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // simulate API call
      setSubmitStatus({ success: true, message: t("contact_success_message") });
      setFormData({ fullName: "", email: "", phone: "", inquiry: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch {
      setSubmitStatus({ success: false, message: t("contact_error_message") });
    } finally {
      setIsSubmitting(false);
    }
  };

  const infoCards = [
    { icon: "fas fa-map-marker-alt", title: t("contact_address_title"), value: t("contact_address") },
    { icon: "fas fa-envelope", title: t("contact_email_title"), value: "contacto@clso.com.mx", link: "mailto:contacto@clso.com.mx" },
    { icon: "fas fa-phone-alt", title: t("contact_phone_title"), value: "+52 1 55 1234 5678", link: "tel:+5215512345678" },
    { icon: "fas fa-clock", title: t("contact_hours_title"), value: t("contact_hours") },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50 flex flex-col items-center p-20" style={{ padding: "2rem" }}>
  <div className="w-full max-w-7xl px-4">
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-800">{t("contact_title")}</h2>
      <div className="flex items-center justify-center mt-4 mb-4">
        <span className="w-16 h-1 bg-blue-200 rounded"></span>
        <span className="mx-2 text-[#3498DC]">
          <i className="fas fa-bolt"></i>
        </span>
        <span className="w-16 h-1 bg-blue-200 rounded"></span>
      </div>
      <p className="text-gray-600 text-lg">{t("contact_subtitle")}</p>
    </div>

    {/* Info Cards */}
    <div className="grid grid-cols-1 p-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 w-full" id="modern-contact-cards">
      {infoCards.map((card, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition w-full" style={{ padding: "2rem" }}>
          <div className="text-[#3498DC] text-4xl mb-4 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full" >
            <i className={card.icon}></i>
          </div>
          <h5 className="font-semibold text-lg mb-2">{card.title}</h5>
          {card.link ? (
            <a href={card.link} className="text-gray-600 hover:text-[#3498DC]">{card.value}</a>
          ) : (
            <p className="text-gray-600">{card.value}</p>
          )}
        </div>
      ))}
    </div>

    </div>
  
</section>

  );
};

export default Contact;
