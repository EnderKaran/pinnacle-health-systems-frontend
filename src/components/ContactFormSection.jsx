import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

//sağ taraftaki dizi bilgileri
const contactDetails = [
    {
    icon: FaMapMarkerAlt,
    title: "Address",
    details: "123 Health Street, Wellness City, 10001",
  },
  {
    icon: FaPhone,
    title: "Phone",
    details: "+1 (555) 123-4567",
  },
  {
    icon: FaEnvelope,
    title: "Email",
    details: "info@pinnaclehealth.com",
  },  
];

// Form doğrulama şeması (Yup ile)
const ContactSchema = Yup.object().shape({
    name: Yup.string().required('İsim alanı zorunludur.'),
    email: Yup.string().email('Geçersiz e-posta adresi.').required('E-posta alanı zorunludur.'),
    subject: Yup.string().required('Konu alanı zorunludur.'),
    message: Yup.string().min(10, 'Mesajınız en az 10 karakter olmalıdır.').required('Mesaj alanı zorunludur.'),
});

function ContactFormSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Sütun 1: İletişim Formu */}
          <div>
            <Formik
              initialValues={{ name: '', email: '', subject: '', message: '' }}
              validationSchema={ContactSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                // Gerçek bir uygulamada burada e-posta gönderme işlemi yapılır.
                // Şimdilik sadece bir simülasyon yapıyoruz.
                setTimeout(() => {
                  alert("Mesajınız başarıyla gönderildi!\n" + JSON.stringify(values, null, 2));
                  resetForm();
                  setSubmitting(false);
                }, 1000);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <Field type="text" name="name" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <Field type="email" name="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <Field type="text" name="subject" placeholder="Subject" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
                    <ErrorMessage name="subject" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <Field as="textarea" name="message" placeholder="Your Message" rows="5" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition" />
                    <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button type="submit" disabled={isSubmitting} className="w-full bg-cyan-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-cyan-700 transition duration-300 disabled:bg-gray-400">
                      {isSubmitting ? 'Gönderiliyor...' : 'Send Message'}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Sütun 2: Diğer İletişim Yöntemleri */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-800">Other Contact Methods</h2>
            {contactDetails.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.details}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactFormSection