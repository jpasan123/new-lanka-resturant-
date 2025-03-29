import React, { useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Load Facebook SDK
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          xfbml: true,
          version: 'v18.0'
        });
      };

      // Load the SDK asynchronously
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement; js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        if (fjs && fjs.parentNode) {
          fjs.parentNode.insertBefore(js, fjs);
        }
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Contact Us</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-primary">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="text-primary w-6 h-6 mr-4" />
                  <p>262, Railway Parade., Noble Park, VIC, Australia, Victoria</p>
                </div>
                <div className="flex items-center">
                  <Phone className="text-primary w-6 h-6 mr-4" />
                  <p>(03) 9544 0046</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary w-6 h-6 mr-4" />
                  <p>contact@newlankarestaurant.com.au</p>
                </div>
                <div className="flex items-start">
                  <Clock className="text-primary w-6 h-6 mr-4 mt-1" />
                  <div>
                    <p className="font-bold mb-2">Opening Hours:</p>
                    <p>Tuesday - Thursday: 11am - 8pm</p>
                    <p>Friday - Saturday: 11am - 9pm</p>
                    <p>Sunday: 11am - 8pm</p>
                    <p>Monday: Closed</p>
                  </div>
                </div>
                
                {/* Facebook Page Plugin */}
                <div className="mt-6 w-full overflow-hidden">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Facebook className="text-primary w-5 h-5 mr-2" />
                    Follow us on Facebook
                  </h4>
                  <div className="fb-page" 
                    data-href="https://www.facebook.com/profile.php?id=100063661898454"
                    data-tabs="timeline"
                    data-width="500"
                    data-height="400"
                    data-small-header="false"
                    data-adapt-container-width="true"
                    data-hide-cover="false"
                    data-show-facepile="true">
                    <blockquote cite="https://www.facebook.com/profile.php?id=100063661898454" className="fb-xfbml-parse-ignore">
                      <a href="https://www.facebook.com/profile.php?id=100063661898454">New Lanka Restaurant</a>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Rest of the component remains the same */}
            {/* ... */}
          </div>
          
          <div className="flex items-center justify-center">
            <div className="w-full h-[450px] rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3136.8876811656635!2d145.17291731532636!3d-38.17123097968786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad66b6b8b8b8b8b%3A0x1c1c1c1c1c1c1c1c!2s262%20Railway%20Parade%2C%20Noble%20Park%20VIC%203174!5e0!3m2!1sen!2sau!4v1645123456789!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;