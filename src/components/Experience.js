import React, { useEffect, useState } from 'react';
import FadeInSection from './FadeInSection';
import '../styles/Experience.css';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css'; // Import core styles for the PDF viewer

const Experience = () => {
  const [pdfUrl, setPdfUrl] = useState(null); // State to hold the dynamically imported PDF

  // Dynamically import the PDF when the component mounts
  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdfModule = await import('../assets/pdfs/Darius_Molina_Resume.pdf'); // Adjust path if needed
        setPdfUrl(pdfModule.default); // Set the PDF URL to the dynamically imported file
      } catch (error) {
        console.error('Error loading PDF:', error);
      }
    };
    loadPdf();
  }, []);

  return (
    <div className="experience-container">
      {/* Work Experience Section */}
      <FadeInSection>
        <div className="experience-section">
          <h2>Work Experience</h2>
          <div className="work-experience">
            <FadeInSection>
              <div className="job">
                <h3>Software Engineer | AI Code Evaluation Specialist</h3>
                <p><strong>Outlier</strong> · Contract · Sep 2024 - Present</p>
                <ul>
                  <li>Assessed the quality and functionality of AI-generated code, providing detailed rationale for evaluations.</li>
                  <li>Developed efficient, functional solutions to coding challenges, contributing to the continuous improvement of AI coding models.</li>
                  <li>Designed and implemented comprehensive test cases to ensure the accuracy, efficiency, and reliability of AI-generated code.</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="job">
                <h3>Software Engineer | Open-Source</h3>
                <p><strong>Generellem</strong> · Part-time · Aug 2024 - Present</p>
                <ul>
                  <li>Implemented colorized and visually appealing banner and text output in a .NET-based console demo, improving user experience.</li>
                  <li>Enhanced documentation workflow using DocFX and Azure, resolving issues and improving index generation.</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="job">
                <h3>Information Desk Work Leader</h3>
                <p><strong>UC Berkeley Library</strong> · Part-time · Jul 2022 - Aug 2024</p>
                <ul>
                  <li>Provided customer service to patrons, assisting with inquiries and information about library services and materials.</li>
                  <li>Used the Alma Library Management System to manage library resources.</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Leadership Experience Section */}
      <FadeInSection>
        <div className="experience-section">
          <h2>Leadership Experience</h2>
          <div className="leadership-experience">
            <FadeInSection>
              <div className="role">
                <h3>Executive Chair</h3>
                <p><strong>Pilipinx Basketball Association</strong> · Jun 2023 - May 2024</p>
                <ul>
                  <li>Oversaw the intramural basketball team, achieving the first undefeated season in organization history.</li>
                  <li>Planned and hosted fantasy drafts, club socials, and fundraising events.</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="role">
                <h3>Technical Director</h3>
                <p><strong>Pilipinx Cultural Night</strong> · Jun 2022 - May 2023</p>
                <ul>
                  <li>Collaborated with directors, writers, and designers to align on the production's vision.</li>
                  <li>Created and enforced tech rehearsal agendas with stage managers.</li>
                </ul>
              </div>
            </FadeInSection>
            <FadeInSection>
              <div className="role">
                <h3>Social Chair</h3>
                <p><strong>Pilipinx American Association</strong> · Jun 2022 - May 2023</p>
                <ul>
                  <li>Coordinated and facilitated the Friendship Games Program to enhance member engagement and community interaction.</li>
                  <li>Planned and implemented social activities, fostering cross-organizational relationships.</li>
                </ul>
              </div>
            </FadeInSection>
          </div>
        </div>
      </FadeInSection>

      {/* Resume Section */}
      <FadeInSection>
        <div className="experience-section">
          <h2>Resume</h2>
          <div className="resume-container">
            {pdfUrl ? (
              <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
                <Viewer fileUrl={pdfUrl} />
              </Worker>
            ) : (
              <p>Loading PDF...</p>
            )}
          </div>
        </div>
      </FadeInSection>
    </div>
  );
};

export default Experience;
