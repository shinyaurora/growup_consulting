import React from "react";
import Sidebar from "@/components/jobs/sidebar";
import JobList from "@/components/jobs/joblist";

const JobsPage = () => {
  const joblist = [
    {
      id: "1",
      title: "Advice for Life LLC - NechamaShemtov.com",
      rating: 11,
      categories: ["Counseling", "Life Coaching", "Couples Counseling"],
      description:
        "With 30 years of experience as a mentor and certified coach, I specialize in advising women...",
      adress: "Chicago,IL",
      pay_type: "fixed",
      Budget: 100
    },
    {
      id: "2",
      title: "Affordable Life Coaching",
      rating: 6,
      categories: ["Couples Counseling", "Counseling"],
      description:
        "Learn how to live the life you desire! I started affordable life coaching because...",
      adress: "Chicago,IL",
      pay_type: "hourly",
      Budget: 30
    },
    {
      id: "3",
      title: "Roberta Devers MS, Life Coach",
      rating: 3,
      categories: ["Life Coaching", "Counseling"],
      description:
        "I own a life coaching practice where it is my deepest desire to help you move to a...",
      adress: "Chicago,IL",
      pay_type: "hourly",
      Budget: 27
    },
    {
      id: "4",
      title: "Advice for Life LLC - NechamaShemtov.com",
      rating: 11,
      categories: ["Counseling", "Life Coaching", "Couples Counseling"],
      description:
        "With 30 years of experience as a mentor and certified coach, I specialize in advising women...",
      adress: "Chicago,IL",
      pay_type: "fixed",
      Budget: 100
    },
    {
      id: "5",
      title: "Affordable Life Coaching",
      rating: 6,
      categories: ["Couples Counseling", "Counseling"],
      description:
        "Learn how to live the life you desire! I started affordable life coaching because...",
      adress: "Chicago,IL",
      pay_type: "hourly",
      Budget: 30
    },
    {
      id: "6",
      title: "Roberta Devers MS, Life Coach",
      rating: 3,
      categories: ["Life Coaching", "Counseling"],
      description:
        "I own a life coaching practice where it is my deepest desire to help you move to a...",
      adress: "Chicago,IL",
      pay_type: "hourly",
      Budget: 27
    },
  ];

  return (
    <JobList jobs={joblist} />
  )
};

export default JobsPage;