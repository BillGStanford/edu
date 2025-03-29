import React from 'react';
import { FaHandshake, FaChalkboardTeacher, FaBuilding, FaEnvelope, FaPhone, FaCheckCircle, FaComment, FaCalendarAlt, FaMapMarkerAlt, FaLinkedin, FaTwitter } from 'react-icons/fa';

const PartnerPage = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-display font-bold mb-6 text-white">Partner With EduStatic</h1>
            <p className="text-xl mb-8">Join us in our mission to transform education for the digital age and make a lasting impact together.</p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">How You Can Partner With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaChalkboardTeacher className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Become an Educator</h3>
                <p className="text-gray-700">Share your expertise by creating and teaching courses on our platform. We provide all the tools and support you need.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaBuilding className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Institutional Partnership</h3>
                <p className="text-gray-700">Integrate our learning platform with your school, university, or organization to enhance your educational offerings.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md text-center hover:shadow-lg transition duration-300">
                <div className="bg-primary-100 p-4 rounded-full inline-block mb-4">
                  <FaHandshake className="text-4xl text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-3">Strategic Alliance</h3>
                <p className="text-gray-700">Collaborate with us on marketing, technology, or content to create mutual value and expand our educational impact.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Benefits of Partnering With Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">For Educators</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Global reach for your educational content</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>User-friendly course creation tools</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Competitive revenue sharing model</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Marketing and promotion support</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-secondary-900 mb-4">For Institutions</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Custom branding and white-label options</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Advanced analytics and reporting</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Dedicated technical support</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheckCircle className="text-primary-600 mt-1 mr-2 flex-shrink-0" />
                    <span>Flexible integration options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Get In Touch</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-3">
                {/* Main Contact Info */}
                <div className="md:col-span-2 p-8 md:p-12 bg-gradient-to-br from-primary-700 to-secondary-800 text-white">
                  <h3 className="text-2xl font-bold mb-6">Ready to Partner With Us?</h3>
                  <p className="mb-8 text-lg">Our partnership team is here to answer all your questions and help you explore opportunities with EduStatic. Reach out to us through any of the following channels:</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-600 p-3 rounded-full mr-4">
                          <FaEnvelope className="text-2xl text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Email Us</h4>
                      </div>
                      <a href="mailto:official.ova.team@gmail.com" className="text-primary-200 hover:text-white text-lg transition duration-300">official.ova.team@gmail.com</a>
                      <p className="mt-3 text-primary-100 text-sm">For all partnership inquiries and discussions</p>
                    </div>
                    
                    <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
                      <div className="flex items-center mb-4">
                        <div className="bg-primary-600 p-3 rounded-full mr-4">
                          <FaPhone className="text-2xl text-white" />
                        </div>
                        <h4 className="text-xl font-bold">Call Us</h4>
                      </div>
                      <a href="tel:+12345678901" className="text-primary-200 hover:text-white text-lg transition duration-300">+1 (240) 733-8024</a>
                      <p className="mt-3 text-primary-100 text-sm">Available Monday-Friday, 9am-5pm EST</p>
                    </div>
                  </div>
                  
                  <div className="mt-10 border-t border-primary-500 pt-8">
                    <h4 className="text-xl font-bold mb-4">What to Expect</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary-600 p-3 rounded-full mb-3">
                          <FaComment className="text-xl text-white" />
                        </div>
                        <p className="text-sm">Initial consultation to understand your goals</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary-600 p-3 rounded-full mb-3">
                          <FaCalendarAlt className="text-xl text-white" />
                        </div>
                        <p className="text-sm">Partnership proposal within 3 business days</p>
                      </div>
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-primary-600 p-3 rounded-full mb-3">
                          <FaHandshake className="text-xl text-white" />
                        </div>
                        <p className="text-sm">Personalized onboarding process</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Side - Additional Info */}
                <div className="p-8 bg-gray-50 border-l border-gray-200">
                  <h3 className="text-xl font-bold text-secondary-900 mb-6">Additional Contact Methods</h3>
                  
                  <div className="space-y-6">
                    
                    <div>
                      <div className="flex items-center mb-2">
                        <FaTwitter className="text-primary-600 mr-2" />
                        <h4 className="font-semibold text-secondary-800">Twitter</h4>
                      </div>
                      <a href="https://x.com/edu_static" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-800 pl-6 transition duration-300">
                        @edu_static
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-secondary-800 mb-3">Response Time</h4>
                    <p className="text-gray-700">Our partnership team typically responds within 1-2 business days. For urgent inquiries, please call us directly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Our Partnership Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">1</div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">Initial Contact</h3>
                <p className="text-gray-700">Reach out via email or phone to discuss your partnership interests</p>
                {/* Connection line */}
                <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">2</div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">Discovery Call</h3>
                <p className="text-gray-700">We'll schedule a call to learn more about your goals and needs</p>
                {/* Connection lines */}
                <div className="hidden md:block absolute -left-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
                <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">3</div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">Proposal</h3>
                <p className="text-gray-700">We'll create a tailored partnership proposal based on your needs</p>
                {/* Connection lines */}
                <div className="hidden md:block absolute -left-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
                <div className="hidden md:block absolute -right-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg text-center relative">
                <div className="bg-primary-600 text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4">4</div>
                <h3 className="text-lg font-bold text-secondary-900 mb-2">Onboarding</h3>
                <p className="text-gray-700">Once approved, we'll guide you through a smooth onboarding process</p>
                {/* Connection line */}
                <div className="hidden md:block absolute -left-2 top-1/2 w-4 h-0.5 bg-primary-300"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-secondary-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">How does the revenue sharing model work for educators?</h3>
                <p className="text-gray-700">Educators receive up to 50% of revenue generated from their courses. The exact percentage depends on factors such as exclusivity and promotion commitments.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">What technical requirements do I need to create courses?</h3>
                <p className="text-gray-700">You'll need a reliable internet connection, decent quality microphone, and basic computer skills. We provide all the necessary platform tools and training.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">How long does the partnership approval process take?</h3>
                <p className="text-gray-700">After our initial call, we typically provide partnership proposals within 3-5 business days. If approved, onboarding can begin immediately.</p>
              </div>
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Do you offer integration with LMS platforms?</h3>
                <p className="text-gray-700">Yes, we offer integration with popular Learning Management Systems including Canvas, Moodle, and Blackboard for institutional partners.</p>
              </div>
              <div className="pb-6">
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Can I suggest new features or courses for the platform?</h3>
                <p className="text-gray-700">Absolutely! We value our partners' input and regularly incorporate partner feedback into our product roadmap and content strategy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-900 to-primary-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to Transform Education Together?</h2>
            <p className="text-xl mb-8">Contact our partnership team today and discover how we can create something amazing together.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="mailto:official.ova.team@gmail.com" 
                className="bg-white text-primary-700 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition duration-300"
              >
                Email Us Now
              </a>
              <a 
                href="tel:+12345678901" 
                className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition duration-300"
              >
                Call Us: +1 (240) 733-8024
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PartnerPage;