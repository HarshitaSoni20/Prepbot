import React from "react";
import Image from "next/image";
import dayjs from "dayjs";
import Link from "next/link";

import { getRandomInterviewCover } from "@/lib/utils";
import { Button } from "./ui/button";
import DisplayTechIcons from "./DisplayTechIcons";

interface InterviewCardProps {
    interviewId: string;
    userId: string;
    role: string;
    type: string;
    techstack: string[];
    createdAt: string;
}

const InterviewCard = ({
                           interviewId,
                           userId,
                           role,
                           type,
                           techstack,
                           createdAt,
                       }: InterviewCardProps) => {
    const feedback = null; // assuming you're not using this for now
    const normalizedType = /mix/gi.test(type) ? "Mixed" : type;
    const formattedDate = dayjs(
        feedback?.createdAt || createdAt || Date.now()
    ).format("MMM D, YYYY");

    return (
        <div className="card-border w-[360px] max-sm:w-full min-h-96 p-4 rounded-xl bg-dark-900 flex flex-col justify-between">
            <div className="relative">
                {/* Type badge */}
                <div className="absolute top-0 right-0 px-4 py-2 rounded-bl-lg bg-light-600">
                    <p className="badge-text">{normalizedType}</p>
                </div>

                {/* Company image */}
                <Image
                    src={getRandomInterviewCover()}
                    alt="cover image"
                    width={90}
                    height={90}
                    className="rounded-full object-cover size-[90px]"
                />

                {/* Role */}
                <h3 className="mt-5 text-lg font-semibold capitalize">
                    {role} Interview
                </h3>

                {/* Date and Score */}
                <div className="flex flex-row gap-5 mt-3 text-sm text-muted">
                    <div className="flex items-center gap-2">
                        <Image src="/calendar.svg" width={20} height={20} alt="calendar" />
                        <p>{formattedDate}</p>
                    </div>

                    <div className="flex items-center gap-2">
                        <Image src="/star.svg" width={20} height={20} alt="star" />
                        <p>{feedback?.totalScore || "---"}/100</p>
                    </div>
                </div>

                {/* Feedback text or placeholder */}
                <p className="line-clamp-2 mt-5 text-sm text-muted-foreground">
                    {feedback?.finalAssessment ||
                        "You haven't taken this interview yet. Take it now to improve your skills."}
                </p>
            </div>

            {/* Tech icons + View button */}
            <div className="flex flex-row justify-between items-center mt-6">
                <DisplayTechIcons techStack={techstack} />

                <Button className="btn-primary">
                    <Link
                        href={
                            feedback
                                ? `/interview/${interviewId}/feedback`
                                : `/ai_mock_interviews/app/(root)/interview/${interviewId}`
                        }
                    >
                        {feedback ? "Check Feedback" : "View Interview"}
                    </Link>
                </Button>
            </div>
        </div>
    );
};

export default InterviewCard;
