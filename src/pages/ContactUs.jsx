import { Mail, Phone, MessageCircle } from 'lucide-react';

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Get in touch with our team for any inquiries
          </p>
        </header>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {/* WhatsApp */}
          <a
            href="https://wa.me/917793960710"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              <MessageCircle className="w-8 h-8 text-green-500" />
              <div>
                <h2 className="text-xl font-semibold">WhatsApp</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  +91 77939 60710
                </p>
              </div>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:info@crcidf.org"
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-200"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-8 h-8 text-blue-500" />
              <div>
                <h2 className="text-xl font-semibold">Email</h2>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  info@crcidf.org
                </p>
              </div>
            </div>
          </a>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12 text-gray-600 dark:text-gray-400">
          <p className="mb-2">Typically respond within 24 hours</p>
          <p>Monday - Friday | 9:00 AM - 6:00 PM IST</p>
        </div>
      </div>
    </div>
  );
}