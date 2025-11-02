'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, Send, MapPin, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual API call)
    try {
      // Here you would typically send data to your API endpoint
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-lg p-8 text-white">
        <h1 className="text-4xl font-bold mb-4">Get In Touch</h1>
        <p className="text-xl opacity-90">
          Let's discuss your project or opportunity
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
              Contact Information
            </h2>

            <div className="space-y-4">
              <a
                href="mailto:amanbiswakarma.ak@gmail.com"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Mail className="h-5 w-5 text-orange-500" />
                <span>amanbiswakarma.ak@gmail.com</span>
              </a>

              <a
                href="tel:+917849067915"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Phone className="h-5 w-5 text-orange-500" />
                <span>+91 7849067915</span>
              </a>

              <a
                href="https://www.linkedin.com/in/aman-biswakarma-797250269/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-orange-500" />
                <span>linkedin.com/in/aman-biswakarma-797250269</span>
              </a>

              <a
                href="https://github.com/Aman-mania"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-orange-500 transition-colors"
              >
                <Github className="h-5 w-5 text-orange-500" />
                <span>github.com/Aman-mania</span>
              </a>

              <div className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                <MapPin className="h-5 w-5 text-orange-500" />
                <span>India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <a
                href="https://leetcode.com/aman_kumar04"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 hover:text-orange-600 font-medium block"
              >
                LeetCode Profile →
              </a>
              <a
                href="/resume"
                className="block text-orange-500 hover:text-orange-600"
              >
                View Resume →
              </a>
              <a
                href="/"
                className="block text-orange-500 hover:text-orange-600"
              >
                View Projects →
              </a>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-green-900 dark:text-green-300 mb-2">
              Available for Opportunities
            </h3>
            <p className="text-sm text-green-800 dark:text-green-200">
              I'm currently open to full-time positions, freelance projects, and collaborations.
              Feel free to reach out!
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
            Send a Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500 resize-none"
                placeholder="Tell me more about your project or inquiry..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>Sending...</>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send Message
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200 text-sm">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200 text-sm">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}
          </form>

          <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
            Note: This is a demo form. To make it functional, you'll need to integrate it with a backend service
            or use a service like Formspree, EmailJS, or Resend.
          </p>
        </div>
      </div>
    </div>
  );
}
