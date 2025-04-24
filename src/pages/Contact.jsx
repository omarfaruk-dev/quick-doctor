import React from 'react';
import toast from 'react-hot-toast';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success('form submit successfully')
    }
    return (
        <div className="max-w-3xl mx-auto px-4 py-16">
            <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
            <p className="text-gray-600 text-center mb-10">
                Have a question or need help? Fill out the form below and we'll get back to you soon.
            </p>

            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                        <input
                            type="text"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                        <input
                            type="email"
                            className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="you@example.com"
                            required
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="How can we help you?"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea
                        rows="5"
                        className="w-full border border-gray-300 rounded-3xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message here..."
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#176AE5] border-2 border-transparent cursor-pointer text-white py-3 rounded-3xl font-semibold hover:bg-transparent hover:text-[#176AE5] hover:border-2 hover:border-[#176AE5] transition"
                >
                    Send Message
                </button>
            </form>
            {/* faq */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
                <div className="space-y-6">
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">How do I book an appointment with a doctor?</h3>
                        <p className="text-gray-700 text-sm">
                            Simply browse our doctors, choose your preferred specialist, and click on “Book Appointment” to schedule a time that works for you.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Can I cancel or reschedule an appointment?</h3>
                        <p className="text-gray-700 text-sm">
                            Yes, you can manage your appointments from your dashboard. Just go to your appointments and choose cancel or reschedule.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Are consultations available 24/7?</h3>
                        <p className="text-gray-700 text-sm">
                            Many of our doctors are available around the clock. Look for doctors with the “Available Now” badge for immediate consultation.
                        </p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg shadow-sm">
                        <h3 className="font-semibold text-lg mb-2">Is my personal health information secure?</h3>
                        <p className="text-gray-700 text-sm">
                            Absolutely. We use industry-standard encryption and follow all health privacy regulations to keep your data safe.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Contact;
