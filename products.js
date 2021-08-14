const ProductConstructor = ({
  title, image, alt, endpoint, sectionOrdering, section, extraLinks,
}) => ({
  title: title ?? '',
  image: image ?? '',
  alt: alt ?? '',
  endpoint: endpoint ?? '',
  sectionOrdering: sectionOrdering ?? [],
  section: section ?? {},
  extraLinks: extraLinks ?? [],
});

// titles

const Description = 'Description';
const Applications = 'Applications';
const Advantages = 'Advantages';
const AFullyAutomatedSystem = 'A Fully Automated System';
const DesignCriteria = 'Design Criteria';
const HowItWorks = 'How It Works';
const VoluteDewateringPressVSThickener = 'Volute Dewatering Press vs Volute Thickener';
const Construction = 'Construction';

// products

const VoluteDewateringPress = ProductConstructor({
  title: 'Volute Dewatering Press',
  image: 'volute_dewatering_press.webp',
  alt: 'Image of our Volute Dewatering Press',
  endpoint: '/volute_dewatering_press',
  contentOrdering: [
    Description,
    Applications,
    Advantages,
    AFullyAutomatedSystem,
    DesignCriteria,
  ],
  content: {
    [Description]: {
      html: `
        <p>
          This innovative sludge dewatering product offers many advantages over conventional sludge management methods. 
          Originally developed in Japan, the Volute Dewatering Press is patented worldwide, with more than 650 
          installations. The key to the process is the unique dewatering drum design. This drum is able to achieve both 
          thickening and pressing (dewatering) of the sludge in a single, compact operation. It can take sludge as 
          dilute as 0.1% solids, directly from a biological process, such as an oxidation ditch, and produce a cake of 
          over 25% solids. Download our product flyer for more details on system operation.
        </p>
      `,
    },
    [Applications]: {
      html: `
        <p>
          The PWTech® Volute Dewatering Press has been installed to handle a wide range of sludges. It is especially 
          useful when sludges have a high oil and fat content that would bind filter materials. Types of sludge the 
          Dewatering Press has been utilized to dewater:
        </p>
        <ul>
          <li>Waste biological sludges (including WAS, fixed film, MBR, aerobic and anaerobic digested)</li>
          <li>Potable water sludges (including alum, ferric, and PAC sludges)</li>
          <li>DAF float from slaughter houses and other agricultural processes</li>
          <li>Oil sludge from machining operations</li>
          <li>Wastes from textile processing</li>
          <li>Food processing and wash-down wastes</li>
        </ul>
      `,
    },
    [Advantages]: {
      html: `
        <ul>
          <li>Highly efficient dewatering</li>
          <li>Eliminate thickening and storage tanks</li>
          <li>24-hour unattended operation</li>
          <li>Reduced running costs</li>
          <li>Can handle feed sludges from <0.2% to >4%</li>
          <li>Less noise, less odor</li>
          <li>Low power and wash water consumption</li>
          <li>Rapid installation</li>
        </ul>
      `,
    },
    [AFullyAutomatedSystem]: {
      html: `
        <p>
          The Volute Dewatering Press is a fully automated system capable of starting up, operating, and shutting 
          down with no operator intervention. This is possible because the control panel is designed to control the 
          operation of wasting sludge directly from the biological processor or clarifier, the automated polymer feed 
          system, flocculation, dewatering, and any conveyors required to remove dewatered cake. Thus, all components 
          of the dewatering system work together, automatically starting up, operating, and shutting down as required.
        </p>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
          PWTech can provide complete systems or work with other suppliers to provide an integrated package. 
          In addition, unit operating and alarm outputs for connection to plant PLC/SCADA systems are standard. 
          Several models are available. Download our product flyer for a list of available model sizes.
        </p>
      `,
    },
  },
  extraLinks: [
    {
      text: 'Download Product Flyer',
      link: 'PWTechVoluteDewateringPress.pdf',
    },
    {
      text: 'View Product Animation',
      link: '#',
    },
  ],
});

