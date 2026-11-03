import React, { useState, useRef } from 'react';
import { 
  FaCheckCircle, 
  FaExclamationCircle, 
  FaSpinner, 
  FaPaperPlane,
  FaUser,
  FaEnvelope,
  FaBuilding,
  FaBriefcase
} from 'react-icons/fa';

// Helper function to convert 2-letter country code to Emoji Flag
const getFlagEmoji = (countryCode) => {
  if (!countryCode) return "";
  return countryCode
    .toUpperCase()
    .replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397));
};

// Comprehensive list of countries
const countries = [
  { name: "Afghanistan", code: "AF", dialCode: "+93" },
  { name: "Albania", code: "AL", dialCode: "+355" },
  { name: "Algeria", code: "DZ", dialCode: "+213" },
  { name: "Andorra", code: "AD", dialCode: "+376" },
  { name: "Angola", code: "AO", dialCode: "+244" },
  { name: "Argentina", code: "AR", dialCode: "+54" },
  { name: "Armenia", code: "AM", dialCode: "+374" },
  { name: "Australia", code: "AU", dialCode: "+61" },
  { name: "Austria", code: "AT", dialCode: "+43" },
  { name: "Azerbaijan", code: "AZ", dialCode: "+994" },
  { name: "Bahamas", code: "BS", dialCode: "+1" },
  { name: "Bahrain", code: "BH", dialCode: "+973" },
  { name: "Bangladesh", code: "BD", dialCode: "+880" },
  { name: "Belarus", code: "BY", dialCode: "+375" },
  { name: "Belgium", code: "BE", dialCode: "+32" },
  { name: "Bolivia", code: "BO", dialCode: "+591" },
  { name: "Bosnia and Herzegovina", code: "BA", dialCode: "+387" },
  { name: "Brazil", code: "BR", dialCode: "+55" },
  { name: "Bulgaria", code: "BG", dialCode: "+359" },
  { name: "Cambodia", code: "KH", dialCode: "+855" },
  { name: "Canada", code: "CA", dialCode: "+1" },
  { name: "Chile", code: "CL", dialCode: "+56" },
  { name: "China", code: "CN", dialCode: "+86" },
  { name: "Colombia", code: "CO", dialCode: "+57" },
  { name: "Costa Rica", code: "CR", dialCode: "+506" },
  { name: "Croatia", code: "HR", dialCode: "+385" },
  { name: "Cuba", code: "CU", dialCode: "+53" },
  { name: "Cyprus", code: "CY", dialCode: "+357" },
  { name: "Czech Republic", code: "CZ", dialCode: "+420" },
  { name: "Denmark", code: "DK", dialCode: "+45" },
  { name: "Dominican Republic", code: "DO", dialCode: "+1" },
  { name: "Ecuador", code: "EC", dialCode: "+593" },
  { name: "Egypt", code: "EG", dialCode: "+20" },
  { name: "El Salvador", code: "SV", dialCode: "+503" },
  { name: "Estonia", code: "EE", dialCode: "+372" },
  { name: "Ethiopia", code: "ET", dialCode: "+251" },
  { name: "Finland", code: "FI", dialCode: "+358" },
  { name: "France", code: "FR", dialCode: "+33" },
  { name: "Georgia", code: "GE", dialCode: "+995" },
  { name: "Germany", code: "DE", dialCode: "+49" },
  { name: "Ghana", code: "GH", dialCode: "+233" },
  { name: "Greece", code: "GR", dialCode: "+30" },
  { name: "Guatemala", code: "GT", dialCode: "+502" },
  { name: "Honduras", code: "HN", dialCode: "+504" },
  { name: "Hungary", code: "HU", dialCode: "+36" },
  { name: "Iceland", code: "IS", dialCode: "+354" },
  { name: "India", code: "IN", dialCode: "+91" },
  { name: "Indonesia", code: "ID", dialCode: "+62" },
  { name: "Iran", code: "IR", dialCode: "+98" },
  { name: "Iraq", code: "IQ", dialCode: "+964" },
  { name: "Ireland", code: "IE", dialCode: "+353" },
  { name: "Israel", code: "IL", dialCode: "+972" },
  { name: "Italy", code: "IT", dialCode: "+39" },
  { name: "Jamaica", code: "JM", dialCode: "+1" },
  { name: "Japan", code: "JP", dialCode: "+81" },
  { name: "Jordan", code: "JO", dialCode: "+962" },
  { name: "Kazakhstan", code: "KZ", dialCode: "+7" },
  { name: "Kenya", code: "KE", dialCode: "+254" },
  { name: "Kuwait", code: "KW", dialCode: "+965" },
  { name: "Lebanon", code: "LB", dialCode: "+961" },
  { name: "Malaysia", code: "MY", dialCode: "+60" },
  { name: "Mexico", code: "MX", dialCode: "+52" },
  { name: "Monaco", code: "MC", dialCode: "+377" },
  { name: "Morocco", code: "MA", dialCode: "+212" },
  { name: "Nepal", code: "NP", dialCode: "+977" },
  { name: "Netherlands", code: "NL", dialCode: "+31" },
  { name: "New Zealand", code: "NZ", dialCode: "+64" },
  { name: "Nigeria", code: "NG", dialCode: "+234" },
  { name: "Norway", code: "NO", dialCode: "+47" },
  { name: "Oman", code: "OM", dialCode: "+968" },
  { name: "Pakistan", code: "PK", dialCode: "+92" },
  { name: "Panama", code: "PA", dialCode: "+507" },
  { name: "Paraguay", code: "PY", dialCode: "+595" },
  { name: "Peru", code: "PE", dialCode: "+51" },
  { name: "Philippines", code: "PH", dialCode: "+63" },
  { name: "Poland", code: "PL", dialCode: "+48" },
  { name: "Portugal", code: "PT", dialCode: "+351" },
  { name: "Qatar", code: "QA", dialCode: "+974" },
  { name: "Romania", code: "RO", dialCode: "+40" },
  { name: "Russia", code: "RU", dialCode: "+7" },
  { name: "Saudi Arabia", code: "SA", dialCode: "+966" },
  { name: "Senegal", code: "SN", dialCode: "+221" },
  { name: "Serbia", code: "RS", dialCode: "+381" },
  { name: "Singapore", code: "SG", dialCode: "+65" },
  { name: "Slovakia", code: "SK", dialCode: "+421" },
  { name: "Slovenia", code: "SI", dialCode: "+386" },
  { name: "South Africa", code: "ZA", dialCode: "+27" },
  { name: "South Korea", code: "KR", dialCode: "+82" },
  { name: "Spain", code: "ES", dialCode: "+34" },
  { name: "Sri Lanka", code: "LK", dialCode: "+94" },
  { name: "Sweden", code: "SE", dialCode: "+46" },
  { name: "Switzerland", code: "CH", dialCode: "+41" },
  { name: "Syria", code: "SY", dialCode: "+963" },
  { name: "Taiwan", code: "TW", dialCode: "+886" },
  { name: "Thailand", code: "TH", dialCode: "+66" },
  { name: "Tunisia", code: "TN", dialCode: "+216" },
  { name: "Turkey", code: "TR", dialCode: "+90" },
  { name: "Ukraine", code: "UA", dialCode: "+380" },
  { name: "United Arab Emirates", code: "AE", dialCode: "+971" },
  { name: "United Kingdom", code: "GB", dialCode: "+44" },
  { name: "United States", code: "US", dialCode: "+1" },
  { name: "Uruguay", code: "UY", dialCode: "+598" },
  { name: "Uzbekistan", code: "UZ", dialCode: "+998" },
  { name: "Venezuela", code: "VE", dialCode: "+58" },
  { name: "Vietnam", code: "VN", dialCode: "+84" },
  { name: "Yemen", code: "YE", dialCode: "+967" },
  { name: "Zambia", code: "ZM", dialCode: "+260" },
  { name: "Zimbabwe", code: "ZW", dialCode: "+263" }
].sort((a, b) => a.name.localeCompare(b.name));

