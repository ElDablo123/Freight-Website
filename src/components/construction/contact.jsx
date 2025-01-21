import { Phone, MapPin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { VITE_SITE_KEY, VITE_FORM } from 'astro:env/client';

const FeatureSection2 = () => {

  // Move environment variables inside the component and add validation


  if (!VITE_SITE_KEY) {
    console.error('reCAPTCHA site key is not defined in environment variables');
  }

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
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  
  useEffect(() => {
    // Load the reCAPTCHA script
    const loadRecaptcha = async () => {
      try {
        // Validate site key
        if (!VITE_SITE_KEY) {
          throw new Error('reCAPTCHA site key is missing');
        }

        // Check if reCAPTCHA is already loaded
        if (window.grecaptcha) {
          
          setRecaptchaLoaded(true);
          return;
        }

        // Create and load the script
        const script = document.createElement('script');
        script.src = `https://www.google.com/recaptcha/api.js?render=${VITE_SITE_KEY}`;
        script.async = true;
        script.defer = true;
        
        // Create a promise to handle script loading
        await new Promise((resolve, reject) => {
          script.onload = () => {
            
            window.grecaptcha.ready(() => {
              
              setRecaptchaLoaded(true);
              resolve();
            });
          };
          script.onerror = (error) => {
            console.error('Error loading reCAPTCHA:', error);
            reject(error);
          };
          document.body.appendChild(script);
        });

      } catch (error) {
        console.error('Error in loadRecaptcha:', error);
        setStatus(prev => ({
          ...prev,
          error: 'Failed to load reCAPTCHA. Please refresh the page.'
        }));
      }
    };
    
    loadRecaptcha();

    // Cleanup
    return () => {
      const script = document.querySelector(`script[src*="recaptcha"]`);
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [VITE_SITE_KEY]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs(values => ({...values, [name]: value}));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      // Validate reCAPTCHA is loaded
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA has not loaded. Please refresh the page.');
      }

      if (!recaptchaLoaded) {
        throw new Error('reCAPTCHA is not ready yet. Please try again.');
      }

      
      
      // Wait for reCAPTCHA to be ready
      await new Promise((resolve) => window.grecaptcha.ready(resolve));
      
      // Execute reCAPTCHA
      const token = await window.grecaptcha.execute(VITE_SITE_KEY, {
        action: 'submit'
      });

      

      // Create form data with recaptcha token
      const formData = new FormData(e.target);
      formData.append('g-recaptcha-response', token);

      // Submit the form
      const response = await fetch(VITE_FORM, {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      // Reset form on success
      setInputs({
        name: '',
        email: '',
        message: ''
      });
      
      setStatus({
        submitting: false,
        submitted: true,
        error: null
      });
      
      alert('Thank you for your message! We will get back to you soon.');
    } catch (error) {
      console.error('Form submission error:', error);
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
            <div className="space-y-4">
              <div className="flex items-center space-x-8">
                <MapPin className="h-6 w-6 text-orange-500 ml-8 mb-5" />
                <span className='text-black text-center'>801 Travis Street, Suite 2101 #1422 <br />
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
            <form className="space-y-4" onSubmit={handleSubmit} method="POST">
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