const RakedBarScreen = ProductConstructor({
  title: 'Raked Bar Screen',
  image: 'raked_bar_screen.webp',
  alt: 'Image of our Raked Bar Screen',
  endpoint: '/raked_bar_screen',
  contentOrdering: [
    Description,
    Advantages,
    HowItWorks,
    DesignCriteria,
  ],
  content: {
    [Description]: {
      html: `
        <p>
          The Raked Bar Screen is an efficient, reliable and cost-effective screening system for large combined sewer 
          overflows (CSOs). It incorporates a horizontal fixed stainless steel bar-rack and a TIVAR* screen comb. The 
          bars are continually raked by the hydraulically driven comb assembly. Maintenance of the Raked Bar Screen is 
          minimal, and can be performed from the top/clean water side of the screen. Download our product flyer for 
          more information on system operation.
        </p>
        <p>
          <small>*TIVAR is the registered trademark of Poly Hi Solidur, Ft. Wayne, Ind.</small>
        </p>
      `,
    },
    [Advantages]: {
      html: `
        <p>The screen modules are installed horizontally onto the storm discharge weir.</p>
        <p>
          Use of horizontally configured screens (as opposed to vertical screens) ensures that all flows, high or low, 
          are screened with minimum velocities through the screen.
        </p>
        <p>
          The entire flow is in contact with the screen, so that the perpendicular flow path screens more efficiently.
        </p>
        <p>
          Horizontal orientation assures equal loading across the surface and thus symmetrical distribution of forces 
          on the cleaning rakes. This minimizes jamming and breaking of comb tines.
        </p>
      `,
    },
    [HowItWorks]: {
      html: `
        <ol>
          <li>An ultrasonic level meter monitors the upstream water level.</li>
          <li>
            The screen bars are set at the same level as the overflow weir. A level signal alerts the comb to begin its 
            raking operation before the overflow occurs.
          </li>
          <li>The flow is upward through the screen bars.</li>
          <li>
            The TIVAR combs rake back and forth on a continuous basis to keep the screen face clear. 
            Screenings are retained in the continuation flow.
          </li>
          <li>
            When the water level drops below the overflow weir, the sensor signals the screen to stop. The screen 
            cleans itself, and resets automatically for the next overflow.
          </li>
        </ol>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
          Patented design features that distinguish the performance and reliability of the PWTech® Raked Bar Screen 
          include:
        </p>

        <ul>
          <li>Recessed release zones at every 2 ft. of screen length</li>
          <li>Modular construction</li>
          <li>Single screen can handle flow rates from 3 to 100 mgd</li>
          <li>3/16", 1/4", 5/16", 3/8" and 1/2" bar spacings</li>
        </ul>
      `,
    },
  },
  extraLinks: [
    {
      text: 'Download Product Flyer',
      link: 'raked.pdf',
    },
  ],
});

const SanSep = ProductConstructor({
  title: 'SANSEP',
  image: 'SANSEP.webp',
  alt: 'Image of our SANSEP',
  endpoint: '/sansep',
  content: {
    [Description]: {
      html: `
        <p>
        The SanSep provides a much more efficient level of solids removal than other mechanical and static screening 
        devices that are typically used in wet weather excess sanitary flow treatment. Utilizing patented PWTech® 
        technology, the SanSep allows screening of the solids without blocking. It greatly reduces the impact of excess
         wet weather sanitary flows by removing all visible solids and associated pollutants and returning them 
         directly to the sewer. Download our product flyer for more details.
        </p>
      `,
    },
    [Applications]: {
      html: `
        <ul>
          <li>Patented non-blocking screen</li>
          <li>Large flow range</li>
          <li>Small footprint</li>
          <li>Unobtrusive components—no above-ground facilities</li>
          <li>Low maintenance—screening process has no moving parts</li>
          <li>Effluent can be UV disinfected</li>
          <li>High-separation efficiency—captures solids that are much finer than the screen</li>
        </ul>
      `,
    },
    [HowItWorks]: {
      html: `
        <ol>
          <li>Excess flow from the sewer enters the SanSep.</li>
          <li>
            Using patented continuous deflective separation fine-screening technology, all gross solids larger than 
            1 mm and finer sediments down to below 0.1 mm are captured and retained inside the unit.
          </li>
          <li>
            The settleable solid pollutants settle into the lower catchment chamber (sump), while the "floatables" 
            are retained at the surface of the upper chamber (separation chamber).
          </li>
          <li>
            The innovative continuous deflective separation technology allows screening of the solids without 
            blocking. A strong flow of fluid is maintained across the face of the screen, producing a "washing" effect 
            that keeps solids moving while the fluid passes through the screen.
          </li>
          <li>
            The SanSep is typically automated with an underflow pump, which periodically removes the solids and 
            returns them to the interceptor sewer, downstream of the overflow point.
          </li>
          <li>
            A process logic controller with a level sensor within the unit controls this entire process and returns 
            the unit to standby condition between wet-weather sanitary flow events. Thus, operator attendance at 
            sites is not required.
          </li>
        </ol>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
        A single unit treats flows ranging from 0.3 to 40 cfs, while multiple units can be used for even larger flows. 
        Typical loading rates across the whole unit are 150 gpm/ft². With its non-blocking screen, the SanSep operates 
        continuously at its maximum design flow.
        </p>
      `,
    },
  },
  contentOrdering: [
    Description,
    Applications,
    HowItWorks,
    DesignCriteria,
  ],
  extraLinks: [
    {
      text: 'Download Product Flyer',
      link: 'sansep.pdf',
    },
    {
      text: 'View Product Animation',
      link: '#',
    },
  ],
});

