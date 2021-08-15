const DownloadConstructor = ({ flyers, animations, drawings }) => ({
  flyers: flyers ?? [],
  animations: animations ?? [],
  drawings: drawings ?? [],
});

const LinkConstructor = ({ title, link }) => ({
  title: title ?? 'Untitled Flyer',
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
          title: `VT-201
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT201-GA.pdf',
        },
        {
          title: `VT-202
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT202-GA.pdf',
        },
        {
          title: `VT-301
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT301-GA.pdf',
        },
        {
          title: `VT-302
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT302-GA.pdf',
        },
        {
          title: `VT-303
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT303-GA.pdf',
        },
        {
          title: `VT-304
          `,
          link: 'PWTECH-VOLUTE-THICKENER-VT304-GA.pdf',
        },
      ],
    },
  ],
});

export default downloads;
