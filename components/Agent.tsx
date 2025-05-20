import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

enum CallStatus {
    INACTIVE = "INACTIVE",
    CONNECTING = "CONNECTING",
    ACTIVE = "ACTIVE",
    FINISHED = "FINISHED",
}

interface AgentProps {
    userName: string;
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStatus.FINISHED;
    const isSpeaking = true;
    const messages = [
        "What is your name?",
        "My name is John Doe, nice to meet you!",
    ];
    const lastMessage = messages[messages.length - 1];

    return (
        <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold flex items-center justify-center gap-2">
                    <Image src="/logo.svg" alt="PrepWise" width={30} height={30} />
                    <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                        PrepWise
                    </span>
                </h1>
                <p className="text-lg mt-2">Interview Generation</p>
            </div>

            {/* Cards */}
            <div className="flex gap-8 flex-wrap justify-center items-center mb-6">
                {/* AI Interviewer */}
                <div className="w-[240px] h-[280px] bg-gradient-to-br from-[#1a1a2e] to-[#16213e] rounded-xl shadow-xl flex flex-col items-center justify-center p-6 text-center">
                    <Image src="/ai-avatar.png" alt="AI" width={80} height={80} className="mb-4" />
                    <h3 className="text-lg font-semibold">AI Interviewer</h3>
                    {isSpeaking && <span className="mt-2 animate-ping w-3 h-3 bg-green-500 rounded-full" />}
                </div>

                {/* User */}
                <div className="w-[240px] h-[280px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-xl flex flex-col items-center justify-center p-6 text-center">
                    <Image src="/user-avatar.png" alt="User" width={80} height={80} className="rounded-full mb-4" />
                    <h3 className="text-lg font-semibold">{userName || "You"}</h3>
                </div>
            </div>

            {/* Transcript */}
            {lastMessage && (
                <div className="bg-[#1f1f1f] px-6 py-3 rounded-full shadow-inner mb-6 text-sm text-center max-w-md">
                    {lastMessage}
                </div>
            )}

            {/* Call Button */}
            <div>
                {callStatus !== CallStatus.ACTIVE ? (
                    <button className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all">
                        {callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED ? "Call" : "..."}
                    </button>
                ) : (
                    <button className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-full shadow-lg transition-all">
                        End
                    </button>
                )}
            </div>
        </div>
    );
};

export default Agent;