const TippingBucket = ProductConstructor({
  title: 'Tipping Bucket',
  image: 'tipping_bucket.webp',
  alt: 'Image of our Tipping Bucket',
  endpoint: '/tipping_bucket',
  content: {
    [Description]: {
      html: `
        <p>
          With the increased use of storm water retention tanks, the need arises to routinely clean the tanks. Regular 
          cleaning maintains combined sewer overflow (CSO) capacity and prevents septicity and odor problems associated 
          with stagnant effluent. PWTech® Tipping Buckets provide a simple yet robust solution for flushing retention 
          tanks. Tipping Buckets can be used to clean rectangular storm tanks and humus tanks, as well as crosswave 
          screens.
        </p>
      `,
    },
    [Applications]: {
      html: `
        <ul>
          <li>Storm Tanks</li>
          <li>Humus Tanks</li>
          <li>Crosswave Screen</li>
        </ul>
      `,
    },
    [Advantages]: {
      html: `
        <ul>
          <li>Stainless steel construction</li>
          <li>Cleans a retention tank up to 185 ft long and 54 ft wide with a single flush</li>
          <li>Multiple Tipping Buckets can be used for tank widths in excess of 54 ft</li>
          <li>Can be installed for use with new underground tanks or retrofitted with existing concrete tanks</li>
          <li>Cleans both above- and below-ground retention tanks</li> 
        </ul>
      `,
    },
    [HowItWorks]: {
      html: `
        <ol>
          <li>
            When a storm water retention tank is drained, a signal from the control center fills the bucket with 
            effluent.
          </li>
          <li>
            The filled bucket, which is finely balanced, shifts from its center of gravity and tips on two sealed 
            bearings.
          </li>
          <li>
            The contents flow down the contoured back wall, flushing the tanks contents into a drainage sump.
          </li>
        </ol>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
          For installation with new underground tanks, a stainless steel anchorage frame system is supplied that can be 
          cast into the ceiling of the storm tank. Process Wastewater Technologies physically checks the position of 
          the frame prior to the bucket installation.
        </p>
        <p>
          For installation with existing concrete tanks, support bearings are fixed to the wall with stainless steel 
          chemical anchors. Process Wastewater Technologies will supply radius blocks to install into the tank floor 
          and end wall, creating the required radius, ensuring no loss of velocity when the Tipping Bucket empties.
        </p>
        <p>
          Constructed separately and located at the discharge end of the tank, the drainage sump should have a 20% 
          larger capacity than that of the bucket. A radius measuring 0.03, 0.04, or 0.06 inch below the Tipping 
          Bucket ensures that the tank floor drains uniformly into the sump constructed across the tank's width.
        </p>
      `,
    },
  },
  contentOrdering: [
    Description,
    Applications,
    Advantages,
    HowItWorks,
    DesignCriteria,
  ],
  extraLinks: [],
});

