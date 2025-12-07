import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { clsx } from 'clsx';

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'assistant',
            content: 'Hello! I\'m your farming assistant. How can I help you today?'
        }
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = {
            role: 'user',
            content: input
        };

        setMessages(prev => [...prev, userMessage]);
        setInput('');

        // Simulate bot response
        setTimeout(() => {
            const botResponse = {
                role: 'assistant',
                content: getBotResponse(input)
            };
            setMessages(prev => [...prev, botResponse]);
        }, 500);
    };

    const getBotResponse = (userInput) => {
        const lowerInput = userInput.toLowerCase();
        
        if (lowerInput.includes('weather') || lowerInput.includes('rain') || lowerInput.includes('temperature')) {
            return 'I can help you with weather information! Check the Dashboard for current weather conditions and alerts. You can also view weather history in the Alerts History section.';
        }
        
        if (lowerInput.includes('crop') || lowerInput.includes('plant')) {
            return 'You can manage your crops in the Crop Management section. Add crops, set temperature, rainfall, and wind thresholds, and enable email alerts for each crop.';
        }
        
        if (lowerInput.includes('alert') || lowerInput.includes('notification')) {
            return 'Alerts are automatically generated when weather conditions exceed your crop thresholds. You can view all alerts in the Alerts History page and manage email notification preferences in the Notifications section.';
        }
        
        if (lowerInput.includes('help') || lowerInput.includes('how')) {
            return 'I can help you with:\n- Weather information and alerts\n- Crop management\n- Notification settings\n- General farming questions\n\nWhat would you like to know?';
        }
        
        if (lowerInput.includes('hello') || lowerInput.includes('hi')) {
            return 'Hello! I\'m here to help you with your farming needs. What can I assist you with today?';
        }
        
        return 'I understand you\'re asking about: "' + userInput + '". For specific information, please check the relevant sections in the dashboard. If you need help with weather, crops, or alerts, feel free to ask!';
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all duration-300 flex items-center justify-center z-50 hover:scale-110"
                >
                    <MessageCircle size={24} />
                </button>
            )}

            {/* Chat Window */}
            {isOpen && (
                <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col z-50">
                    {/* Header */}
                    <div className="bg-primary-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <MessageCircle size={20} />
                            <span className="font-semibold">Farming Assistant</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="hover:bg-primary-700 rounded-lg p-1 transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={clsx(
                                    "flex",
                                    message.role === 'user' ? "justify-end" : "justify-start"
                                )}
                            >
                                <div
                                    className={clsx(
                                        "max-w-[80%] rounded-2xl px-4 py-2",
                                        message.role === 'user'
                                            ? "bg-primary-600 text-white"
                                            : "bg-white text-gray-900 border border-gray-200"
                                    )}
                                >
                                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                                </div>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
                        <div className="flex space-x-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                            />
                            <button
                                onClick={handleSend}
                                className="bg-primary-600 text-white px-4 py-2 rounded-xl hover:bg-primary-700 transition-colors flex items-center justify-center"
                            >
                                <Send size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

