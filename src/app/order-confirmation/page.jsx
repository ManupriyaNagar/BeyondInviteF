"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  CheckCircle, 
  Download, 
  Mail, 
  Calendar,
  Package,
  ArrowRight,
  Home,
  ShoppingBag
} from "lucide-react";

export default function OrderConfirmation() {
  const router = useRouter();
  const [orderNumber] = useState(() => 
    'ORD-' + Math.random().toString(36).substr(2, 9).toUpperCase()
  );

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleContinueShopping = () => {
    router.push('/wedding');
  };

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Success Icon and Message */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
          <p className="text-lg text-gray-600 mb-2">Thank you for your purchase</p>
          <p className="text-gray-600">Your order number is: <span className="font-semibold text-[#37514D]">{orderNumber}</span></p>
        </div>

        {/* Order Details Card */}
        <div className="bg-white rounded-xl shadow-sm border p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Order Information */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Order Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Order Number</p>
                    <p className="text-gray-600">{orderNumber}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Order Date</p>
                    <p className="text-gray-600">{new Date().toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-900">Confirmation Email</p>
                    <p className="text-gray-600">Sent to your email address</p>
                  </div>
                </div>
              </div>
            </div>

            {/* What's Next */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">What's Next?</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-[#37514D] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Order Processing</p>
                    <p className="text-sm text-gray-600">We'll start working on your custom invitations within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Design Review</p>
                    <p className="text-sm text-gray-600">You'll receive a digital proof for approval within 2-3 business days</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                    3
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">Production & Shipping</p>
                    <p className="text-sm text-gray-600">After approval, your order will be printed and shipped within 5-7 business days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Download className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Download Receipt</h3>
            <p className="text-sm text-gray-600 mb-4">Get a copy of your order receipt for your records</p>
            <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Download PDF
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Package className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Track Your Order</h3>
            <p className="text-sm text-gray-600 mb-4">Monitor the progress of your custom invitations</p>
            <button className="text-green-600 font-medium hover:text-green-700 transition-colors">
              Track Order
            </button>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Need Help?</h3>
            <p className="text-sm text-gray-600 mb-4">Contact our support team for any questions</p>
            <button className="text-purple-600 font-medium hover:text-purple-700 transition-colors">
              Contact Support
            </button>
          </div>
        </div>

        {/* Continue Shopping */}
        <div className="bg-gradient-to-r from-[#37514D] to-[#2a3d39] rounded-xl p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Continue Your Celebration</h2>
          <p className="text-lg mb-6 opacity-90">
            Explore more invitation designs for your special occasions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handleContinueShopping}
              className="bg-white text-[#37514D] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-5 h-5" />
              Continue Shopping
            </button>
            <button
              onClick={handleGoHome}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#37514D] transition-colors flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </button>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Information</h3>
          <div className="bg-blue-50 rounded-lg p-6 text-left">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>You will receive an email confirmation shortly with your order details</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Our design team will contact you within 24 hours to discuss customization details</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>You can make changes to your design during the proof review stage</span>
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Standard delivery time is 7-10 business days after design approval</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}