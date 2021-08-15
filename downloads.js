const DownloadConstructor = ({ flyers, animations, drawings, videos }) => ({
  flyers: flyers ?? [],
  animations: animations ?? [],
  drawings: drawings ?? [],
  videos: videos ?? []
});

const LinkConstructor = ({ title, link }) => ({
  title: title ?? 'Untitled Flyer',
  link: link ?? '#',
});

const VideoConstructor = ({ description, link }) => ({
  description: description ?? '',
  link: link ?? '#',
});

export const downloads = DownloadConstructor({
  flyers: [
    LinkConstructor({
      title: 'Cyclone',
      link: 'cyclone.pdf',
    }),
    LinkConstructor({
      title: 'Raked Bar Screen',
      link: 'raked.pdf',
    }),
    LinkConstructor({
      title: 'SANSEP',
      link: 'sansep.pdf',
    }),
    LinkConstructor({
      title: 'Volute Dewatering Press',
      link: 'PWTechVoluteDewateringPress.pdf',
    }),
    LinkConstructor({
      title: 'Volute Thickener',
      link: 'PWTechVoluteThickener.pdf',
    }),
  ],
  animations: [
  ],
  drawings: [
    {
      title: 'Volute Dewatering Press Models',
      links: [
        {
          title: '<p><b>ES Series</b></p>',
          links: [
            {
              title: 'ES-051',
              link: 'PWTECH-VOLUTE-ES101-GA.pdf',
            },
            {
              title: 'ES-101',
              link: 'PWTECH-VOLUTE-ES101-GA.pdf',
            },
            {
              title: 'ES-131',
              link: 'PWTECH-VOLUTE-ES131-GA.pdf',
            },
            {
              title: 'ES-132',
              link: 'PWTECH-VOLUTE-ES132-GA.pdf',
            },
            {
              title: 'ES-201',
              link: 'PWTECH-VOLUTE-ES201-GA.pdf',
            },
            {
              title: 'ES-202',
              link: 'PWTECH-VOLUTE-ES202-GA.pdf',
            },
            {
              title: 'ES-301',
              link: 'PWTECH-VOLUTE-ES301-GA.pdf',
            },
            {
              title: 'ES-302',
              link: 'PWTECH-VOLUTE-ES302-GA.pdf',
            },
            {
              title: 'ES-303',
              link: 'PWTECH-VOLUTE-ES303-GA.pdf',
            },
            {
              title: 'ES-351',
              link: 'PWTECH-VOLUTE-ES351-GA.pdf',
            },
            {
              title: 'ES-352',
              link: 'PWTECH-VOLUTE-ES352-GA.pdf',
            },
            {
              title: 'ES-353',
              link: 'PWTECH-VOLUTE-ES353-GA.pdf',
            },
            {
              title: 'ES-354',
              link: 'PWTECH-VOLUTE-ES354-GA.pdf',
            },
            {
              title: 'ES-356',
              link: 'PWTECH-VOLUTE-ES356-GA.pdf',
            },
          ],
        },
        {
          title: `
            <p><b>ESR Series</b></p>
            <p>
            A patent-pending adjustable recycle system reliably increases solids capture to 99% or higher by returning 
            only the 'pressate' from the high-pressure dewatering zone back to the mixing tanks.
            </p>
          `,
          links: [
            {
              title: 'ESR-352',
              link: 'PWTECH-VOLUTE-ESR352-GA.pdf',
            },
            {
              title: 'ESR-353',
              link: 'PWTECH-VOLUTE-ESR353-GA.pdf',
            },
          ],
        },
      ],
    },
    {
      title: 'Volute Thickener Models',
      links: [
        {
          title: 'VT-201',
          link: 'PWTECH-VOLUTE-THICKENER-VT201-GA.pdf',
        },
        {
          title: 'VT-202',
          link: 'PWTECH-VOLUTE-THICKENER-VT202-GA.pdf',
        },
        {
          title: 'VT-301',
          link: 'PWTECH-VOLUTE-THICKENER-VT301-GA.pdf',
        },
        {
          title: 'VT-302',
          link: 'PWTECH-VOLUTE-THICKENER-VT302-GA.pdf',
        },
        {
          title: 'VT-303',
          link: 'PWTECH-VOLUTE-THICKENER-VT303-GA.pdf',
        },
        {
          title: 'VT-304',
          link: 'PWTECH-VOLUTE-THICKENER-VT304-GA.pdf',
        },
      ],
    },
  ],
  videos: [
    VideoConstructor({
      link: 'PWTech-Volute-ES201-high-FOG-sludge.mp4',
      description: `Cake solids from this ES-201 Volute contain 50% FOG. Despite the grease and oil, it ran with zero 
      wash water for four months!`,
    }),
    VideoConstructor({
      link: 'PWTech-Volute-ES302-cake-solids.mp4',
      description: `PWTech's ES-302 Volute can run at up to 70 GPM. Clean filtrate drops out of the dewatering drum 
      while cake is discharged from the end.`,
    }),
    VideoConstructor({
      link: 'PWTech-Volute-ES302-clean-filtrate.mp4',
      description: 'PWTech\'s ES-302 uses two drums for twice the throughput of the ES-301.',
    }),
    VideoConstructor({
      link: 'PWTech-Volute-ES302-clean-filtrate.mp4',
      description: 'PWTech\'s ES-302 uses two drums for twice the throughput of the ES-301.',
    }),
    VideoConstructor({
      link: 'PWTech-Volute-ES353[2]-dewatering-press-filtrate.mp4',
      description: `This ES-353[2] Volute in a food processing industrial application automatically runs at 80-130 GPM 
      depending on the amount of feed solids. An open dewatering drum slot in the center allows for future expansion.`,
    }),
    VideoConstructor({
      link: 'PWTech-VT302-Volute-thickener.mp4',
      description: `PWTech's Volute presses frequently ship with conveyors and pumps controlled from the same 
      touchscreen. The press automatically starts and stops the connected equipment. Dry cake solids from the Volute 
      press are discharged from this conveyor before disposal.`,
    }),
    VideoConstructor({
      link: 'Volute-dewatering-press-cake.mp4',
      description: `PWTech's Volute Thickeners are rated for up to 150 GPM per thickening drum. This two drum model 
      rated for 300 GPM is able to run at close to 500 GPM on thickened raw wastewater.`,
    }),
  ],
});

export default downloads;
