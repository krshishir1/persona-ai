import React from 'react'
import FeatureCard from '../components/FeatureCard';

function Product() {
    const features = [
        {
          
          title: "AI-Powered Insights",
          description: "Leverage advanced machine learning algorithms to generate data-driven insights into user behavior, preferences, and demographic patterns for informed decision-making."
        },
        {
          
          title: "Customizable Personas",
          description: "Create highly detailed, industry-specific user personas that align with your business goals and target market segments, enabling precise audience targeting."
        },
        {
          
          title: "Intuitive Interface",
          description: "Experience our streamlined platform designed for efficiency, featuring drag-and-drop functionality, customizable templates, and real-time collaboration tools."
        }
      ];
    
  return (
    <div>
      <div className="text-center mb-16 mt-7">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-6">
            Transform Your User Understanding
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-10">
            Persona AI delivers advanced persona generation tools powered by cutting-edge artificial intelligence, helping businesses create deeper connections with their target audience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 ">
          {features.map((feature, index) => (
            <FeatureCard key={index}  title={feature.title}
            description={feature.description}
          />
          ))}
        </div>
    </div>
  )
}

export default Product
