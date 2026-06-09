"use client";

import React, { useEffect, useState } from "react";
import { Shield, ChevronDown, ChevronUp, Check, X } from "lucide-react";

export default function CookieConsentBanner() {
  const [show, setShow] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Check if consent has already been given
    const consent = localStorage.getItem("sp_cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 1500); // slight delay for smooth page presentation
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenCookieSettings = () => {
      const consent = localStorage.getItem("sp_cookie_consent");
      if (consent) {
        try {
          const parsed = JSON.parse(consent);
          setAnalytics(parsed.analytics || false);
          setMarketing(parsed.marketing || false);
        } catch (e) {
          console.error("Failed to parse consent cookie", e);
        }
      }
      setShowCustomize(true);
      setShow(true);
    };

    window.addEventListener("open-cookie-settings", handleOpenCookieSettings);
    return () => {
      window.removeEventListener("open-cookie-settings", handleOpenCookieSettings);
    };
  }, []);

  const saveConsent = async (consentPrefs: {
    essential: boolean;
    analytics: boolean;
    marketing: boolean;
  }) => {
    const consentId = `consent_${Math.random().toString(36).substring(2, 11)}_${Date.now()}`;
    const payload = { ...consentPrefs, id: consentId };
    
    // Store in LocalStorage
    localStorage.setItem("sp_cookie_consent", JSON.stringify(payload));

    // Store in Cookie so server-side can read if required
    document.cookie = `sp_cookie_consent=${JSON.stringify(payload)}; path=/; max-age=31536000; SameSite=Lax`;

    // Log the consent to server-side API (GDPR Compliance Audit Trail)
    try {
      await fetch("/api/cookie-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          consentId,
          essential: consentPrefs.essential,
          analytics: consentPrefs.analytics,
          marketing: consentPrefs.marketing,
          userAgent: navigator.userAgent
        })
      });
    } catch (err) {
      console.error("Failed to send consent log to registry server", err);
    }

    setShow(false);
  };

  const handleAcceptAll = () => {
    saveConsent({ essential: true, analytics: true, marketing: true });
  };

  const handleDeclineAll = () => {
    saveConsent({ essential: true, analytics: false, marketing: false });
  };

  const handleSavePreferences = () => {
    saveConsent({ essential: true, analytics, marketing });
  };

  if (!show) return null;

  return (
    <div 
      id="cookie_consent_card" 
      className="fixed bottom-6 right-6 left-6 md:left-auto md:max-w-md bg-sp-forest border border-sp-border rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur-md text-white z-50 animate-fade-in font-sans"
    >
      <div className="space-y-4">
        {/* Header Title */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-5 h-5 text-sp-emerald animate-pulse" />
            <h4 className="text-[13px] font-bold uppercase tracking-wider font-mono">Cookie Compliance Panel</h4>
          </div>
          <button 
            onClick={() => setShow(false)}
            className="text-white/40 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Description */}
        <p className="text-[11.5px] text-zinc-300 leading-relaxed font-light">
          Scale Partners utilizes cookies to optimize portal setup performance, process economic estimations, and secure KYC files under UAE federal data processing regulations.
        </p>

        {/* Custom Preferences Accordion */}
        {showCustomize && (
          <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 space-y-3.5 text-[11px] animate-fade-in">
            {/* Essential Category */}
            <div className="flex items-start justify-between">
              <div className="space-y-0.5">
                <span className="font-semibold text-white">Essential Cookies</span>
                <p className="text-zinc-400 text-[10px] leading-normal font-light">Portal session parameters, security checks, and estimator cost freeze systems.</p>
              </div>
              <span className="text-[9px] bg-white/15 border border-white/10 px-2 py-0.5 rounded uppercase font-mono font-bold text-zinc-300 select-none">
                Always Active
              </span>
            </div>

            {/* Analytics Category */}
            <div className="flex items-start justify-between pt-2 border-t border-white/5">
              <div className="space-y-0.5">
                <span className="font-semibold text-white">Analytics Cookies</span>
                <p className="text-zinc-400 text-[10px] leading-normal font-light">Anonymous load speeds, user-flow maps, and server latency indicators.</p>
              </div>
              <input 
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="w-4 h-4 mt-0.5 border-sp-border rounded text-sp-emerald focus:ring-sp-neon/15 cursor-pointer accent-sp-emerald"
              />
            </div>

            {/* Marketing Category */}
            <div className="flex items-start justify-between pt-2 border-t border-white/5">
              <div className="space-y-0.5">
                <span className="font-semibold text-white">Marketing Cookies</span>
                <p className="text-zinc-400 text-[10px] leading-normal font-light">Verify campaign referral traffic, chat desk sessions, and onboarding SLA tracking.</p>
              </div>
              <input 
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="w-4 h-4 mt-0.5 border-sp-border rounded text-sp-emerald focus:ring-sp-neon/15 cursor-pointer accent-sp-emerald"
              />
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex flex-col gap-2 pt-2 border-t border-white/10">
          <div className="flex gap-2">
            <button
              onClick={handleAcceptAll}
              className="flex-1 py-2 bg-sp-emerald text-white rounded-xl text-[11px] font-bold tracking-tight hover:bg-sp-neon transition-all hover:scale-[1.01] active:scale-95 cursor-pointer border-0"
            >
              Accept All
            </button>
            <button
              onClick={handleDeclineAll}
              className="flex-1 py-2 bg-white/5 text-zinc-200 border border-white/10 rounded-xl text-[11px] font-semibold hover:bg-white/10 hover:text-white transition-all active:scale-95 cursor-pointer"
            >
              Decline All
            </button>
          </div>

          <button
            onClick={() => setShowCustomize(!showCustomize)}
            className="w-full flex items-center justify-center space-x-1.5 py-1.5 text-zinc-400 hover:text-white text-[11px] font-medium transition-colors cursor-pointer"
          >
            <span>{showCustomize ? "Collapse Options" : "Customize Preferences"}</span>
            {showCustomize ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {showCustomize && (
            <button
              onClick={handleSavePreferences}
              className="w-full py-2 bg-gradient-to-r from-emerald-700 via-sp-emerald to-sp-neon text-white rounded-xl text-[11px] font-bold tracking-tight shadow-md hover:scale-[1.01] active:scale-95 cursor-pointer border-0 mt-1"
            >
              Save Custom Preferences
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
