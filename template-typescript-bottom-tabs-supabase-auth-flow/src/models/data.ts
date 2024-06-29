import { IProjectPlan } from './types';

export const ProjectPlanData: IProjectPlan = [
  {
    Code: 'A',
    Description: 'STRUCTURE',
    Quantity: '',
    Unit: '',
    Rate: '104,840.30',
    kids: [
      {
        parentCode: 'A',
        Code: '01',
        Description: 'Site Preparation',
        Quantity: 213,
        Unit: 'm2',
        Rate: 150.8,
        cats: [
          {
            name: 'Exterior Demolition',
            kids: [
              {
                Code: 'A.01.A',
                Description:
                  'Remove timber deck and deck structure',
                Quantity: 1,
                Unit: 'sum',
                Rate: 2240.0,
              },
              {
                Code: 'A.01.B',
                Description:
                  'Remove section of existing living/dining including complete structure',
                Quantity: 1,
                Unit: 'sum',
                Rate: 1170.0,
              },
              {
                Code: 'A.01.C',
                Description:
                  'Remove existing roof covering with flashings',
                Quantity: 1,
                Unit: 'sum',
                Rate: 910.0,
              },
              {
                Code: 'A.01.D',
                Description:
                  'Remove existing roof structure',
                Quantity: 1,
                Unit: 'sum',
                Rate: 3120.0,
              },
              {
                Code: 'A.01.E',
                Description:
                  'Remove section of external wall framing with exterior cladding',
                Quantity: 1,
                Unit: 'sum',
                Rate: 2275.0,
              },
              {
                Code: 'A.01.F',
                Description:
                  'Remove exterior windows and doors',
                Quantity: 1,
                Unit: 'sum',
                Rate: 1755.0,
              },
              {
                Code: 'A.01.G',
                Description:
                  'Remove section of internal timber wall framing with linings',
                Quantity: 1,
                Unit: 'sum',
                Rate: 1950.0,
              },
              {
                Code: 'A.01.H',
                Description:
                  'Remove interior doors with framing',
                Quantity: 1,
                Unit: 'sum',
                Rate: 930.0,
              },
              {
                Code: 'A.01.I',
                Description:
                  'Remove existing kitchen fittings and fit-out',
                Quantity: 1,
                Unit: 'sum',
                Rate: 700.0,
              },
              {
                Code: 'A.01.J',
                Description:
                  'Remove existing laundry fittings',
                Quantity: 1,
                Unit: 'sum',
                Rate: 420.0,
              },
              {
                Code: 'A.01.K',
                Description:
                  'Allowance to prepare existing surfaces for proposed new works',
                Quantity: 1,
                Unit: 'sum',
                Rate: 10400.0,
              },
              {
                Code: 'A.01.L',
                Description:
                  'Dispose demolished material. Assumed 15 ton at $300/ton',
                Quantity: 15,
                Unit: 'ton',
                Rate: 300.0,
              },
              {
                Code: 'A.01.M',
                Description:
                  'Allow to clear area for proposed extension including stripping top soil 150mm deep, levelling as necessary',
                Quantity: 50,
                Unit: 'm2',
                Rate: 35.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'A',
        Code: '02',
        Description: 'Substructure',
        Quantity: 213,
        Unit: 'm2',
        Rate: 40.85,
        cats: [
          {
            name: 'Piling',
            kids: [
              {
                Code: 'A.02.A',
                Description:
                  '125mm x 125mm H5 post-cast in pile. Includes concrete surround and back-fill up to 900mm deep',
                Quantity: 26,
                Unit: 'no',
                Rate: 312.0,
              },
              {
                Code: 'A.02.B',
                Description: 'Ditto 180mm pile',
                Quantity: 1,
                Unit: 'no',
                Rate: 590.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'A',
        Code: '03',
        Description: 'Frame',
        Quantity: 213,
        Unit: 'm2',
        Rate: 300.56,
        cats: [
          {
            name: 'Sub-Floor Framing',
            kids: [
              {
                Code: 'A.03.A',
                Description: '2/140x45mm H3.2 bearers',
                Quantity: 28,
                Unit: 'm',
                Rate: 39.2,
              },
              {
                Code: 'A.03.B',
                Description: '2/190x45mm H3.2 bearers',
                Quantity: 6,
                Unit: 'm',
                Rate: 45.6,
              },
              {
                Code: 'A.03.C',
                Description: '3/140x45mm H3.2 bearers',
                Quantity: 6,
                Unit: 'm',
                Rate: 59.2,
              },
              {
                Code: 'A.03.D',
                Description: '100x100mm diagonal bracing',
                Quantity: 25,
                Unit: 'm',
                Rate: 41.7,
              },
              {
                Code: 'A.03.E',
                Description: '190x45mm joists at @450crs',
                Quantity: 125,
                Unit: 'm',
                Rate: 23.7,
              },
              {
                Code: 'A.03.F',
                Description: '90x45mm joists at @400crs',
                Quantity: 70,
                Unit: 'm',
                Rate: 17.0,
              },
              {
                Code: 'A.03.G',
                Description: '20mm thick strandfloor',
                Quantity: 30,
                Unit: 'm2',
                Rate: 71.0,
              },
            ],
          },
          {
            name: 'Structural Steel',
            kids: [
              {
                Code: 'A.03.H',
                Description: '180UB18',
                Quantity: 109,
                Unit: 'kg',
                Rate: 20.0,
              },
            ],
          },
          {
            name: 'Timber Lintels and Beams',
            kids: [
              {
                Code: 'A.03.I',
                Description: '2/190x45mm beam',
                Quantity: 5,
                Unit: 'm',
                Rate: 57.0,
              },
              {
                Code: 'A.03.J',
                Description: '300x90 HYONE',
                Quantity: 9,
                Unit: 'm',
                Rate: 153.0,
              },
              {
                Code: 'A.03.K',
                Description: '2/240X45mm SG8',
                Quantity: 5,
                Unit: 'm',
                Rate: 70.0,
              },
              {
                Code: 'A.03.L',
                Description: '2/90x45mm SG8',
                Quantity: 4,
                Unit: 'm',
                Rate: 30.0,
              },
              {
                Code: 'A.03.M',
                Description: '2/140x45mm lintels',
                Quantity: 2,
                Unit: 'm',
                Rate: 46.2,
              },
            ],
          },
          {
            name: 'Wall Framing',
            kids: [
              {
                Code: 'A.03.N',
                Description: '180SQ PL8 H5 column',
                Quantity: 3,
                Unit: 'm',
                Rate: 270.0,
              },
              {
                Code: 'A.03.O',
                Description: '90x45mm H1.2 bottom plate',
                Quantity: 60,
                Unit: 'm',
                Rate: 15.1,
              },
              {
                Code: 'A.03.P',
                Description: '90x45mm H1.2 top plate',
                Quantity: 60,
                Unit: 'm',
                Rate: 15.1,
              },
              {
                Code: 'A.03.Q',
                Description: '90mm H1.2 extra top plate',
                Quantity: 60,
                Unit: 'm',
                Rate: 20.9,
              },
              {
                Code: 'A.03.R',
                Description:
                  '90x45mm H1.2 studs at @600crs',
                Quantity: 570,
                Unit: 'm',
                Rate: 15.1,
              },
              {
                Code: 'A.03.S',
                Description: '90x45mm H1.2 dwangs',
                Quantity: 180,
                Unit: 'm',
                Rate: 17.5,
              },
            ],
          },
          {
            name: 'Ceiling Framing',
            kids: [
              {
                Code: 'A.03.T',
                Description:
                  '70mm x 35mm ceiling battens at @600crs',
                Quantity: 60,
                Unit: 'm',
                Rate: 13.3,
              },
            ],
          },
          {
            name: 'Roof Framing',
            kids: [
              {
                Code: 'A.03.U',
                Description: 'Supply and install trusses',
                Quantity: 135,
                Unit: 'm2',
                Rate: 90.0,
              },
              {
                Code: 'A.03.V',
                Description:
                  '240x45mm H1.2 rafters at @600crs',
                Quantity: 192,
                Unit: 'm',
                Rate: 29.4,
              },
              {
                Code: 'A.03.X',
                Description: '90x45mm purlins at @900crs',
                Quantity: 321,
                Unit: 'm',
                Rate: 16.7,
              },
              {
                Code: 'A.03.Y',
                Description: '150x90mm faux beam',
                Quantity: 8,
                Unit: 'm',
                Rate: 64.0,
              },
              {
                Code: 'A.03.Z',
                Description: '150x45mm faux rafter',
                Quantity: 77,
                Unit: 'm',
                Rate: 32.0,
              },
            ],
          },
          {
            name: 'Miscellaneous',
            kids: [
              {
                Code: 'A.03.AA',
                Description:
                  'Allow for sundry builders works as required',
                Quantity: 1,
                Unit: 'allow',
                Rate: 5000.0,
              },
              {
                Code: 'A.03.AB',
                Description:
                  'Allowance for blocking and miscellaneous framing as required',
                Quantity: 1,
                Unit: 'allow',
                Rate: 3000.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Code: 'B',
    Description: 'EXTERIOR FABRIC',
    Quantity: '',
    Unit: '',
    Rate: '143,971.10',
    kids: [
      {
        parentCode: 'B',
        Code: '04',
        Description: 'Roof',
        Quantity: 213,
        Unit: 'm2',
        Rate: 206.73,
        cats: [
          {
            name: 'Roof Covering',
            kids: [
              {
                Code: 'B.04.A',
                Description:
                  'Metalcraft Colorsteel Maxx corrugated longrun roofing over Vent20 ventilation battens',
                Quantity: 253,
                Unit: 'm2',
                Rate: 110.0,
              },
            ],
          },
          {
            name: 'Eaves Facing and Soffit',
            kids: [
              {
                Code: 'B.04.B',
                Description:
                  'Soffit, with 75mm x 40mm framing, 150mm x 40mm fascia, and 4.5mm HardieFlexTM, 450mm wide',
                Quantity: 41,
                Unit: 'm',
                Rate: 149.0,
              },
            ],
          },
          {
            name: 'Eaves Gutter',
            kids: [
              {
                Code: 'B.04.C',
                Description:
                  '150 half round Prefinished Steel, 0.55mm',
                Quantity: 41,
                Unit: 'm',
                Rate: 94.0,
              },
            ],
          },
          {
            name: 'Downpipes',
            kids: [
              {
                Code: 'B.04.D',
                Description:
                  '80mm diameter PVC, 1 offset/3m drop including proprietary offsets and clips',
                Quantity: 4,
                Unit: 'm',
                Rate: 60.0,
              },
            ],
          },
          {
            name: 'Skylights',
            kids: [
              {
                Code: 'B.04.E',
                Description:
                  '1400mm x 555mm Fixed skylight, with timber frame',
                Quantity: 2,
                Unit: 'no',
                Rate: 1800.0,
              },
              {
                Code: 'B.04.F',
                Description: 'Allow new solar tubes',
                Quantity: 1,
                Unit: 'no',
                Rate: 1200.0,
              },
              {
                Code: 'B.04.G',
                Description:
                  'Reinstall existing solar tubes',
                Quantity: 1,
                Unit: 'sum',
                Rate: 1200.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'B',
        Code: '05',
        Description: 'Exterior Walls and Exterior Finish',
        Quantity: 213,
        Unit: 'm2',
        Rate: 184.22,
        cats: [
          {
            name: 'Exterior Cladding',
            kids: [
              {
                Code: 'B.05.A',
                Description: 'Generic building wrap',
                Quantity: 111,
                Unit: 'm2',
                Rate: 32.0,
              },
              {
                Code: 'B.05.B',
                Description:
                  'Bevel back weatherboards to match existing',
                Quantity: 111,
                Unit: 'm2',
                Rate: 198.0,
              },
              {
                Code: 'B.05.C',
                Description:
                  'Sundry labour allowance to connect to existing',
                Quantity: 1,
                Unit: 'allow',
                Rate: 2500.0,
              },
            ],
          },
          {
            name: 'Exterior Trims',
            kids: [
              {
                Code: 'B.05.D',
                Description:
                  'External and internal corner flashings',
                Quantity: 15,
                Unit: 'm',
                Rate: 30.0,
              },
              {
                Code: 'B.05.E',
                Description: '40x10mm facings',
                Quantity: 77,
                Unit: 'm',
                Rate: 20.5,
              },
              {
                Code: 'B.05.F',
                Description: '40x18mm scribers',
                Quantity: 58,
                Unit: 'm',
                Rate: 21.2,
              },
              {
                Code: 'B.05.G',
                Description: 'Sill trays',
                Quantity: 10,
                Unit: 'm',
                Rate: 18.0,
              },
            ],
          },
          {
            name: 'Painting',
            kids: [
              {
                Code: 'B.05.H',
                Description:
                  'Allow for painting to match existing weatherboards',
                Quantity: 111,
                Unit: 'm2',
                Rate: 70.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'B',
        Code: '06',
        Description: 'Windows and Exterior Doors',
        Quantity: 213,
        Unit: 'm2',
        Rate: 284.98,
        cats: [
          {
            name: 'Exterior Doors and Windows',
            kids: [
              {
                Code: 'B.06.A',
                Description:
                  'Selected colour powder coated aluminium joinery. Rates are for installation complete, including all accessories, window opening seal, glazing, hardware',
                Quantity: 42,
                Unit: 'm2',
                Rate: 1350.0,
              },
              {
                Code: 'B.06.B',
                Description: 'New bungalow style window',
                Quantity: 1,
                Unit: 'no',
                Rate: 4000.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Code: 'C',
    Description: 'INTERIOR FINISHING',
    Quantity: '',
    Unit: '',
    Rate: '112,475.50',
    kids: [
      {
        parentCode: 'C',
        Code: '07',
        Description: 'Interior Doors',
        Quantity: 213,
        Unit: 'm2',
        Rate: 103.29,
        cats: [
          {
            name: 'Interior Doors',
            kids: [
              {
                Code: 'C.07.A',
                Description:
                  'Standard hollow core door, hardboard faced, single door',
                Quantity: 8,
                Unit: 'no',
                Rate: 1750.0,
              },
              {
                Code: 'C.07.B',
                Description:
                  'Allowance for media room interior folding door ID5',
                Quantity: 1,
                Unit: 'no',
                Rate: 8000.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'C',
        Code: '08',
        Description: 'Floor Finishes',
        Quantity: 213,
        Unit: 'm2',
        Rate: 48.76,
        cats: [
          {
            name: 'Insulation',
            kids: [
              {
                Code: 'C.08.A',
                Description:
                  'R2.6 Snugfloor insulation to subfloor extension',
                Quantity: 31,
                Unit: 'm2',
                Rate: 35.0,
              },
            ],
          },
          {
            name: 'Timber Flooring',
            kids: [
              {
                Code: 'C.08.B',
                Description:
                  "Owner's selected timber overlay boards on prepared substrate - TBC",
                Quantity: 31,
                Unit: 'm2',
                Rate: 300.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'C',
        Code: '09',
        Description: 'Wall and Ceiling Finishes',
        Quantity: 213,
        Unit: 'm2',
        Rate: 110.75,
        cats: [
          {
            name: 'Insulation',
            kids: [
              {
                Code: 'C.09.A',
                Description: 'R2.6 to external walls',
                Quantity: 111,
                Unit: 'm2',
                Rate: 17.7,
              },
              {
                Code: 'C.09.B',
                Description: 'R6.0 pink batts to roof',
                Quantity: 31,
                Unit: 'm2',
                Rate: 26.8,
              },
            ],
          },
          {
            name: 'Plasterboard Linings',
            kids: [
              {
                Code: 'C.09.C',
                Description:
                  '10mm GIB standard fixed to wall framing, stopped to L4 finish',
                Quantity: 151,
                Unit: 'm2',
                Rate: 47.0,
              },
              {
                Code: 'C.09.D',
                Description:
                  '10mm GIB Ultraline fixed to ceiling framing, stopped to L4 finish',
                Quantity: 80,
                Unit: 'm2',
                Rate: 51.0,
              },
            ],
          },
          {
            name: 'Interior Trims',
            kids: [
              {
                Code: 'C.09.E',
                Description:
                  '90x10mm RP PP villa skirtings',
                Quantity: 70,
                Unit: 'm',
                Rate: 45.0,
              },
            ],
          },
          {
            name: 'Painting',
            kids: [
              {
                Code: 'C.09.F',
                Description:
                  'Acrylic, Seal and Two Coats Semi-gloss, to plasterboard',
                Quantity: 231,
                Unit: 'm2',
                Rate: 28.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'C',
        Code: '10',
        Description: 'Fittings and Fixtures',
        Quantity: 213,
        Unit: 'm2',
        Rate: 265.26,
        cats: [
          {
            name: 'Fittings and Fixtures',
            kids: [
              {
                Code: 'C.10.A',
                Description:
                  "Owner's selected kitchen fit-out - TBC",
                Quantity: 1,
                Unit: 'sum',
                Rate: 40000.0,
              },
              {
                Code: 'C.10.B',
                Description:
                  "Owner's selected pantry fit-out - TBC",
                Quantity: 1,
                Unit: 'sum',
                Rate: 5000.0,
              },
              {
                Code: 'C.10.C',
                Description:
                  "Owner's laundry fit-out - TBC",
                Quantity: 1,
                Unit: 'sum',
                Rate: 7500.0,
              },
              {
                Code: 'C.10.D',
                Description:
                  "Owner's selected Bed1 wardrobe - TBC",
                Quantity: 1,
                Unit: 'sum',
                Rate: 2500.0,
              },
              {
                Code: 'C.10.E',
                Description:
                  'Allow for sundry builders works as required',
                Quantity: 1,
                Unit: 'allow',
                Rate: 1500.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Code: 'D',
    Description: 'SERVICES',
    Quantity: '',
    Unit: '',
    Rate: '38,579.00',
    kids: [
      {
        parentCode: 'D',
        Code: '11',
        Description: 'Plumbing',
        Quantity: 213,
        Unit: 'm2',
        Rate: 27.7,
        cats: [
          {
            name: 'Plumbing',
            kids: [
              {
                Code: 'D.11.A',
                Description:
                  'Allowance to reconnect laundry and kitchen waste',
                Quantity: 1,
                Unit: 'sum',
                Rate: 2000.0,
              },
              {
                Code: 'D.11.B',
                Description: 'Install kitchen sink',
                Quantity: 1,
                Unit: 'no',
                Rate: 1200.0,
              },
              {
                Code: 'D.11.C',
                Description: 'Install laundry tub',
                Quantity: 1,
                Unit: 'no',
                Rate: 1200.0,
              },
            ],
          },
          {
            name: 'Plumbing Fittings',
            kids: [
              {
                Code: 'D.11.D',
                Description: "Owner's selected laundry tub",
                Quantity: 1,
                Unit: 'no',
                Rate: 1500.0,
              },
              {
                Code: 'D.11.E',
                Description:
                  "Owner's selected kitchen sink",
                Quantity: 1,
                Unit: '',
                Rate: 0.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'D',
        Code: '12',
        Description: 'Electrical Services',
        Quantity: 213,
        Unit: 'm2',
        Rate: 46.01,
        cats: [
          {
            name: 'Electrical Services',
            kids: [
              {
                Code: 'D.12.A',
                Description:
                  'Allowance for electrical works and lighting',
                Quantity: 1,
                Unit: 'sum',
                Rate: 9800.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'D',
        Code: '13',
        Description: 'HVAC',
        Quantity: 213,
        Unit: 'm2',
        Rate: 62.37,
        cats: [
          {
            name: 'HVAC',
            kids: [
              {
                Code: 'D.13.A',
                Description:
                  'Escea DF700 Gas fireplace with single flue',
                Quantity: 1,
                Unit: 'no',
                Rate: 7285.0,
              },
              {
                Code: 'D.13.B',
                Description:
                  'Extraction for rangehood - including penetration as required',
                Quantity: 1,
                Unit: 'no',
                Rate: 2000.0,
              },
              {
                Code: 'D.13.D',
                Description:
                  'Mechanical heat recovery ventilation to Laundry room.',
                Quantity: 1,
                Unit: 'no',
                Rate: 1500.0,
              },
              {
                Code: 'D.13.E',
                Description:
                  'Allow for sundry builders works as required',
                Quantity: 1,
                Unit: 'allow',
                Rate: 2500.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Code: 'E',
    Description: 'EXTERNAL WORKS',
    Quantity: '',
    Unit: '',
    Rate: '9,594.00',
    kids: [
      {
        parentCode: 'E',
        Code: '14',
        Description: 'External Works',
        Quantity: 213,
        Unit: 'm2',
        Rate: 45.04,
        cats: [
          {
            name: 'Balustrade',
            kids: [
              {
                Code: 'E.14.A',
                Description:
                  'Straight Timber Pine Balustrades with rounded handrail, newell posts and 3 coats paint or polyurethane',
                Quantity: 6,
                Unit: 'm',
                Rate: 659.0,
              },
            ],
          },
          {
            name: 'Timber Deck',
            kids: [
              {
                Code: 'E.14.B',
                Description:
                  'Assumed 100mm x 25mm Kwila fixed to timber joists',
                Quantity: 12,
                Unit: 'm2',
                Rate: 220.0,
              },
            ],
          },
          {
            name: 'Stairs',
            kids: [
              {
                Code: 'E.14.C',
                Description: 'Pine timber stairs',
                Quantity: 1,
                Unit: 'sum',
                Rate: 3000.0,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    Code: 'F',
    Description: 'PRELIMINARY AND GENERAL',
    Quantity: '',
    Unit: '',
    Rate: '39,986.59',
    kids: [
      {
        parentCode: 'F',
        Code: '15',
        Description: 'Preliminary and General',
        Quantity: 10,
        Unit: '%',
        Rate: 39986.59,
      },
    ],
  },
  {
    Code: 'G',
    Description: 'MARGIN',
    Quantity: '',
    Unit: '',
    Rate: '43,985.25',
    kids: [
      {
        parentCode: 'G',
        Code: '16',
        Description: 'Indirect Overheads and Profit',
        Quantity: 10,
        Unit: '%',
        Rate: 43985.25,
      },
    ],
  },
  {
    Code: 'H',
    Description: 'TAGS',
    Quantity: '',
    Unit: '',
    Rate: '0',
    kids: [
      {
        parentCode: 'H',
        Code: '17',
        Description: 'Tags',
        Quantity: '',
        Unit: '',
        Rate: 0,
        cats: [
          {
            name: 'Clarifications',
            kids: [
              {
                Code: 'H.17.A',
                Description:
                  "This estimate is to be used for feasibility purposes. It's not a contract price.",
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.B',
                Description:
                  "Subtrades' prices to be confirmed once quotes are received",
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
            ],
          },
          {
            name: 'General Exclusions',
            kids: [
              {
                Code: 'H.17.C',
                Description:
                  'Special services e.g. Security, CCTV, MATV, Music systems etc',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.D',
                Description: 'Legal costs',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.E',
                Description:
                  'Additional costs due to changes in Government legislation',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.F',
                Description: 'Cost Escalation',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.G',
                Description: 'Asbestos testing or removal',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
            ],
          },
          {
            name: 'Project Specific Exclusions',
            kids: [
              {
                Code: 'H.17.H',
                Description: 'Asbestos removal',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.I',
                Description: 'Replace existing foundation',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.J',
                Description:
                  'Replace existing floor coverings',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.K',
                Description:
                  'Replace rotten or compromised elements',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.L',
                Description:
                  'Replace subfloor framing elements',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.M',
                Description: 'Replace ceiling battens',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.N',
                Description:
                  'Replace existing wall and ceiling linings',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.O',
                Description:
                  'Replace carpet and other existing flooring',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.P',
                Description: 'Painting existing surfaces',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.Q',
                Description: 'Heating and cooling systems',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.R',
                Description: 'Landscaping',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.S',
                Description: 'Curtains and blinds',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.T',
                Description:
                  'Rock spots or unfavorable elements encountered during excavation works',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.U',
                Description:
                  'Fencing, planter boxes and grass',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.V',
                Description: 'Kerbs and channels',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.X',
                Description: 'Professional fees',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.Y',
                Description: 'Traffic management',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.Z',
                Description: 'Dewatering if necessary',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.AA',
                Description: 'Loose furniture',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
              {
                Code: 'H.17.AB',
                Description: 'Appliances',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
            ],
          },
          {
            name: 'Contingency',
            kids: [
              {
                Code: 'H.17.AC',
                Description: 'Contingency',
                Quantity: '',
                Unit: '',
                Rate: 0,
              },
            ],
          },
        ],
      },
    ],
  },
];

export const SummaryData: IProjectPlan = [
  {
    Code: 'A',
    Description: 'STRUCTURE',
    Quantity: '',
    Unit: '',
    Rate: '104,840.30',
    kids: [
      {
        parentCode: 'A',
        Code: '01',
        Description: 'Site Preparation',
        Quantity: 213,
        Unit: 'm2',
        Rate: 150.8,
        cats: [
          {
            name: 'Exterior Demolition',
            kids: [
              {
                Code: 'A.01.A',
                Description:
                  'Remove timber deck and deck structure',
                Quantity: 1,
                Unit: 'sum',
                Rate: 2240.0,
              },
              {
                Code: 'A.01.B',
                Description:
                  'Remove section of existing living/dining including complete structure',
                Quantity: 1,
                Unit: 'sum',
                Rate: 1170.0,
              },

              {
                Code: 'A.01.K',
                Description:
                  'Allowance to prepare existing surfaces for proposed new works',
                Quantity: 1,
                Unit: 'sum',
                Rate: 10400.0,
              },
              {
                Code: 'A.01.L',
                Description:
                  'Dispose demolished material. Assumed 15 ton at $300/ton',
                Quantity: 15,
                Unit: 'ton',
                Rate: 300.0,
              },
            ],
          },
        ],
      },
      {
        parentCode: 'A',
        Code: '02',
        Description: 'Substructure',
        Quantity: 213,
        Unit: 'm2',
        Rate: 40.85,
        cats: [
          {
            name: 'Piling',
            kids: [
              {
                Code: 'A.02.A',
                Description:
                  '125mm x 125mm H5 post-cast in pile. Includes concrete surround and back-fill up to 900mm deep',
                Quantity: 26,
                Unit: 'no',
                Rate: 312.0,
              },
            ],
          },
        ],
      },
    ],
  },
];
