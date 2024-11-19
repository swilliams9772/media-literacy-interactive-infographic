import React, { useState } from 'react';
import {
  Brain,
  Users,
  MessageSquare,
  Search,
  AlertTriangle,
  BookOpen,
  Globe,
  Scale,
  Shield,
  Building2,
  Banknote,
  Users2,
} from 'lucide-react';
import InfoSection from './components/InfoSection';
import AdvancedDataVisuals from './components/AdvancedDataVisuals';
import LineChartComponent from './components/LineChartComponent';
import BarChartComponent from './components/BarChartComponent';
import PieChartComponent from './components/PieChartComponent';

function App() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  // Updated data
  const lineChartData = [
    { date: '2013', value: 1 },
    { date: '2014', value: 3 },
    { date: '2015', value: 5 },
    { date: '2016', value: 7 },
    { date: '2017', value: 10 },
    { date: '2018', value: 13 },
    { date: '2019', value: 16 },
    { date: '2020', value: 18 },
    { date: '2021', value: 19 },
    { date: '2022', value: 19 },
    { date: '2023', value: 21 }, // Adjusted data points for growth over time
  ];

  const barChartData = [
    { name: 'Critical Thinking', value: 95 },
    { name: 'Media Analysis', value: 78 },
    { name: 'Source Evaluation', value: 65 },
    { name: 'Fact-Checking', value: 55 },
    { name: 'Bias Recognition', value: 60 },
  ];

  const pieChartData = [
    { name: 'States with ML Laws', value: 19 },
    { name: 'Active Legislation', value: 25 },
    { name: 'No Action', value: 6 },
  ];

  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <BookOpen className="w-6 h-6" />,
      content: `
In an era where information flows incessantly from a multitude of sources, the ability to critically analyze media content is more crucial than ever. Media narratives shape our perceptions of global events, influencing public opinion and policy decisions that have far-reaching consequences. This guide aims to equip readers with the tools necessary to dissect critiques—particularly those aimed at anti-imperialist organizations—and to recognize narratives that may align with imperialist agendas.

Understanding media literacy in this context involves more than just discerning fact from fiction; it requires a deep engagement with the sources, contexts, and potential biases that inform the information we consume. By developing these critical skills, individuals can navigate the complex media landscape, fostering informed opinions and contributing to a more nuanced global discourse.
      `,
    },
    {
      id: 'state-repression',
      title: 'Evaluating Allegations of State Repression',
      icon: <Shield className="w-6 h-6" />,
      content: `
### Case Study
Allegations arise accusing certain organizations of supporting state violence by endorsing nations like China and Venezuela, which face criticisms over human rights records.

### Media Literacy Approach

* **Source Analysis**: Scrutinize the origins of these allegations. Are they predominantly emanating from Western media outlets or governmental agencies with potential biases? For instance, reports on China's policies in Xinjiang have often been disseminated by think tanks such as the Australian Strategic Policy Institute (ASPI), which has received funding from government and defense industry sources.

* **Contextual Understanding**: Delve into the geopolitical context surrounding these nations. During the 2019 Hong Kong protests, China's actions were viewed by some as measures to preserve national sovereignty against perceived foreign interference.

* **Double Standards**: Reflect on whether similar actions by allied nations receive comparable scrutiny. For example, while Venezuela faces intense media criticism over its political and economic systems, other nations with comparable issues might not be subjected to the same level of scrutiny.
      `,
    },
    {
      id: 'internal-allegations',
      title: 'Scrutinizing Internal Allegations',
      icon: <Building2 className="w-6 h-6" />,
      content: `
### Case Study
An organization is accused of mishandling internal issues, such as allegations of misconduct or abuse.

### Media Literacy Approach

* **Evidence Evaluation**: Seek verifiable evidence supporting these claims. Are the allegations substantiated by credible sources, official investigations, or are they primarily anecdotal?

* **Historical Patterns**: Be aware of historical tactics used to discredit and dismantle progressive movements. During the COINTELPRO operations in the United States, intelligence agencies exploited internal conflicts within organizations like the Black Panther Party to sow distrust and fragmentation.
      `,
    },
    {
      id: 'platforming',
      title: 'Assessing Platform Concerns',
      icon: <Users2 className="w-6 h-6" />,
      content: `
### Case Study
An organization is criticized for collaborating with or giving a platform to individuals or groups labeled as reactionary or extremist.

### Media Literacy Approach

* **Understanding Alliances**: Differentiate between strategic alliances formed for common goals and outright endorsements of specific ideologies. The concept of a united front involves collaborating with diverse groups to achieve shared objectives.

* **Critical Examination**: Analyze the nature of these collaborations. Are they tactical partnerships aimed at a specific goal, or do they signify an alignment with objectionable ideologies?
      `,
    },
    {
      id: 'funding',
      title: 'Investigating Funding Claims',
      icon: <Banknote className="w-6 h-6" />,
      content: `
### Case Study
An organization faces allegations of receiving undisclosed funding from wealthy benefactors or questionable sources.

### Media Literacy Approach

* **Transparency Check**: Examine the organization's financial disclosures and funding mechanisms. Reputable organizations typically provide transparency through public reports.

* **Comparative Analysis**: Consider the scrutiny applied to mainstream entities. Are similar standards used when examining the funding of major political parties, NGOs, or media outlets?
      `,
    },
    {
      id: 'conclusion',
      title: 'Conclusion & Action Steps',
      icon: <Brain className="w-6 h-6" />,
      content: `
### Action Steps for the Reader

1. **Diversify Your Sources**: Engage with a wide range of media outlets, including international and independent sources, to gain multiple perspectives on an issue.

2. **Question and Research**: Don't accept information at face value. Investigate the background of sources, look for corroborating evidence, and be wary of sensationalist reporting.

3. **Educate and Discuss**: Participate in discussions, share insights with others, and promote media literacy within your community.

4. **Stay Informed on Historical Contexts**: Understanding historical events and patterns can provide valuable insights into current affairs and media narratives.

### References and Further Reading

* "Manufacturing Consent" by Noam Chomsky and Edward S. Herman
* "Left-Wing Communism: An Infantile Disorder" by Vladimir Lenin
* Reports from Independent Media Outlets
* Academic Journals on Media Studies
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <header className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Media Literacy in the Age of Imperialism
          </h1>
          <p className="text-xl text-textPrimary/80 italic max-w-3xl mx-auto">
            Understanding Media Narratives and Recognizing Underlying Biases in a Global Context
          </p>
        </header>

        <div className="space-y-16">
          {/* Advanced Data Visuals Component */}
          <section className="animate-fade-in">
            <AdvancedDataVisuals />
          </section>

          {/* Charts Grid */}
          <section className="grid grid-cols-1 gap-8 animate-fade-in">
            <LineChartComponent
              data={lineChartData}
              title="Growth of Media Literacy Laws Over Time"
            />
            <BarChartComponent
              data={barChartData}
              title="Student Proficiency in Media Literacy Skills"
            />
            <PieChartComponent
              data={pieChartData}
              title="Media Literacy Legislation Status"
            />
          </section>

          {/* Info Sections */}
          <section className="space-y-6 animate-fade-in">
            {sections.map((section) => (
              <InfoSection
                key={section.id}
                title={section.title}
                icon={section.icon}
                content={section.content}
                isOpen={openSection === section.id}
                onToggle={() =>
                  setOpenSection(openSection === section.id ? null : section.id)
                }
              />
            ))}
          </section>
        </div>

        <footer className="mt-16 text-center text-textPrimary/60 text-sm">
          <p>Data sources: Media Literacy Now Policy Report 2023, National Survey 2022</p>
        </footer>
      </div>
    </div>
  );
}

export default App;