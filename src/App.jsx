import React, { useEffect } from "react";

import AboutSection from "./sections/AboutSection";
import CertificationsSection from "./sections/CertificationsSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SelectedWorkSection from "./sections/SelectedWorkSection";
import StackSection from "./sections/StackSection";

function App() {
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href");
      if (targetId === "#") return;
      const target = document.querySelector(targetId);
      if (target) {
        const navHeight = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    };
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll));

    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const observedElements = [];
    document.querySelectorAll(".js-reveal").forEach((element) => {
      element.style.opacity = "0";
      observer.observe(element);
      observedElements.push(element);
    });

    const mobileMenuButton = document.getElementById("mobile-menu-button");
    const mobileMenu = document.getElementById("mobile-menu");
    const handleToggleMobile = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.toggle("hidden");
      const isOpen = !mobileMenu.classList.contains("hidden");
      mobileMenuButton?.setAttribute("aria-expanded", String(isOpen));
    };
    const handleCloseMobile = () => {
      if (!mobileMenu) return;
      mobileMenu.classList.add("hidden");
      mobileMenuButton?.setAttribute("aria-expanded", "false");
    };

    if (mobileMenuButton && mobileMenu) {
      mobileMenuButton.addEventListener("click", handleToggleMobile);
      mobileMenu.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", handleCloseMobile);
      });
    }

    return () => {
      links.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll),
      );
      observer.disconnect();
      observedElements.forEach((element) => (element.style.opacity = ""));
      if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.removeEventListener("click", handleToggleMobile);
        mobileMenu.querySelectorAll("a").forEach((link) => {
          link.removeEventListener("click", handleCloseMobile);
        });
      }
    };
  }, []);

  return (
    <div className="bg-surface text-primary font-body antialiased">
      <nav className="fixed top-0 w-full z-50 nav-blur border-b border-slate-200/50 relative">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a
            href="#"
            className="font-display text-2xl font-bold tracking-tight text-primary"
          >
            JeongHoon<span className="text-accent">Jeon</span>
          </a>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Get in Touch
            </a>
          </div>

          <button
            id="mobile-menu-button"
            className="md:hidden p-2 text-primary"
            aria-expanded="false"
            aria-controls="mobile-menu"
            aria-label="Open menu"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div
          id="mobile-menu"
          className="md:hidden hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur border-b border-slate-200/60"
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-3">
            <a
              href="#about"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              Projects
            </a>
            <a
              href="#stack"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              Tech Stack
            </a>
            <a
              href="#experience"
              className="text-sm font-semibold text-slate-700 hover:text-accent transition-colors"
            >
              experience
            </a>
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center px-5 py-2.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-slate-800 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </nav>
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SelectedWorkSection />
        <StackSection />
        <ExperienceSection />
        <CertificationsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