export default function PremiumContactForm() {
  const formRef = useRef(null);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    countryCode: 'US,+1', 
    phone: '',
    company: '',
    jobTitle: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const errors = {};
    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Work email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.message.trim()) errors.message = "Please tell us about your needs";

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      setIsSubmitting(false);
      return;
    }

    const [isoCode, dialCode] = formData.countryCode.split(',');
    
    const finalDataToSubmit = {
      ...formData,
      countryIso: isoCode,
      countryDialCode: dialCode,
    };

    console.log("Submitting:", finalDataToSubmit);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        firstName: '', lastName: '', email: '', 
        countryCode: 'US,+1', phone: '', company: '', jobTitle: '', message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 5000);
    }, 1500);
  };

  const inputBaseClass = "w-full bg-slate-50/50 border rounded-xl pl-11 pr-4 py-3.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-4 transition-all duration-300";

  return (
    <section className="py-16 sm:py-20 md:py-32 bg-gradient-to-b from-slate-50 to-slate-100/50 min-h-screen flex items-center justify-center font-sans px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto">
        
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-slate-900 tracking-tight">
            Let's build something <span className="text-brand-blue-600">great.</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed px-4">
            Fill out the form below and our team will get back to you within 24 hours to discuss your project requirements.
          </p>
        </div>

        <div className="bg-white rounded-[1.5rem] sm:rounded-[2rem] p-5 sm:p-10 md:p-12 shadow-2xl shadow-brand-blue-600/5 border border-slate-100 relative overflow-hidden">
          
          {submitSuccess && (
            <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-in fade-in duration-300 px-6 text-center">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-tr from-emerald-400 to-emerald-500 rounded-full flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
                <FaCheckCircle className="text-3xl sm:text-4xl text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">Message Sent!</h3>
              <p className="text-slate-600 text-base sm:text-lg">We'll be in touch with you shortly.</p>
            </div>
          )}

          <form onSubmit={handleSubmit} ref={formRef} className="space-y-6 md:space-y-8">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue-600 transition-colors" />
                  <input 
                    type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                    className={`${inputBaseClass} ${formErrors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20'}`}
                    placeholder="John" 
                  />
                </div>
                {formErrors.firstName && <p className="text-red-500 text-xs flex items-center gap-1.5 ml-1 mt-1 font-medium"><FaExclamationCircle /> {formErrors.firstName}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue-600 transition-colors" />
                  <input 
                    type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                    className={`${inputBaseClass} ${formErrors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20'}`}
                    placeholder="Doe" 
                  />
                </div>
                {formErrors.lastName && <p className="text-red-500 text-xs flex items-center gap-1.5 ml-1 mt-1 font-medium"><FaExclamationCircle /> {formErrors.lastName}</p>}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Work Email <span className="text-red-500">*</span>
                </label>
                <div className="relative group">
                  <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue-600 transition-colors" />
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className={`${inputBaseClass} ${formErrors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20'}`}
                    placeholder="john@company.com" 
                  />
                </div>
                {formErrors.email && <p className="text-red-500 text-xs flex items-center gap-1.5 ml-1 mt-1 font-medium"><FaExclamationCircle /> {formErrors.email}</p>}
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">
                  Phone Number
                </label>
                <div className="relative flex group bg-slate-50/50 border border-slate-200 rounded-xl focus-within:bg-white focus-within:border-brand-blue-600 focus-within:ring-4 focus-within:ring-brand-blue-600/20 transition-all duration-300">
                  <select
                    name="countryCode"
                    value={formData.countryCode}
                    onChange={handleInputChange}
                    className="bg-transparent py-3.5 pl-4 pr-2 text-slate-700 font-medium focus:outline-none cursor-pointer border-r border-slate-200 hover:bg-slate-100 transition-colors rounded-l-xl appearance-none w-[100px] sm:w-[110px] text-sm sm:text-base truncate"
                    style={{ WebkitAppearance: 'none' }} 
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={`${country.code},${country.dialCode}`}>
                        {getFlagEmoji(country.code)} {country.code} ({country.dialCode})
                      </option>
                    ))}
                  </select>
                  
                  <input 
                    type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                    className="flex-1 w-full min-w-0 bg-transparent py-3.5 px-3 sm:px-4 text-slate-800 placeholder-slate-400 focus:outline-none rounded-r-xl text-sm sm:text-base" 
                    placeholder="555 123 4567" 
                  />
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Company Name</label>
                <div className="relative group">
                  <FaBuilding className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue-600 transition-colors" />
                  <input 
                    type="text" name="company" value={formData.company} onChange={handleInputChange}
                    className={`${inputBaseClass} border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20`}
                    placeholder="Acme Corp" 
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Job Title</label>
                <div className="relative group">
                  <FaBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-brand-blue-600 transition-colors" />
                  <input 
                    type="text" name="jobTitle" value={formData.jobTitle} onChange={handleInputChange}
                    className={`${inputBaseClass} border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20`}
                    placeholder="Product Manager" 
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between items-end ml-1 mb-1">
                <label className="text-sm font-bold text-slate-700">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <span className={`text-xs font-medium ${formData.message.length > 900 ? 'text-amber-500' : 'text-slate-400'}`}>
                  {formData.message.length}/1000
                </span>
              </div>
              <textarea 
                name="message" rows="5" maxLength={1000} value={formData.message} onChange={handleInputChange}
                className={`w-full bg-slate-50/50 border rounded-xl p-4 text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-4 transition-all duration-300 resize-none ${
                  formErrors.message ? 'border-red-300 focus:border-red-500 focus:ring-red-500/20' : 'border-slate-200 focus:border-brand-blue-600 focus:ring-brand-blue-600/20'
                }`}
                placeholder="Tell us about your project timeline, requirements, or any specific challenges..."
              />
              {formErrors.message && <p className="text-red-500 text-xs flex items-center gap-1.5 ml-1 mt-1 font-medium"><FaExclamationCircle /> {formErrors.message}</p>}
            </div>
            
            <div className="pt-2 md:pt-4">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full md:w-auto md:min-w-[240px] flex items-center justify-center gap-3 bg-brand-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-brand-blue-600/90 hover:shadow-xl hover:shadow-brand-blue-600/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
              >
                {isSubmitting ? (
                  <>
                    <FaSpinner className="animate-spin text-xl" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FaPaperPlane className="text-sm opacity-90" />
                  </>
                )}
              </button>
              <p className="text-slate-500 text-xs mt-4 flex items-center gap-2 font-medium justify-center md:justify-start ml-1 text-center md:text-left">
                🔒 Your information is completely secure and confidential.
              </p>
            </div>
            
          </form>
        </div>
      </div>
    </section>
  );
}