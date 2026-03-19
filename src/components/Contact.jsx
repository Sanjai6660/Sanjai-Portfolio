import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // EmailJS credentials (using environment variables if available, otherwise placeholders)
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id';
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id';
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key';

    emailjs.sendForm(serviceId, templateId, formRef.current, {
      publicKey: publicKey,
    })
    .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        formRef.current.reset();
    }, (error) => {
        console.log('FAILED...', error.text);
        setSubmitStatus('error');
    })
    .finally(() => {
        setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-glow" />
      
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="contact-header"
        >
          <h2 className="title">Get In <span className="text-gradient">Touch</span></h2>
          <p>
            Have a project in mind or just want to say hello? I'd love to hear from you. 
            Feel free to reach out through the form below or via my contact details.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="contact-info"
          >
            <div className="glass info-card">
              <div className="info-icon-container">
                <Mail size={24} />
              </div>
              <div className="info-content">
                <h3>Email Me</h3>
                <p>srisanjai96@gmail.com</p>
                <p className="info-subtext">Always open for inquiries</p>
              </div>
            </div>

            <div className="glass info-card">
              <div className="info-icon-container">
                <MapPin size={24} />
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Auroville, Pondicherry, India</p>
                <p className="info-subtext">Open to remote/relocation</p>
              </div>
            </div>

            <div className="glass info-card">
              <div className="info-icon-container">
                <Phone size={24} />
              </div>
              <div className="info-content">
                <h3>Call Me</h3>
                <p>+91 73396 45169</p>
                <p className="info-subtext">Available for discussions</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass contact-form-container"
          >
            <form 
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    placeholder="John Doe"
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com"
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label>Subject</label>
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Project Inquiry"
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea 
                  name="message"
                  rows="5" 
                  placeholder="Tell me more about your project..."
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <p className="status-success">Message sent successfully!</p>
              )}
              {submitStatus === 'error' && (
                <p className="status-error">Failed to send message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
