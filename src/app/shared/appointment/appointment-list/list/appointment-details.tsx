
'use client';

import { useModal } from '@/app/shared/modal-views/use-modal';
import { ActionIcon, Title, Text, Switch } from 'rizzui';
import { PiXBold } from 'react-icons/pi';
import { useState } from 'react';

const dummyCampaign = {
  type: 'email', // or 'sms'
  from: 'Braze <braze@mia-q750.b.htmlmail.com>',
  subject: "10% off just for you!",
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
  previewHtml: `
    <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#fff;">
      <div style="text-align:center;padding:32px 0 16px 0;">
        <img src='https://dummyimage.com/180x40/222/fff&text=DECORUMSOFT' alt='Logo' style='margin:0 auto 16px auto;'/>
        <div style='font-size:18px;font-weight:bold;margin-bottom:12px;'>THANKS FOR SIGNING UP!</div>
      </div>
      <img src='https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80' alt='Banner' style='width:100%;max-width:400px;display:block;margin:0 auto 16px auto;border-radius:8px;'/>
      <div style='text-align:center;margin-bottom:16px;'>Hey there,</div>
      <div style='text-align:center;margin-bottom:16px;'>Thanks for signing up, you’ll now receive the latest offers, releases, and news straight to your inbox.</div>
      <div style='text-align:center;font-weight:bold;margin-bottom:8px;'>HERE'S 10% OFF!</div>
      <div style='text-align:center;margin-bottom:16px;'>Don’t worry, we didn’t forget! Use code <b>AD4A5TuE</b> for 10% off your next order!</div>
      <div style='text-align:center;margin-bottom:24px;'><button style='padding:8px 24px;border-radius:4px;background:#222;color:#fff;border:none;'>Shop Now</button></div>
      <div style='background:#222;color:#fff;padding:24px 0;text-align:center;font-size:12px;'>
        <div style='margin-bottom:8px;'>DECORUMSOFT</div>
        <div style='margin-bottom:8px;'>SUPPORT | COMPANY | CONTACT</div>
        <div style='opacity:0.7;'>You’re receiving this mail because you have asked to be updated on special offers.<br/>Set your preferences here or unsubscribe directly.<br/>© 2022 All Rights Reserved.<br/>Decorumsoft Inc., 695 West Rainbow Road, New York, NY 10001</div>
      </div>
    </div>
  `,
  previewSms: `Hey there! Thanks for signing up. Use code AD4A5TuE for 10% off your next order at Decorumsoft! Shop now: https://decorumsoft.com`,
};


export default function CampaignPreviewModal() {
  const { closeModal } = useModal();
  const [previewType, setPreviewType] = useState<'email' | 'sms'>('email');
  const [device, setDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');

  // Device-specific dummy previews for email
  const emailPreviews = {
    desktop: dummyCampaign.previewHtml,
    tablet: dummyCampaign.previewHtml.replace('max-width:600px', 'max-width:400px').replace('font-size:18px', 'font-size:16px'),
    mobile: dummyCampaign.previewHtml.replace('max-width:600px', 'max-width:320px').replace('font-size:18px', 'font-size:14px'),
  };

  // Device toggle icons
  const deviceOptions = [
    { key: 'desktop', icon: (<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="3" y="4" width="14" height="9" rx="2" stroke="#222" strokeWidth="1.5"/><rect x="8" y="15" width="4" height="1.5" rx="0.75" fill="#222"/></svg>) },
    { key: 'tablet', icon: (<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="5" y="3" width="10" height="14" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="10" cy="15.5" r="0.75" fill="#222"/></svg>) },
    { key: 'mobile', icon: (<svg width="20" height="20" fill="none" viewBox="0 0 20 20"><rect x="7" y="2" width="6" height="16" rx="2" stroke="#222" strokeWidth="1.5"/><circle cx="10" cy="16" r="0.75" fill="#222"/></svg>) },
  ];

  return (
    <div className="block">
      <div className="flex items-center justify-between border-b border-gray-200 p-5 md:p-7">
        <Title as="h3" className="font-lexend text-xl font-semibold md:text-2xl">
          Campaign Preview
        </Title>
        <ActionIcon
          size="sm"
          variant="text"
          onClick={() => closeModal()}
          className="p-0 text-gray-500 hover:!text-gray-900"
        >
          <PiXBold className="size-5" />
        </ActionIcon>
      </div>
      <div className="p-5 md:px-7 md:pb-7 md:pt-6 flex flex-col items-center">
        {/* Top bar: Parent toggle left, device toggle right */}
        <div className="w-full flex items-center justify-between mb-8">
          {/* Parent toggle for Email/SMS (left) */}
          <div className="flex items-center gap-2">
            <button
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${previewType === 'email' ? 'bg-white border-primary text-primary shadow' : 'bg-gray-100 border-gray-200 text-gray-500'}`}
              onClick={() => setPreviewType('email')}
            >
              Email
            </button>
            <button
              className={`px-4 py-2 rounded-md border text-sm font-medium transition-colors ${previewType === 'sms' ? 'bg-white border-primary text-primary shadow' : 'bg-gray-100 border-gray-200 text-gray-500'}`}
              onClick={() => setPreviewType('sms')}
            >
              SMS
            </button>
          </div>
          {/* Device toggle (right, only for Email) */}
          {previewType === 'email' ? (
            <div className="flex items-center gap-2">
              {deviceOptions.map(opt => (
                <button
                  key={opt.key}
                  className={`w-12 h-12 flex items-center justify-center rounded-xl border transition-colors ${device === opt.key ? 'bg-white border-primary shadow' : 'bg-gray-100 border-gray-200'}`}
                  onClick={() => setDevice(opt.key as 'desktop' | 'tablet' | 'mobile')}
                  aria-label={opt.key.charAt(0).toUpperCase() + opt.key.slice(1)}
                >
                  {opt.icon}
                </button>
              ))}
            </div>
          ) : <div />}
        </div>

        {/* Preview Area */}
        {previewType === 'email' ? (
          <div className="w-full max-w-2xl bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-700">
              <div><b>From:</b> {dummyCampaign.from}</div>
              <div><b>Subject:</b> {dummyCampaign.subject}</div>
            </div>
            <div className="bg-gray-50 flex justify-center items-center min-h-[400px] p-6 overflow-auto">
              <div className="w-full flex justify-center">
                <div
                  className="w-full max-w-lg"
                  dangerouslySetInnerHTML={{ __html: emailPreviews[device] }}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="px-4 py-2 border-b border-gray-100 text-xs text-gray-700">
              <div><b>SMS Preview</b></div>
            </div>
            <div className="bg-gray-50 flex items-center min-h-[80px] p-4">
              <Text className="text-sm text-gray-800">{dummyCampaign.previewSms}</Text>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
