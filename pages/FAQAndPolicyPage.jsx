import React from 'react';
import Accordion from '../components/Accordion';

const FAQAndPolicyPage = () => {
  const faqs = [
    { q: 'When should I book my session?', a: "The sooner, the better — most sessions book 4–6 weeks in advance. Newborn and specialty sessions often require earlier booking." },
    { q: 'Where do sessions take place?', a: "Sessions can be held at the studio or your chosen location. I can recommend nearby locations that match the mood you want." },
    { q: 'Do you offer wardrobe or styling help?', a: "Yes — I provide styling guidance and can coordinate with makeup services for a seamless experience." },
    { q: 'How do I book a session?', a: "Fill out the contact form, choose a preferred date, and I’ll send a retainer invoice and agreement to secure your slot." },
    { q: 'What payment methods do you accept?', a: "Major credit cards and secure online payments. Retainers are non-refundable; details are in the booking terms." },
    { q: 'What happens if it rains or I need to reschedule?', a: "Outdoor sessions can be rescheduled at no additional cost due to weather. Rescheduling for other reasons should be requested at least 48 hours in advance." },
    { q: 'When will I receive my images?', a: "Typical turnaround is 1–2 weeks for portrait sessions; weddings and larger events may take longer." },
    { q: 'Can I share my photos on social media?', a: "Yes — please credit @jinetteramosphotography for social sharing. For commercial usage, contact me for licensing." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section className="relative py-20 px-6 sm:px-8">
        <div className="max-w-5xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-3">Frequently Asked Questions</h1>
          <p className="text-gray-600">Concise answers to common questions — tap a question to expand the answer.</p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-4">
          {faqs.map((f, i) => (
            <Accordion key={i} question={f.q} answer={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </section>

      <section className="py-20 px-6 sm:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl p-8 bg-black text-white">
            <h2 className="text-2xl mb-3 font-bold">Studio Policies (Short)</h2>
            <ul className="list-disc ml-6 space-y-2 text-gray-200">
              <li>Retainers secure your date and are non-refundable.</li>
              <li>Turnaround times vary by session type; typical portrait galleries are delivered within 1–2 weeks.</li>
              <li>Respect for the studio and scheduled times ensures the best experience for all clients.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQAndPolicyPage;
