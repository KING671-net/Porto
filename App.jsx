import React, { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import SkillsSection from './components/SkillsSection'
import PortfolioSection from './components/PortfolioSection'
import AIAssistant from './components/AIAssistant'
import ContactSection from './components/ContactSection'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import BackgroundParticles from './components/BackgroundParticles'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const cursorRef = useRef(null)
  const appRef = useRef(null)

  useEffect(() => {
    // Mouse move effect
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        gsap.to(cursorRef.current, {
          x: e.clientX,
          y: e.clientY
