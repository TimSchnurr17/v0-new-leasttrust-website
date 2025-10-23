"use client"

import { useState } from "react"
import { useChat } from "ai"
import { MessageCircle, X, Send, Phone, Calendar } from "lucide-react"

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat()

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 left-6 bg-primary text-white rounded-full p-4 shadow-lg hover:bg-primary-dark transition-all duration-300 z-50 flex items-center justify-center"
        aria-label="Open AI Chat"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 left-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-xl border border-gray-200 z-50 flex flex-col max-h-[600px]">
          {/* Chat Header */}
          <div className="bg-primary text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold">LeastTrust AI Assistant</h3>
                <p className="text-sm opacity-90">Ask about our cybersecurity services</p>
              </div>
              <button onClick={toggleChat} className="text-white hover:text-gray-200" aria-label="Close chat">
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 min-h-[300px] max-h-[400px]">
            {messages.length === 0 && (
              <div className="text-center text-gray-500 py-8">
                <MessageCircle size={48} className="mx-auto mb-4 text-gray-300" />
                <p className="mb-4">Hi! I'm here to help you learn about LeastTrust's cybersecurity services.</p>
                <div className="space-y-2 text-sm">
                  <button
                    onClick={() =>
                      handleInputChange({ target: { value: "What services does LeastTrust offer?" } } as any)
                    }
                    className="block w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                  >
                    What services does LeastTrust offer?
                  </button>
                  <button
                    onClick={() =>
                      handleInputChange({ target: { value: "How can you help with insider threats?" } } as any)
                    }
                    className="block w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                  >
                    How can you help with insider threats?
                  </button>
                  <button
                    onClick={() =>
                      handleInputChange({ target: { value: "Tell me about cyber insurance readiness" } } as any)
                    }
                    className="block w-full text-left p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors"
                  >
                    Tell me about cyber insurance readiness
                  </button>
                </div>
              </div>
            )}

            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.role === "user" ? "bg-primary text-white" : "bg-gray-100 text-gray-800"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-lg">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Actions */}
          <div className="border-t border-gray-200 p-3">
            <div className="flex space-x-2 mb-3">
              <a
                href="tel:5517510010"
                className="flex-1 flex items-center justify-center px-3 py-2 bg-primary text-white text-xs rounded hover:bg-primary-dark transition-colors"
              >
                <Phone size={14} className="mr-1" />
                Call Now
              </a>
              <a
                href="https://calendar.app.google/53yGP58pPZiY8XEN6"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center px-3 py-2 bg-gray-600 text-white text-xs rounded hover:bg-gray-700 transition-colors"
              >
                <Calendar size={14} className="mr-1" />
                Schedule
              </a>
            </div>
          </div>

          {/* Input Area */}
          <form onSubmit={handleSubmit} className="border-t border-gray-200 p-4">
            <div className="flex space-x-2">
              <input
                value={input}
                onChange={handleInputChange}
                placeholder="Ask about our cybersecurity services..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}
