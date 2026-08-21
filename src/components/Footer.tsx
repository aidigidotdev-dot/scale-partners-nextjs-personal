"use client";

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

interface FooterProps {
  openContactModal: () => void;
}

export default function Footer({ openContactModal }: FooterProps) {
  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61586771470454",
      icon: Facebook,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/scale_partners1",
      icon: Instagram,
    },
  ];

  return (
    <footer id="site_footer" className="bg-[#0b0e1a] text-zinc-400 font-sans border-t border-[#151a2d] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Corporate Legal & Address blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start justify-between">
          
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_220px] gap-8">
            <div className="space-y-4">
              <div className="inline-flex items-center bg-white px-3.5 py-2 rounded-xl">
                <Image
                  src="/assets/logo_transparent.png"
                  alt="Scale Partners Logo"
                  width={130}
                  height={42}
                  className="object-contain max-h-[42px] w-auto"
                />
              </div>

              <p className="text-[12px] text-zinc-500 max-w-md leading-relaxed font-sans">
                Scale Partners Corporate Advisory is a licensed corporate setup agency and officially registered agent operating under direct DET registry clearances in the United Arab Emirates.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Scale Partners</h4>
              <nav className="flex flex-col space-y-3 text-[13px]">
                <a href="/about-us" className="text-zinc-400 hover:text-gold-400 transition-colors">About Us</a>
                <button onClick={openContactModal} className="w-fit text-left text-zinc-400 hover:text-gold-400 transition-colors">Contact Advisory Desk</button>
                <a href="/privacy-policy" className="text-zinc-400 hover:text-gold-400 transition-colors">Privacy Policy</a>
                <a href="/terms-and-conditions" className="text-zinc-400 hover:text-gold-400 transition-colors">Terms & Conditions</a>
              </nav>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-[12px] font-sans">
            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Headquarters</span>
              <p className="leading-relaxed text-zinc-500">
                <a 
                  href="https://google.ae/maps/place/Four+Roads+Group/data=!4m2!3m1!1s0x0:0xcf43204a335da6e1?sa=X&ved=1t:2428&ictx=111" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold-450 transition-colors"
                >
                  1703, Conrad Tower,<br />
                  World Trade Center, Dubai
                </a>
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Direct Advisory desk</span>
              <p className="leading-relaxed text-zinc-500 flex flex-col space-y-1">
                <span>WhatsApp: +971 52 669 2157</span>
                <span>Landline: 04-360-7999</span>
                <span>Email: info@fourroadsgroup.com</span>
              </p>
            </div>

            <div className="space-y-3">
              <span className="text-white font-semibold font-mono uppercase tracking-wider text-[10.5px]">Social</span>
              <div className="flex flex-wrap gap-2.5">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Scale Partners on ${link.name}`}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-zinc-400 transition-colors hover:border-gold-400/40 hover:text-gold-400"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

        {/* Legals / Copyright */}
        <div className="pt-12 border-t border-[#151a2d] mt-12 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-550 font-sans gap-4">
          <div>
            © 2026 Scale Partners Corporate Advisory. All rights reserved.
          </div>
          
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-zinc-600">
            <a href="#" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('open-cookie-settings')); }} className="hover:text-gold-400 transition-colors">Cookie Preferences</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
