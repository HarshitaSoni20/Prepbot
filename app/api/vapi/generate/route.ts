import { generateText } from "ai";
import { google } from "@ai-sdk/google";
import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

export async function GET() {
 return Response.json({ success: true, data: "THANK YOU!" }, { status: 200 });
}

export async function POST(request: Request) {
 const { type, role, level, techstack, amount, userid } = await request.json();

 if (!userid) {
  return Response.json({ success: false, error: "Missing 'userid' in request body" }, { status: 400 });
 }

 try {
  const { text: questions } = await generateText({
   model: google("gemini-2.0-flash-001"),
   prompt: `Prepare questions for a job interview.
        The job role is ${role}.
        The job experience level is ${level}.
        The tech stack used in the job is: ${techstack}.
        The focus between behavioural and technical questions should lean towards: ${type}.
        The amount of questions required is: ${amount}.
        Please return only the questions, without any additional text.
        The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters which might break the voice assistant.
        Return the questions formatted like this:
        ["Question 1", "Question 2", "Question 3"]
        
        Thank you! <3`,
  });

  // Safe JSON parse
  let parsedQuestions: string[];
  try {
   parsedQuestions = JSON.parse(questions);
  } catch (err) {
   console.error("Invalid JSON format from AI:", questions);
   return Response.json({ success: false, error: "Invalid AI JSON format" }, { status: 500 });
  }

  const interview = {
   role: role,
   type: type,
   level: level,
   techstack: techstack.split(","),
   questions: parsedQuestions,
   userId: userid, // ✅ fixed this
   finalized: true,
   coverImage: getRandomInterviewCover(),
   createdAt: new Date().toISOString(),
  };

  await db.collection("interviews").add(interview);

  return Response.json({ success: true }, { status: 200 });
 } catch (error) {
  console.error("Error:", error);
  return Response.json({ success: false, error: error }, { status: 500 });
 }
}
