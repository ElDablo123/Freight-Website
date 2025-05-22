import { Phone, MapPin, Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold text-black mb-6">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <MapPin className="h-6 w-6 text-orange-500" />
              <span className='text-black'>801 Travis Street, Suite 2101 #1422<br />
              Houston, TX 77002</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-6 w-6 text-orange-500" />
              <span className='text-black'>(346) 574-3483</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="h-6 w-6 text-orange-500" />
              <span className='text-black'>company@freight-cs.com</span>
            </div>
          </div>
        </div>
        <div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name"
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
            <input 
              type="email" 
              placeholder="Your Email"
              className="w-full p-3 border border-slate-300 rounded-lg"
            />
            <textarea 
              placeholder="Your Message"
              className="w-full p-3 border border-slate-300 rounded-lg"
              rows={4}
            ></textarea>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 