// Source: Notion "수상 및 활동 (Award & Activity)", in Notion order.
import type { Activity } from "@/types/content";

export const activities: Activity[] = [
  {
    kind: "award",
    title: "Annual Technology Innovation Award",
    short: "group-wide, once a year, about 10 people",
    date: "2023.01",
    lines: [
      "Received the outstanding employee award titled ‘Annual Technology Innovation Award’ at TmaxMetaAI",
      "(Given once a year to about 10 people out of all employees across the group)",
    ],
  },
  {
    kind: "award",
    title: "Super Leader Award",
    short: "group-wide, twice a year, about 5 people",
    date: "2022.06",
    lines: [
      "Received the excellence award titled ‘Super Leader’ at TmaxAI",
      "(Given twice a year to about 5 people out of all employees across the group)",
    ],
  },
  {
    kind: "award",
    title: "Maestro Award",
    short: "group-wide, once a year, about 3 people",
    date: "2022.01",
    lines: [
      "Received the top award titled ‘Maestro’ at TmaxAI",
      "(Given once a year to about 3 people out of all employees across the group)",
    ],
  },
  {
    kind: "paper",
    title: "Master's thesis",
    date: "2016.02",
    lines: [
      "Title: A Study on Mobile Game Design Strategies that Enhance Enjoyment and Self-Efficacy to Promote Everyday Physical Activity",
      "Summary:",
    ],
    bullets: [
      "Physical activity in everyday life has consistently been described as important. This thesis proposes mobile game design strategies for promoting physical activity in everyday life through mixed games, symbolization, achievement and self-regulation. A prototype applying these four design strategies was implemented on an Android smartphone, developed with the traditional Korean game ‘Ttangttameokgi’ in mind.",
      "User research confirmed that clear goal setting, task achievement and a record board for self-regulation can increase users' enjoyment and self-efficacy. In the effectiveness evaluation, 5 of the 6 variables (perceived usefulness, credibility, playfulness, intention to continue use, self-efficacy) showed high reliability and were statistically significant. In conclusion, the mobile game applying the proposed design strategies encouraged users to increase their physical activity and motivated them to exercise.",
    ],
    footer: "Available (public): KAIST Library",
  },
  {
    kind: "paper",
    title: "Conference paper 1",
    date: "2016.01.28",
    lines: [
      "Title: Gamification Can Affect the Sustainability of The Wearable Device for Physical Activity? : User Case Study",
      "Organizer: HCI Society of Korea",
      "Authorship: First author",
      "Pages: Vol.2016 No.1 [2016] p451-455 (English)",
    ],
  },
  {
    kind: "paper",
    title: "Conference paper 2",
    date: "2016.01.29",
    lines: [
      "Title: A Study on Mobile Game Design Using Gamification and Symbolization Strategies to Promote Physical Activity in Everyday Life",
      "Organizer: HCI Society of Korea",
      "Authorship: First author",
      "Pages: Vol.2016 No.1 [2016] p170-177 (Korean)",
    ],
  },
  {
    kind: "paper",
    title: "Journal paper",
    date: "2014.11",
    lines: [
      "Title: An Exploratory Study of Factors Affecting the Usability and Sustainability of Wearable Devices for Health Management - A Review of User Experience from a Convergence Perspective of Technology, Psychology and Interaction",
      "Authorship: Third author",
      "Organizer: Korean Institute of Information Scientists and Engineers, Communications of the KIISE",
      "Pages: Vol. 32, No. 11 (Issue 306), p37-45 (Korean)",
    ],
  },
  {
    kind: "activity",
    student: true,
    title: "Student council representative",
    date: "2013.09",
    lines: ["Served as student representative of the student council at the KAIST Graduate School of Culture Technology"],
  },
  {
    kind: "award",
    student: true,
    title: "Excellence Award, HCI Contest for Public Convenience",
    date: "2013.01",
    lines: [
      "Received the excellence award in the app category at the HCI Contest for Public Convenience hosted by the Seoul National University QoLT Industrial Technology Support Center",
    ],
  },
  {
    kind: "award",
    student: true,
    title: "Commendation from the Mayor of Yeosu",
    date: "2012.07",
    lines: [
      "Received a commendation from the Mayor of Yeosu for serving as a Korean teacher without issues and in an exemplary manner at the Yeosu International Youth Festival, hosted by Yeosu City Hall during the 2012 Yeosu World Expo",
    ],
  },
  {
    kind: "award",
    student: true,
    title: "Top Prize, Social Venture Competition",
    date: "2010.11",
    lines: ["Received the top prize in the idea category at the Social Venture Competition hosted by Social Enterprise Support Network"],
  },
  {
    kind: "activity",
    student: true,
    title: "Exchange student",
    date: "2011.01",
    lines: ["Studied as an exchange student at LTU (Lulea Technology University), Sweden, for the first semester of junior year"],
  },
];
