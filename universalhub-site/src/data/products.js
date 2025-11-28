export const products = [
  {
    id: 'signal-hub',
    name: 'Signal Hub',
    category: 'Automation',
    price: '$49 / seat',
    rating: 4.8,
    summary:
      'Realtime incident routing with AI playbooks and trust-layer approvals for hybrid ops teams.',
    benefits: [
      'Autofills escalation trees based on telemetry',
      'Slack-native war rooms with instant context',
      'Compliance-ready audit timelines',
    ],
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/signal-hub',
  },
  {
    id: 'nova-crm',
    name: 'Nova CRM',
    category: 'Customer Operations',
    price: '$79 / seat',
    rating: 4.7,
    summary:
      'Relationship intelligence and deal rooms fused into a single view for revenue teams.',
    benefits: [
      'Timeline view of every customer signal',
      'In-call AI notes with CRM sync',
      'Partner-friendly access controls',
    ],
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/nova-crm',
  },
  {
    id: 'pulse-analytics',
    name: 'Pulse Analytics',
    category: 'Data & Insights',
    price: '$299 / workspace',
    rating: 4.9,
    summary:
      'Executive dashboards with narrative layers so stakeholders binge-watch your metrics.',
    benefits: [
      'Narrated metrics with auto-captioned clips',
      'Scenario planning sandbox',
      'Stakeholder access with watermarking',
    ],
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/pulse-analytics',
  },
  {
    id: 'orbit-os',
    name: 'Orbit OS',
    category: 'Collaboration',
    price: '$35 / maker',
    rating: 4.6,
    summary:
      'Canvas-meets-doc platform with multiplayer ideation, motion presets, and content automation.',
    benefits: [
      'Motion-ready hero templates',
      'Token-synced brand systems',
      'Versioned narrative boards',
    ],
    image:
      'https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/orbit-os',
  },
  {
    id: 'holowave-kit',
    name: 'HoloWave Pop-up Kit',
    category: 'Experiential Hardware',
    price: '$18,900 / kit',
    rating: 4.5,
    summary:
      'Modular projection towers, scent modules, and tap-to-buy kiosks for immersive retail.',
    benefits: [
      'Ships globally in seven days',
      'Fold-flat hardware with protective shells',
      'On-site concierge setup available',
    ],
    image:
      'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/holowave-kit',
  },
  {
    id: 'lumen-rail',
    name: 'LumenRail Lighting',
    category: 'Creator Gear',
    price: '$2,990 / set',
    rating: 4.7,
    summary:
      'Travel-ready lighting kit with LUT syncing and mobile control for vertical video.',
    benefits: [
      'Macro-level color fidelity',
      'Magnetic modifiers for fast setups',
      'Battery swap in five seconds',
    ],
    image:
      'https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/lumen-rail',
  },
  {
    id: 'pulse-audio',
    name: 'Pulse Audio Chain',
    category: 'Creator Gear',
    price: '$1,190 / chain',
    rating: 4.6,
    summary:
      'Studio-grade audio kit tuned for echo-heavy lofts and mobile creators.',
    benefits: [
      'Adaptive noise profiles',
      'Magnetically stacking preamps',
      'Bluetooth companion app',
    ],
    image:
      'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/pulse-audio',
  },
  {
    id: 'orbit-kit',
    name: 'Orbit Creator Kit',
    category: 'Creator Gear',
    price: '$890 / kit',
    rating: 4.5,
    summary:
      'Portable studio bundle covering lighting, audio, and motion templates for solo creators.',
    benefits: [
      'Fits in carry-on',
      'Integrated motion presets',
      'Cloud backup for LUTs and audio chains',
    ],
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    link: 'https://example.com/orbit-kit',
  },
]

export const getProductById = (id) =>
  products.find((product) => product.id === id)

