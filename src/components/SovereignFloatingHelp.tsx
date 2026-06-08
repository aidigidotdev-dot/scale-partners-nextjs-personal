"use client";

import React, { useState, useEffect, useRef } from 'react';
import { PageId } from '../types';
import { 
  MessageSquare, 
  Send, 
  X, 
  Sparkles, 
  User, 
  Mail, 
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Clock,
  ChevronDown,
  Phone
} from 'lucide-react';

interface SovereignFloatingHelpProps {
  setPage: (page: PageId) => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
  time: string;
}

export default function SovereignFloatingHelp({ setPage }: SovereignFloatingHelpProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  
  // Lead info
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [formError, setFormError] = useState('');

  // Conversational state
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load lead state if saved in sessionStorage
  useEffect(() => {
    const savedName = sessionStorage.getItem('lead_name');
    const savedEmail = sessionStorage.getItem('lead_email');
    const savedPhone = sessionStorage.getItem('lead_phone');
    if (savedName && savedEmail) {
      setName(savedName);
      setEmail(savedEmail);
      if (savedPhone) setPhone(savedPhone);
      setLeadCaptured(true);
      
      // Seed first structural response
      setMessages([
        {
          role: 'model',
          text: `Welcome back, ${savedName}! Our elite UAE corporate structuring desk is active. How can Scale Partners assist you with corporate registries, golden visas, or tax strategy today?`,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  }, []);

  // Scroll to bottom whenever messages list grows
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleRegisterOnboarding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setFormError('Please provide your full legal name.');
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setFormError('Please provide a valid corporate email address.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Please provide your corporate phone number.');
      return;
    }

    setFormError('');
    sessionStorage.setItem('lead_name', name);
    sessionStorage.setItem('lead_email', email);
    sessionStorage.setItem('lead_phone', phone);
    setLeadCaptured(true);

    // Trigger initial message session
    setIsLoading(true);
    setTimeout(async () => {
      try {
        const response = await fetch('/api/chatbot', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name,
            email,
            phone,
            prompt: "Please introduce yourself and offer custom corporate setup support in Dubai.",
            history: []
          })
        });

        const data = await response.json();
        setMessages([
          {
            role: 'model',
            text: data.response || `Greeting authorized, Founder ${name}. I am your dedicated Scale Partners executive advisor. Feel free to enquire about mainland det registrations, free zone frameworks, or the 9% corporate tax regulations. How may I serve you today?`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } catch (err) {
        setMessages([
          {
            role: 'model',
            text: `Welcome, Founder ${name}. I am your Scale Partners executive corporate structuring advisor. Write your query about any mainland, free zone or visa setup to proceed.`,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          }
        ]);
      } finally {
        setIsLoading(false);
      }
    }, 400);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    
    const userMsg: Message = {
      role: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setIsLoading(true);

    try {
      // Map log structure for the server API
      const chatHistory = messages.map(m => ({
        role: m.role,
        text: m.text
      }));

      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          prompt: userText,
          history: chatHistory
        })
      });

      if (!response.ok) {
        throw new Error('API server disconnect');
      }

      const data = await response.json();
      
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: data.response,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      setMessages(prev => [
        ...prev,
        {
          role: 'model',
          text: "I apologize, our secure corporate server is undergoing brief periodic compliance audits. Please feel free to calculate your pricing using our corporate cost tool in the meantime!",
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const resetLeadState = () => {
    sessionStorage.removeItem('lead_name');
    sessionStorage.removeItem('lead_email');
    sessionStorage.removeItem('lead_phone');
    setName('');
    setEmail('');
    setPhone('');
    setLeadCaptured(false);
    setMessages([]);
  };

  return (
    <div id="corporate_floating_help_desk" className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 font-sans">
      
      {/* 1. CHAT WINDOW PANEL */}
      {isOpen && (
        <div className="w-[360px] sm:w-[380px] h-[520px] bg-white border border-zinc-200 shadow-2xl rounded-2xl flex flex-col overflow-hidden animate-fade-in relative z-50">
          
          {/* Glassmorphic Header */}
          <div className="bg-gradient-to-r from-[#011B3D] via-[#12B76A]/95 to-[#22C55E]/90 text-white p-4.5 flex items-center justify-between border-b border-white/10">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center relative">
                <Sparkles className="w-4 h-4 text-[#22C55E] animate-pulse" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-[#011B3D]"></span>
              </div>
              <div className="text-left">
                <h4 className="text-[13.5px] font-bold tracking-tight">Executive AI Advisor</h4>
                <div className="flex items-center space-x-1">
                  <span className="text-[9.5px] text-[#22C55E] font-mono tracking-widest uppercase">Verified Desk Agent • Live</span>
                </div>
              </div>
            </div>
            
            <button 
              id="trigger_close_chat_drawer"
              onClick={() => setIsOpen(false)}
              className="p-1 px-2.5 hover:bg-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer text-xs flex items-center space-x-1"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Core Support / Conversational Space */}
          <div className="flex-grow flex flex-col bg-[#FAF9F6]/50 overflow-y-auto">
            
            {!leadCaptured ? (
              /* Phase A: Corporate Lead Qualification */
              <div className="flex-grow flex flex-col justify-center items-center p-6 text-center space-y-5 animate-fade-in bg-white">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#12B76A]/10 to-[#22C55E]/15 flex items-center justify-center border border-zinc-200/60 shadow-xs">
                  <ShieldCheck className="w-6 h-6 text-[#006ccf]" />
                </div>
                
                <div className="space-y-1.5">
                  <h5 className="text-[15px] font-bold text-zinc-900 tracking-tight">Interactive Advisory Session</h5>
                  <p className="text-[12px] text-zinc-500 max-w-[280px] leading-relaxed">
                    To maintain strict registry audit standards, please authorize your corporate credentials to begin.
                  </p>
                </div>

                <form onSubmit={handleRegisterOnboarding} className="w-full space-y-3.5 pt-1.5 text-left">
                  {formError && (
                    <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 text-[11px] font-medium leading-tight">
                      {formError}
                    </div>
                  )}

                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono font-bold uppercase text-zinc-400 tracking-wider">Full Legal Name</label>
                    <div className="relative">
                      <User className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Marcus Vance"
                        className="w-full pl-9 pr-3.5 py-2 text-[12.5px] bg-white border border-zinc-200 rounded-xl focus:outline-none focus:border-gold-500 placeholder-zinc-350"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono font-bold uppercase text-zinc-400 tracking-wider">Corporate Email Address</label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. founder@company.ae"
                        className="w-full pl-9 pr-3.5 py-2 text-[12.5px] bg-white border border-zinc-200 rounded-xl focus:outline-none focus:border-gold-500 placeholder-zinc-350"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-[10.5px] font-mono font-bold uppercase text-zinc-400 tracking-wider">Direct Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
                      <input 
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +971 50 123 4567"
                        className="w-full pl-9 pr-3.5 py-2 text-[12.5px] bg-white border border-zinc-200 rounded-xl focus:outline-none focus:border-gold-500 placeholder-zinc-350"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit"
                    className="w-full mt-2 py-3 bg-brand-grad hover:opacity-95 text-white rounded-xl text-[12.5px] font-bold tracking-tight shadow-md flex items-center justify-center space-x-1.5 hover:scale-[1.01] transition-all cursor-pointer border-0"
                  >
                    <span>Authorize Session</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              </div>

            ) : (
              /* Phase B: Real-Time Dynamic Chats */
              <div className="flex-grow p-4 flex flex-col space-y-4">
                
                {messages.map((msg, index) => {
                  const isUser = msg.role === 'user';
                  return (
                    <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'} animate-fade-in`}>
                      <div className={`max-w-[82%] p-3 px-4 rounded-2xl text-[13px] leading-relaxed shadow-3xs ${
                        isUser 
                          ? 'bg-zinc-800 text-white rounded-tr-none border border-zinc-700' 
                          : 'bg-white text-zinc-800 border border-zinc-200/90 rounded-tl-none'
                      }`}>
                        
                        {/* Message content */}
                        <div className="whitespace-pre-line font-sans">
                          {msg.text}
                        </div>
                        
                        {/* Message timestamp */}
                        <div className={`text-[9px] mt-1.5 flex items-center space-x-1 justify-end ${
                          isUser ? 'text-zinc-400' : 'text-zinc-400 font-mono'
                        }`}>
                          <Clock className="w-2.5 h-2.5" />
                          <span>{msg.time}</span>
                        </div>

                      </div>
                    </div>
                  );
                })}

                {isLoading && (
                  <div className="flex justify-start animate-pulse">
                    <div className="bg-white border border-zinc-200 max-w-[50px] p-3 px-4 rounded-2xl rounded-tl-none flex items-center space-x-1.5">
                      <div className="w-2 h-2 bg-gradient-to-r from-[#12B76A] to-[#22C55E] rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-gradient-to-r from-[#12B76A] to-[#22C55E] rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-gradient-to-r from-[#12B76A] to-[#22C55E] rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
            )}

          </div>

          {/* Interactive Input Trigger Bar */}
          {leadCaptured && (
            <div className="bg-white border-t border-zinc-200/60 p-3 flex flex-col space-y-2">
              <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about registries, taxes, prices..."
                  className="flex-grow px-3.5 py-2 bg-zinc-50 border border-zinc-200 rounded-xl text-[12.5px] focus:outline-none focus:border-gold-500 placeholder-zinc-400"
                />
                <button 
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className="p-2 bg-brand-grad hover:opacity-95 text-white rounded-xl disabled:opacity-40 transition-opacity cursor-pointer flex items-center justify-center border-0"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              
              <div className="flex items-center justify-between text-[10px] text-zinc-400 font-mono px-1">
                <button 
                  onClick={() => setPage('calculator')}
                  className="hover:underline text-gold-650 font-semibold"
                >
                  View Cost Calculator
                </button>
                <button 
                  onClick={resetLeadState}
                  className="hover:underline text-zinc-500 inline-flex items-center space-x-1"
                >
                  <RefreshCw className="w-2.5 h-2.5" />
                  <span>Register Another Email</span>
                </button>
              </div>
            </div>
          )}

        </div>
      )}

      {/* 2. DUAL ACTIONS FLOATING TRIGGER PILLS */}
      <div className="flex items-center space-x-2">
        
        {/* A. WhatsApp Circular support badge */}
        <a 
          href="https://wa.me/971500000000?text=Hello%20Scale%20Partners%20Advisory%20Desk.%20I%20would%20like%20to%20enquire%20about%20starting%20a%20company%20in%20Dubai."
          target="_blank"
          rel="noopener noreferrer"
          id="whatsapp_engagement_bubble"
          title="Direct WhatsApp Support Desk"
          className="w-12 h-12 rounded-full bg-emerald-500 hover:bg-emerald-600 shadow-xl flex items-center justify-center text-white scale-100 hover:scale-105 active:scale-95 transition-all group relative duration-300"
        >
          <svg className="w-5.5 h-5.5 fill-white text-white" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.731-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.432.002 9.851-4.409 9.854-9.842.002-2.632-1.021-5.105-2.88-6.969-1.86-1.862-4.329-2.887-6.961-2.889-5.436 0-9.86 4.417-9.863 9.853-.001 1.562.418 3.087 1.214 4.436L1.838 21.04l4.809-1.886zm11.751-5.698c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.568-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347z"/>
          </svg>
          <span className="absolute right-12 top-2 bg-[#011B3D] text-white px-3 py-1.5 rounded-full text-[11px] font-bold shadow-md block whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all mr-1 duration-300">
            WhatsApp Live Support • Online
          </span>
        </a>

        {/* B. Symmetrical AI Chatbot Balloon trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="ai_system_drawer_trigger"
          title="Ask Scale Partners AI Advisory"
          className="w-12 h-12 rounded-full bg-brand-grad text-white shadow-xl flex items-center justify-center hover:scale-105 active:scale-95 transition-transform relative border-0 hover:rotate-6 duration-300 cursor-pointer"
        >
          {isOpen ? (
            <ChevronDown className="w-5.5 h-5.5 hover:rotate-18 transition-transform" />
          ) : (
            <>
              <MessageSquare className="w-5.5 h-5.5" />
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold text-white shrink-0">1</span>
            </>
          )}
        </button>

      </div>

    </div>
  );
}