const VoluteThickener = ProductConstructor({
  title: 'Volute Thickener',
  image: 'volute_thickener.webp',
  alt: 'Image of our Volute Thickener',
  endpoint: '/volute_thickener',
  contentOrdering: [
    Description,
    Advantages,
    HowItWorks,
    VoluteDewateringPressVSThickener,
    DesignCriteria,
  ],
  content: {
    [Description]: {
      html: `
        <p>
        The PWTech® Volute Thickener is a fully-automated, virtually maintenance-free unit using the "dewatering drum" 
        design used for the Volute Dewatering Press. The Volute Thickener is perfect for automated sludge wasting from 
        biological processes and thickening prior to storage, digestion, further dewatering, or transport, giving a 
        solids output from 3% to 12%. The unit can be completely automated, uses very little power, and can be run 
        over 30,000 hours between overhauls.
        </p>
      `,
    },
    [Advantages]: {
      html: `
        <ul>
          <li>Fully automated from start-up to shutdown, allowing 24-hour unattended operation</li>
          <li>Integrated system, including polymer system, feed pump, flocculation tank, and controls</li>
          <li>
            High solids recovery—over 99%—so filtrate may not need to be returned through the entire treatment process
          </li>
          <li>Very low power consumption—even the motors on our largest units use less than one horsepower</li>
          <li>Low maintenance requirements between overhauls</li>
          <li>Zero wash water requirements under normal operation</li>
          <li>
            High-quality construction for long life and low maintenance. We use only stainless steel and engineered 
            plastics, and "sealed-for-life" drive motors in our durable design
          </li>
        </ul>
      `,
    },
    [HowItWorks]: {
      html: `
        <ol>
          <li>
            Dilute sludge is dosed with polymer as it enters a flocculation tank.
          </li>
          <li>
            The sludge is gently mixed in the tank, separating into discrete agglomerations of solids (flocs) and free 
            water, and then overflows into the thickening drums.
          </li>
          <li>
            Free water is discharged through the gaps in the thickening drum while solids are conveyed along the length 
            of the drum and discharged at the opposite end.
          </li>
        </ol>
      `,
    },
    [VoluteDewateringPressVSThickener]: {
      html: `
        <p>
          While both drums are the same size, the drum of the Volute Thickener is made entirely with plastic rings 
          with a constant gap between the moving and fixed rings. The screw is a constant pitch, and there is no end 
          plate. The drum's motor is less highly geared to allow for greater drum speeds. In addition, the piping 
          connections are larger and the flocculation tank is larger to accommodate higher flows.
        </p>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
          Flows of up to 400 GPM can be dewatered with a single unit. PWTech offers the Volute Thickener as a complete 
          package, including polymer system, feed pump (if required), flocculation tank, and controls. Several models 
          are available.
        </p>
      `,
    },
  },
  extraLinks: [
    {
      text: 'Download Product Flyer',
      link: 'PWTechVoluteThickener.pdf',
    },
  ],
});

const Cyclone = ProductConstructor({
  title: 'Cyclone',
  image: 'cyclone.webp',
  alt: 'Image of our Cyclone',
  endpoint: '/cyclone',
  contentOrdering: [
    Description,
    Advantages,
    HowItWorks,
    Construction,
    DesignCriteria,
  ],
  content: {
    [Description]: {
      html: `
        <p>
        This patented self-powered drum screen is ideal for applications such as storm water tank discharges, pumping 
        station overflows, sewage treatment plant by-passes, and small combined sewer overflows. The Cyclone achieves 
        100 percent removal of ¼-in. (6-mm) particles for two dimensions. Designed to be virtually maintenance free, 
        the Cyclone has a projected 20-year life. Download the product flyer for more information on how the Cyclone 
        operates.
        </p>
      `,
    },
    [Advantages]: {
      html: `
        <ul>
          <li>Virtually maintenance free</li>
          <li>Requires no external power source</li>
          <li>The ¼-in. (6-mm) aperture screen is self-cleansing</li>
          <li>Simple, rapid installation</li>
          <li>Ideal for treating small combined sewer overflows</li>
        </ul>
      `,
    },
    [HowItWorks]: {
      html: `
        <ol>
          <li>
            The cyclone is located at the spill point from the sewer system with the fixed internal weir at the 
            minimum system discharge level.
          </li>
          <li>
            When fluid exceeds the level of the fixed internal weir, it flows through the screen, onto the internal 
            vanes, and out of the discharge end.
          </li>
          <li>
            The flow of water onto the vanes, which are attached to the outside screen, causes rotation of the vanes 
            and screen.
          </li>
          <li>
            The rotation of the screen creates a sheer force that continuously cleanses the screen surface. As flow 
            increases, the additional fluid flowing over the weir and onto the vanes increases the rotation velocity, 
            increasing the sheer and cleansing action.
          </li>
        </ol>
      `,
    },
    [Construction]: {
      html: `
        <p>
        Manufactured from 316L or 304L stainless steel, then electro-polished, the Cyclone bolts directly to a chamber 
        wall over a circular outlet, or spans across the CSO chamber from weir wall to chamber wall. The shaft bearings 
        are also stainless steel and are sealed for life. The standard drum unit is 28 in. (710 mm) long with a 20-in. 
        (500-mm) diameter. Whether installed individually or in multiples, the Cyclone can be designed with 
        quick-release fittings and frames for easy removal and access to the CSO chamber.
        </p>
      `,
    },
    [DesignCriteria]: {
      html: `
        <p>
          Three standard sizes with design flows of 1.77 cfs (1.14 mgd), 3.53 cfs (2.28 mgd), and 5.30 cfs (3.43 mgd).
        </p>
      `,
    },
  },
  extraLinks: [
    {
      text: 'Download Product Flyer',
      link: 'cyclone.pdf',
    },
  ],
});

export const products = [
  VoluteDewateringPress,
  RakedBarScreen,
  SanSep,
  TippingBucket,
  VoluteThickener,
  Cyclone,
];

export default products;
