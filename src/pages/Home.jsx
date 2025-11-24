import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

function Home() {
  const services = [
    {
      title: 'LLM Integration & Development',
      description: 'Custom LLM solutions, prompt engineering, fine-tuning, and RAG implementation. Expert integration of GPT-4, Claude, and other state-of-the-art language models into your products.'
    },
    {
      title: 'Financial AI Solutions',
      description: 'AI-powered solutions for financial services including risk assessment, fraud detection, and portfolio optimization. Specialized expertise in regulatory compliance and financial forecasting.'
    },
    {
      title: 'Enterprise AI Strategy',
      description: 'Strategic consulting to identify AI opportunities, assess feasibility, and create implementation roadmaps. Technical leadership for AI transformation initiatives.'
    },
    {
      title: 'Conversational AI & Agents',
      description: 'Build intelligent chatbots, AI assistants, and autonomous agents. From customer service automation to complex multi-step workflows, creating conversational experiences that delight users.'
    },
    {
      title: 'Data Led Product Growth',
      description: 'Leverage data and AI to drive product decisions, optimize user experiences, and accelerate growth. A/B testing, experimentation frameworks, and analytics infrastructure for product teams.'
    },
    {
      title: 'Training & Workshops',
      description: 'Custom training programs for teams on AI/ML fundamentals, LLM development, and practical applications. Hands-on workshops tailored to your organization\'s needs.'
    }
  ]

  return (
    <>
      <HeroSection />
      <ServicesSection services={services} />
      <ContactSection />
      <Footer />
    </>
  )
}

export default Home
