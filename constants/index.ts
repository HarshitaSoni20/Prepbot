// import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
// import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};
//
export const interviewer = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate's questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};
//
// export const feedbackSchema = z.object({
//   totalScore: z.number(),
//   categoryScores: z.tuple([
//     z.object({
//       name: z.literal("Communication Skills"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Technical Knowledge"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Problem Solving"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Cultural Fit"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//     z.object({
//       name: z.literal("Confidence and Clarity"),
//       score: z.number(),
//       comment: z.string(),
//     }),
//   ]),
//   strengths: z.array(z.string()),
//   areasForImprovement: z.array(z.string()),
//   finalAssessment: z.string(),
// });
//
export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];
//
export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];
export const generator=
{
  "name": "jsm_mock_interviews",
    "nodes": [
  {
    "name": "start",
    "type": "conversation",
    "isStart": true,
    "metadata": {
      "position": {
        "x": -441.6216049132745,
        "y": -118.36743880955402
      }
    },
    "prompt": "Ask users what kind about what voice agent they want to build",
    "voice": {
      "model": "aura-2",
      "voiceId": "thalia",
      "provider": "deepgram"
    },
    "variableExtractionPlan": {
      "output": [
        {
          "title": "level",
          "description": "The job experience level.",
          "type": "string",
          "enum": [
            "entry",
            "mid",
            "senior"
          ]
        },
        {
          "title": "amount",
          "description": "How many questions would you like to generate?",
          "type": "number",
          "enum": []
        },
        {
          "title": "techstack",
          "description": "A list of technologies to cover during the job interview. For example, React, Next.js, Express.js, Node and so on…",
          "type": "string",
          "enum": []
        },
        {
          "title": "role",
          "description": "What role should would you like to train for? For example Frontend, Backend, Fullstack, Design, UX? ",
          "type": "string",
          "enum": []
        },
        {
          "title": "type",
          "description": "What type of the interview should it be? ",
          "type": "string",
          "enum": [
            "entry",
            "mid",
            "senior"
          ]
        }
      ]
    },
    "messagePlan": {
      "firstMessage": "Hey there!"
    }
  },
  {
    "name": "conversation_1",
    "type": "conversation",
    "metadata": {
      "position": {
        "x": -441.28491267920776,
        "y": 289.16807164107723
      }
    },
    "prompt": "Say that the Interview will be generated shortly.",
    "voice": {
      "model": "aura-2",
      "voiceId": "thalia",
      "provider": "deepgram"
    },
    "variableExtractionPlan": {
      "output": []
    }
  },
  {
    "name": "apiRequest_1747991417366",
    "type": "apiRequest",
    "metadata": {
      "position": {
        "x": -441.28491267920776,
        "y": 539.1680716410772
      }
    },
    "method": "POST",
    "url": "https://prepbot-delta.vercel.app/api/vapi/generate",
    "headers": {
      "type": "object",
      "properties": {}
    },
    "body": {
      "type": "object",
      "properties": {
        "role": {
          "type": "string",
          "description": "",
          "value": "{{role}}"
        },
        "type": {
          "type": "string",
          "description": "",
          "value": "{{type}}"
        },
        "level": {
          "type": "string",
          "description": "",
          "value": "{{level}}"
        },
        "amount": {
          "type": "string",
          "description": "",
          "value": "{{amount}}"
        },
        "userid": {
          "type": "string",
          "description": "",
          "value": "{{ userid }}"
        },
        "techstack": {
          "type": "string",
          "description": "",
          "value": "{{ techstack }}"
        }
      }
    },
    "output": {
      "type": "object",
      "properties": {}
    },
    "mode": "blocking",
    "hooks": []
  },
  {
    "name": "conversation_1747991798534",
    "type": "conversation",
    "metadata": {
      "position": {
        "x": -441.28491267920776,
        "y": 839.1680716410772
      }
    },
    "prompt": " Thank the user for their time and informing them that the interview has been generated successfully.",
    "voice": {
      "provider": "11labs",
      "voiceId": "EXAVITQu4vr4xnSDxMaL",
      "stability": 0.5,
      "similarityBoost": 0.75,
      "style": 0,
      "useSpeakerBoost": false,
      "speed": 1,
      "optimizeStreamingLatency": 3,
      "enableSsmlParsing": false,
      "autoMode": false,
      "model": "eleven_turbo_v2_5",
      "chunkPlan": {
        "enabled": true,
        "minCharacters": 30,
        "punctuationBoundaries": [
          ".",
          "!",
          "?",
          ";"
        ],
        "formatPlan": {
          "enabled": true,
          "numberToDigitsCutoff": 2025,
          "replacements": []
        }
      },
      "cachingEnabled": true
    }
  },
  {
    "name": "hangup_1747991880492",
    "type": "hangup",
    "metadata": {
      "position": {
        "x": -349.28491267920776,
        "y": 1089.1680716410772
      }
    }
  }
],
    "edges": [
  {
    "from": "start",
    "to": "conversation_1",
    "condition": {
      "type": "ai",
      "prompt": "If user provided all the required variables."
    }
  },
  {
    "from": "conversation_1",
    "to": "apiRequest_1747991417366",
    "condition": {
      "type": "ai",
      "prompt": ""
    }
  },
  {
    "from": "apiRequest_1747991417366",
    "to": "conversation_1747991798534",
    "condition": {
      "type": "ai",
      "prompt": ""
    }
  },
  {
    "from": "conversation_1747991798534",
    "to": "hangup_1747991880492",
    "condition": {
      "type": "ai",
      "prompt": ""
    }
  }
],
    "model": {
  "provider": "openai",
      "model": "gpt-4o",
      "messages": [
    {
      "role": "system",
      "content": "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters."
    }
  ],
      "temperature": 0.6
}
}
