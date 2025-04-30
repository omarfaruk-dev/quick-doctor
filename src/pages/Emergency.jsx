import React from 'react';
import { Link } from 'react-router';

const Emergency = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-16 text-center">
            <title>Emergency ??? Contact Us</title>
            <h1 className="text-4xl font-bold text-red-600 mb-4">Emergency Help</h1>
            <p className="text-gray-700 mb-8">
                If you're experiencing a medical emergency, we're here to help — 24/7.
                Immediate virtual consultations, ambulance support, and emergency specialist bookings are available.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-red-100 p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2 text-red-700">📞 Call Emergency Line</h2>
                    <p className="mb-4 text-sm text-gray-700">Get immediate voice assistance from our medical team.</p>
                    <a
                        href="tel:123456789"
                        className="inline-block bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 transition"
                    >
                        Call Now
                    </a>
                </div>
                <div className="bg-blue-100 p-6 rounded-xl shadow">
                    <h2 className="text-xl font-semibold mb-2 text-blue-700">💬 Emergency Live Chat</h2>
                    <p className="mb-4 text-sm text-gray-700">Chat instantly with a medical assistant for quick advice.</p>
                    <Link
                        to="/live-chat"
                        className="inline-block bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition"
                    >
                        Start Chat
                    </Link>
                </div>
            </div>

            <div className="mt-12 text-sm text-gray-600">
                <p>
                    If your situation is life-threatening, please call your local emergency services or visit the nearest hospital immediately.
                </p>
            </div>
        </div>
    );
};

export default Emergency;