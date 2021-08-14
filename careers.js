const DailyTasks = 'Daily Tasks';
const KeyPerformanceIndicators = 'Key Performance Indicators';
const Requirements = 'Requirements';
const FieldServiceEngineer = {
  title: 'Field Service Engineer',
  description: {
    html: `
    <p>
      As a small and rapidly growing company, PWTech requires employees who are adaptable, flexible, hardworking and 
      motivated and who love the challenge of being an integral part of growing a business. This position is for a 
      self-starter who would like to grow with a company, make their mark in the industry and shape their own career 
      path in technical services, sales or management.</p>
    <p>
      You will need to work with minimal supervision and be able to demonstrate good judgment and sound reasoning in 
      fulfilling this role. This role will ideally suit a recent graduate or someone with a few years of experience. 
      Your primary role will be to provide technical support for our on-site piloting/testing and start-up services.
    </p>
    <p>
      <strong>Traveling will be a non-negotiable part of this job</strong>. You will be based out of our Rosedale, MD 
      office. It is anticipated that you will spend up to 3 weeks a month on the road traveling throughout the U.S. 
      each week. (Head out Monday, back Friday as a general rule). New hires are expected to apply for a passport as 
      part of the hiring process to support occasional travel outside the United States. This job also involves working 
      predominantly in industrial or municipal water or wastewater treatment facilities when in the field.
    </p>
    `,
  },
  sectionOrdering: [
    DailyTasks,
    KeyPerformanceIndicators,
  ],
  sections: {
    [DailyTasks]: {
      html: `
        <ul>
          <li>Running pilot tests, to include transporting pilot trailer to site, set up, and teardown of equipment</li>
          <li>Results analysis and report writing</li>
          <li>Laboratory analysis work</li>
          <li>Commissioning installations of new equipment</li>
          <li>Communicating with and supervising field technicians to ensure a high quality of work</li>
        </ul>
      `,
    },
    [KeyPerformanceIndicators]: {
      html: `
        <p>
          The right applicant will find a very broad array of opportunities for career development beyond the role 
          described here.
        </p>

        <ul>
          <li>
            Analyzing a wide variety of facility processes and determining appropriate physical and chemical options 
            for treatment.
          </li>
          <li>
            Generating required documentation (i.e. data and reports) in a timely manner with minimal supervision, and 
            minimal corrections required.
          </li>
          <li>
            Developing a rapport with customers and other stakeholders in the field and presenting PWTech in the best 
            possible light.
          </li>
          <li>
            Successful start-up and operation of equipment including necessary troubleshooting.</li>
          <li>
            A high level of proficiency in written/spoken English, and a high level of computer literacy utilizing
            Word, Excel, Outlook.
          </li>
        </ul>
      `,
    },
    [Requirements]: {
      html: `
        <p>
          <strong>The following requirements are mandatory and MUST be addressed in a cover letter (no cover letter 
          as per this instruction = no response).</strong> Applicants that cannot demonstrate the following will not 
          be considered:
        </p>
        <ul>
          <li>
            A degree in Chemical Engineering, Environmental Engineering or Civil Engineering with Environmental 
            concentration, or another engineering field with 
            relevant education and/or experience.
          </li>
          <li>A desire to pursue a career in the water/wastewater/environmental industry.</li>
          <li>A current USA Drivers license and a clean driving record.</li>
          <li>The ability to pass DOT physical and drug/alcohol screening.</li>
          <li>The ability to travel 80% of the time, 12 months per year.</li>
        </ul>
        <p><strong>Highly Desirable</strong></p>
        <p>
          The following experience/skills are highly relevant to this job but not required. Candidates with such 
          experience are encouraged to highlight examples of the following in their resume and cover letter:
        </p>
        <ul>
          <li>
            experience in the water or wastewater industry and/or knowledge of water treatment chemistry, 
            microbiology, and modern water and wastewater treatment processes
          </li>
          <li>laboratory skills</li>
          <li>practical trade skills, including any mechanical/plumbing/electrical experience</li>
          <li>any experience with field/pilot testing, starting up, or commissioning equipment</li>
        </ul>
      `,
    },
  },
};

const careers = [
  FieldServiceEngineer,
];

module.exports = {
  careers,
};
