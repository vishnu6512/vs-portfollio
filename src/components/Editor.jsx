import React from 'react'
import { X } from 'lucide-react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus, vs } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { useTheme } from './ThemeProvider'
import { motion, AnimatePresence } from 'framer-motion'

export default function Editor({ activeTab, setActiveTab }) {
  const { theme } = useTheme()

  const tabs = [
    { name: 'about.js', content: `const aboutMe = {
  name: "Vishnu Kainadan Veedu",
  location: "Kasaragod, Kerala - 671531, India",
  role: "Computer Science and Engineering Student",
  interests: ["Full Stack Development", "Machine Learning", "Computer Vision"],
  contact: {
    email: "vishnukainadan@gmail.com",
    phone: "+91-9074409038",
    linkedin: "vishnu-kainadan",
    github: "vishnu6512"
  }
};

console.log("Hello! I'm " + aboutMe.name);
console.log("I'm passionate about technology and innovation.");
console.log("Currently pursuing B.Tech in Computer Science and Engineering.");
console.log("Let's connect and create something amazing together!");`, language: 'javascript' },
    { name: 'skills.css', content: `.skills {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.skill {
  margin: 10px;
  padding: 15px;
  border-radius: 5px;
  background-color: #007acc;
  color: white;
  font-weight: bold;
  transition: transform 0.3s ease;
}

.skill:hover {
  transform: scale(1.1);
}

.languages { background-color: #f7df1e; color: black; }
.frameworks { background-color: #61dafb; }
.ai-ml { background-color: #FF6F61; }
.web-tech { background-color: #68a063; }
.databases { background-color: #4479A1; }
.tools { background-color: #FF9900; }

/* Skills */
.c, .cpp, .java, .python, .dart { composes: languages; }
.flutter { composes: frameworks; }
.tensorflow, .keras, .pytorch { composes: ai-ml; }
.html, .css, .javascript, .react { composes: web-tech; }
.firebase, .mysql { composes: databases; }
.git, .figma { composes: tools; }`, language: 'css' },
    { name: 'projects.html', content: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vishnu Kainadan Veedu - Projects</title>
</head>
<body>
    <h1>My Projects</h1>
    <ul>
        <li>
            <h2>Automated Vehicle Parts Damage Assessment using Machine Vision</h2>
            <p>Led a team of 4 to develop an Android mobile app in Flutter for real-time vehicle damage classification.</p>
            <ul>
                <li>Designed a machine learning model- MobileNetV2, achieving 91% accuracy in identifying damaged vehicle parts.</li>
                <li>Streamlined workflow with comprehensive PDF report generation for easy assessment and documentation.</li>
                <li>Utilized computer vision techniques to improve detection speed and accuracy, enhancing user experience.</li>
            </ul>
        </li>
        <li>
            <h2>GatePass Android App</h2>
            <p>Built a Flutter-based Android application for managing outpass requests.</p>
            <ul>
                <li>Designed an intuitive user interface for seamless user experience.</li>
                <li>Integrated Firebase for real-time data synchronization.</li>
                <li>Implemented QR code generation for validation.</li>
            </ul>
        </li>
        <li>
            <h2>Weather App</h2>
            <p>Built a React-based web application for displaying real-time weather information.</p>
            <ul>
                <li>Integrated OpenWeatherMap API for accurate weather data.</li>
                <li>Implemented dynamic background themes based on weather conditions.</li>
            </ul>
        </li>
    </ul>
</body>
</html>`, language: 'html' },
    { name: 'experience.json', content: `{
  "internships": [
    {
      "position": "Full Stack Development",
      "company": "Luminar Technolab",
      "location": "Ernakulam",
      "duration": "August 2024 - Present",
      "skills": ["MERN Stack"]
    },
    {
      "position": "Frontend Development using Angular",
      "company": "NEST Digital",
      "location": "Ernakulam",
      "duration": "February 2023",
      "program": "Industry Immersion Program"
    }
  ],
  "leadership": [
    {
      "position": "Chair of ACM Student Chapter",
      "organization": "Providence College of Engineering",
      "duration": "Jan 2024 - Jun 2024",
      "responsibilities": [
        "Developing chapter programs",
        "Ensuring plans and assignments are carried out",
        "Fulfilling chapter obligations to the Association"
      ]
    }
  ],
  "certifications": [
    "UI/UX Designing Excellence Certificate - College of Engineering, Trivandrum",
    "Python Workshop - Providence College Of Engineering",
    "C/C++ Fundamentals - Providence College of Engineering"
  ]
}`, language: 'json' },
    { name: 'education.md', content: `# Education

## B.Tech in Computer Science and Engineering
**Providence College of Engineering, Alappuzha, India**
*December 2020 - June 2024*
- CGPA: 7.33/10

## Senior Secondary
**Sharjah Indian School, Sharjah, United Arab Emirates**
*2019 - 2020*
- Percentage: 77.4%

## Secondary
**Sharjah Indian School, Sharjah, United Arab Emirates**
*2017 - 2018*
- Percentage: 79.4%

---

# Certifications

1. UI/UX Designing Excellence Certificate
   *College of Engineering, Trivandrum*

2. Python Workshop
   *Providence College Of Engineering*

3. C/C++ Fundamentals
   *Providence College of Engineering*`, language: 'markdown' },
    { name: 'contact.md', content: `# Contact Information

Feel free to reach out to me through any of the following channels:

- **Email**: vishnukainadan@gmail.com
- **Phone**: +91-9074409038
- **LinkedIn**: [vishnu-kainadan](https://www.linkedin.com/in/vishnu-kainadan)
- **GitHub**: [vishnu6512](https://github.com/vishnu6512)

## Location
Kasaragod, Kerala - 671531, India

---

I'm always open to new opportunities, collaborations, or just a friendly chat about technology and innovation. Don't hesitate to reach out!

*"The only way to do great work is to love what you do."* - Steve Jobs`, language: 'markdown' },
  ]

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      <div className="flex bg-tab-bar text-tab-text text-xs border-b border-border-color">
        <AnimatePresence>
          {tabs.map((tab) => (
            <motion.button
              key={tab.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.1 }}
              onClick={() => setActiveTab(tab.name)}
              className={`
                px-4 py-2 flex items-center gap-2 border-r border-border-color
                ${activeTab === tab.name 
                  ? 'bg-tab-active text-tab-active-text' 
                  : 'bg-tab-inactive hover:bg-tab-active/50'
                }
              `}
            >
              <span>{tab.name}</span>
              <X
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation()
                  if (tabs.length > 1) {
                    const newActiveTab = tabs.find(t => t.name !== tab.name)?.name
                    if (newActiveTab) setActiveTab(newActiveTab)
                  }
                }}
              />
            </motion.button>
          ))}
        </AnimatePresence>
      </div>
      <div className="flex-1 overflow-auto bg-editor">
        <SyntaxHighlighter
          language={tabs.find(tab => tab.name === activeTab)?.language}
          style={theme === 'dark' ? vscDarkPlus : vs}
          customStyle={{ 
            background: 'transparent', 
            padding: '1rem',
            fontSize: '0.875rem',
            margin: 0,
            height: '100%'
          }}
          showLineNumbers={true}
          lineNumberStyle={{ color: 'var(--line-number)' }}
        >
          {tabs.find(tab => tab.name === activeTab)?.content || ''}
        </SyntaxHighlighter>
      </div>
    </div>
  )
}

