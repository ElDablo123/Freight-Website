import { Phone, MapPin, Mail } from 'lucide-react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { submitForm } from 'src/services/formService';
import ReCaptcha from './recaptcha';

const RECAPTCHA_SITE_KEY = "6Lep_7gqAAAAAEn64OGTWttvoff0mGCwAICMd9PT"; // Replace with your actual site key

const FeatureSection2 = () => {
  const [token, setToken] = useState(null);
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  });
  
  const recaptchaRef = useRef(null);

  const onVerify = (value) => {
    setToken(value);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!token) {
      alert('Please complete the captcha');
      return;
    }

    try {
      setStatus({ submitting: true, submitted: false, error: null });
      
      // Validate form inputs
      if (!inputs.name || !inputs.email || !inputs.message) {
        throw new Error('Please fill in all fields');
      }

      // Submit form data
      await submitForm({
        ...inputs,
        token
      });

      // Reset form on success
      setInputs({
        name: '',
        email: '',
        message: ''
      });
      setToken(null);
      recaptchaRef.current.reset();
      
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      // Show success message
      alert('Thank you for your message! We will get back to you soon.');

    } catch (error) {
      setStatus({
        submitting: false,
        submitted: false,
        error: error.message
      });
      alert(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-1 gap-10">
          <div>
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Contact Us</h2>
            <div className="space-y-4 ">
              <div className="flex items-center space-x-8">
                <MapPin className="h-6 w-6 text-orange-500 ml-8 mb-5 " />
                <span className='text-black text-center'>801 Travis Street, Suite 2101 #1422 <br></br>
                Houston, TX 77002</span>
              </div>
              <div className="flex items-center space-x-8">
                <Phone className="h-6 w-6 text-orange-500 ml-8 mb-5" />
                <span className='text-black text-right mb-5'>(346) 574-3483</span>
              </div>
              <div className="flex items-center space-x-8">
                <Mail className="h-6 w-6 text-orange-500 ml-8" />
                <span className='text-black'>Company@freight-cs.com</span>
              </div>
            </div>
          </div>
          <div>
          <script src="https://www.google.com/recaptcha/enterprise.js" async defer></script>
            <form className="space-y-4" method="POST" onSubmit={handleSubmit}>
              <input 
                value={inputs.name || ""} 
                name="name"
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-slate-300 rounded-lg"
                onChange={handleChange}
                required
              />
              <input 
                value={inputs.email || ""}
                name="email"
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-slate-300 rounded-lg"
                onChange={handleChange}
                required
              />
              <textarea 
                value={inputs.message || ""}
                name="message"
                placeholder="Your Message"
                className="w-full p-3 border border-slate-300 rounded-lg"
                rows={4}
                onChange={handleChange}
                required
              ></textarea>
              <div className="justify-center">
                <ReCaptcha />
              </div>

              <button 
                type="submit"
                disabled={status.submitting}
                className={`w-full p-3 rounded-lg text-white transition-colors
                  ${status.submitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-orange-500 hover:bg-orange-600'}`}
              >
                {status.submitting ? 'Sending...' : 'Send Message'}
              </button>

              {status.error && (
                <p className="text-red-500 text-sm text-center">{status.error}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection2;