'use client';

import { useState } from 'react';
import { Send } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const initial: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  function update(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('Failed');
      setStatus('sent');
      setForm(initial);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-xl border border-[#277971] bg-[#277971]/10 p-8 text-center">
        <Send className="mx-auto h-10 w-10 text-[#277971]" />
        <h3 className="mt-4 text-xl font-bold text-[#277971]">Message Sent!</h3>
        <p className="mt-2 text-sm text-[#277971]">
          Thank you for reaching out. We&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-medium text-[#277971] underline hover:text-[#134645]"
        >
          Send another message
        </button>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-[#108E81] focus:ring-1 focus:ring-[#108E81]/20';

  return (
    <form onSubmit={handleSubmit} className="space-y-5 rounded-xl border border-[#96A69E] bg-[#BBA27E] p-6 shadow-sm">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#134645]">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            className={inputClass}
            placeholder="John Smith"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#134645]">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#134645]">Phone</label>
          <input
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            className={inputClass}
            placeholder="+1 234 567 8900"
          />
        </div>
        <div>
          <label className="mb-1.5 block text-sm font-medium text-[#134645]">Subject</label>
          <input
            required
            value={form.subject}
            onChange={(e) => update('subject', e.target.value)}
            className={inputClass}
            placeholder="Tour inquiry"
          />
        </div>
      </div>

      <div>
        <label className="mb-1.5 block text-sm font-medium text-[#134645]">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          className={`${inputClass} resize-none`}
          placeholder="Tell us how we can help..."
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
        style={{ backgroundColor: '#108E81' }}
      >
        <Send className="h-4 w-4" />
        {status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
